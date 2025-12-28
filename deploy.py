#!/usr/bin/env python3
"""
MGA MK2 Website Deploy Script
Deploys to Vercel via GitHub and creates a backup on Google Drive.
Version: 1.4 - Added README.txt to snapshots

Usage:
    python3 deploy.py                    # Uses default timestamp message
    python3 deploy.py "Your message"     # Uses custom commit message
"""

import subprocess
import os
import sys
import shutil
from datetime import datetime
from pathlib import Path

# Configuration
PROJECT_DIR = Path(__file__).parent
GOOGLE_DRIVE_PATH = Path.home() / "Library/CloudStorage/GoogleDrive-ken.doris@gmail.com/My Drive"
BACKUP_FOLDER = GOOGLE_DRIVE_PATH / "MGA-Website-Backups"

# Folders to exclude from backup
EXCLUDE_DIRS = {'node_modules', '.next', '.git', '__pycache__'}
EXCLUDE_EXTENSIONS = {'.log'}


def run_command(command, description):
    """Run a shell command and handle errors."""
    print(f"\n{'='*50}")
    print(f"📌 {description}")
    print(f"{'='*50}")

    result = subprocess.run(command, shell=True, capture_output=True, text=True, cwd=PROJECT_DIR)

    if result.stdout:
        print(result.stdout)
    if result.stderr:
        # Only print stderr if it contains actual errors
        if "error" in result.stderr.lower() or "fatal" in result.stderr.lower():
            print(f"⚠️  {result.stderr}")

    return result.returncode == 0


def get_git_info():
    """Get current git commit information."""
    info = {}

    # Get latest commit hash
    result = subprocess.run(
        "git log -1 --format='%H'",
        shell=True, capture_output=True, text=True, cwd=PROJECT_DIR
    )
    info['commit_hash'] = result.stdout.strip().strip("'") if result.returncode == 0 else "Unknown"

    # Get short hash
    result = subprocess.run(
        "git log -1 --format='%h'",
        shell=True, capture_output=True, text=True, cwd=PROJECT_DIR
    )
    info['commit_short'] = result.stdout.strip().strip("'") if result.returncode == 0 else "Unknown"

    # Get commit date
    result = subprocess.run(
        "git log -1 --format='%ci'",
        shell=True, capture_output=True, text=True, cwd=PROJECT_DIR
    )
    info['commit_date'] = result.stdout.strip().strip("'") if result.returncode == 0 else "Unknown"

    # Get commit author
    result = subprocess.run(
        "git log -1 --format='%an <%ae>'",
        shell=True, capture_output=True, text=True, cwd=PROJECT_DIR
    )
    info['commit_author'] = result.stdout.strip().strip("'") if result.returncode == 0 else "Unknown"

    # Get commit message
    result = subprocess.run(
        "git log -1 --format='%s'",
        shell=True, capture_output=True, text=True, cwd=PROJECT_DIR
    )
    info['commit_message'] = result.stdout.strip().strip("'") if result.returncode == 0 else "Unknown"

    # Get recent commits (last 5)
    result = subprocess.run(
        "git log -5 --format='  %h - %s (%cr)'",
        shell=True, capture_output=True, text=True, cwd=PROJECT_DIR
    )
    info['recent_commits'] = result.stdout.strip() if result.returncode == 0 else "Unknown"

    # Get current branch
    result = subprocess.run(
        "git branch --show-current",
        shell=True, capture_output=True, text=True, cwd=PROJECT_DIR
    )
    info['branch'] = result.stdout.strip() if result.returncode == 0 else "Unknown"

    return info


def deploy_to_github(commit_message):
    """Stage, commit, and push to GitHub."""
    print("\n🚀 DEPLOYING TO GITHUB (triggers Vercel auto-deploy)")

    # Check for changes
    result = subprocess.run("git status --porcelain", shell=True, capture_output=True, text=True, cwd=PROJECT_DIR)
    if not result.stdout.strip():
        print("✅ No changes to commit")
        return True

    # Stage all changes
    if not run_command("git add .", "Staging changes"):
        return False

    # Commit
    commit_cmd = f'git commit -m "{commit_message}"'
    if not run_command(commit_cmd, "Committing changes"):
        print("⚠️  Commit may have failed")

    # Push to GitHub
    if not run_command("git push origin main", "Pushing to GitHub"):
        return False

    print("\n✅ Pushed to GitHub! Vercel will auto-deploy.")
    return True


def ignore_patterns(directory, files):
    """Return files/folders to ignore during copy."""
    ignored = []
    for f in files:
        # Check if it's an excluded directory
        if f in EXCLUDE_DIRS:
            ignored.append(f)
        # Check if it's an excluded extension
        elif any(f.endswith(ext) for ext in EXCLUDE_EXTENSIONS):
            ignored.append(f)
    return ignored


def create_readme(snapshot_path, commit_message, git_info, file_count, size_mb):
    """Create a README.txt file in the snapshot with metadata."""
    readme_path = snapshot_path / "README.txt"

    now = datetime.now()

    content = f"""===============================================
MGA MK2 WEBSITE BACKUP
===============================================

SNAPSHOT INFORMATION
--------------------
Date:           {now.strftime('%Y-%m-%d %H:%M:%S')}
Backup Folder:  {snapshot_path.name}
Files:          {file_count}
Size:           {size_mb:.1f} MB

DESCRIPTION
-----------
{commit_message}

GIT COMMIT INFORMATION
----------------------
Branch:         {git_info['branch']}
Commit Hash:    {git_info['commit_hash']}
Short Hash:     {git_info['commit_short']}
Commit Date:    {git_info['commit_date']}
Author:         {git_info['commit_author']}
Message:        {git_info['commit_message']}

RECENT COMMITS
--------------
{git_info['recent_commits']}

EXCLUDED FROM BACKUP
--------------------
{', '.join(sorted(EXCLUDE_DIRS))}

LIVE SITE
---------
https://www.mga-mk2.com

GITHUB REPOSITORY
-----------------
https://github.com/kendoris/new-mga-site

===============================================
"""

    with open(readme_path, 'w') as f:
        f.write(content)

    return readme_path


def create_backup(commit_message):
    """Create a timestamped folder snapshot on Google Drive, excluding large folders."""
    print("\n💾 CREATING BACKUP ON GOOGLE DRIVE")

    # Create backup folder if it doesn't exist
    BACKUP_FOLDER.mkdir(parents=True, exist_ok=True)

    # Create timestamped snapshot folder name
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    snapshot_name = f"mga-mk2-backup_{timestamp}"
    snapshot_path = BACKUP_FOLDER / snapshot_name

    print(f"📂 Creating snapshot: {snapshot_name}")
    print(f"   Excluding: {', '.join(EXCLUDE_DIRS)}")

    # Copy folder with exclusions
    shutil.copytree(PROJECT_DIR, snapshot_path, ignore=ignore_patterns)

    # Count files in snapshot
    file_count = sum(1 for _ in snapshot_path.rglob('*') if _.is_file())

    # Get total size
    total_size = sum(f.stat().st_size for f in snapshot_path.rglob('*') if f.is_file())
    size_mb = total_size / (1024 * 1024)

    # Get git info and create README
    git_info = get_git_info()
    readme_path = create_readme(snapshot_path, commit_message, git_info, file_count, size_mb)

    print(f"✅ Snapshot created: {snapshot_name}")
    print(f"   Files: {file_count}")
    print(f"   Size: {size_mb:.1f} MB")
    print(f"   README: {readme_path.name}")
    print(f"📁 Location: {BACKUP_FOLDER}")

    return True


def main():
    print("\n" + "="*60)
    print("🚗 MGA MK2 WEBSITE DEPLOY SCRIPT")
    print("="*60)

    # Get commit message from command line or use default
    if len(sys.argv) > 1:
        commit_message = " ".join(sys.argv[1:])
    else:
        commit_message = f"Update {datetime.now().strftime('%Y-%m-%d %H:%M')}"

    print(f"\n📝 Commit message: \"{commit_message}\"")

    # Deploy to GitHub
    github_success = deploy_to_github(commit_message)

    # Create backup
    backup_success = create_backup(commit_message)

    # Summary
    print("\n" + "="*60)
    print("📋 SUMMARY")
    print("="*60)
    print(f"   GitHub Deploy: {'✅ Success' if github_success else '❌ Failed'}")
    print(f"   Google Drive Backup: {'✅ Success' if backup_success else '❌ Failed'}")
    print(f"\n🌐 Live site: https://www.mga-mk2.com")
    print(f"📂 GitHub: https://github.com/kendoris/new-mga-site")
    print("="*60 + "\n")


if __name__ == "__main__":
    main()
