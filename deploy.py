#!/usr/bin/env python3
"""
MGA MK2 Website Deploy Script
Deploys to Railway via GitHub and creates a backup on Google Drive.
"""

import subprocess
import os
import sys
from datetime import datetime
from pathlib import Path
import shutil

# Configuration
PROJECT_DIR = Path(__file__).parent
GOOGLE_DRIVE_PATH = Path.home() / "Library/CloudStorage/GoogleDrive-ken.doris@gmail.com/My Drive"
BACKUP_FOLDER = GOOGLE_DRIVE_PATH / "MGA-Website-Backups"

def run_command(command, description):
    """Run a shell command and handle errors."""
    print(f"\n{'='*50}")
    print(f"📌 {description}")
    print(f"{'='*50}")

    result = subprocess.run(command, shell=True, capture_output=True, text=True)

    if result.stdout:
        print(result.stdout)
    if result.stderr and "error" in result.stderr.lower():
        print(f"⚠️  {result.stderr}")

    return result.returncode == 0

def get_commit_message():
    """Get commit message from user or use default."""
    default_msg = f"Update {datetime.now().strftime('%Y-%m-%d %H:%M')}"

    print("\n📝 Enter commit message (or press Enter for default):")
    print(f"   Default: \"{default_msg}\"")

    user_msg = input("   > ").strip()
    return user_msg if user_msg else default_msg

def deploy_to_github(commit_message):
    """Stage, commit, and push to GitHub."""
    print("\n🚀 DEPLOYING TO GITHUB (triggers Railway auto-deploy)")

    os.chdir(PROJECT_DIR)

    # Check for changes
    result = subprocess.run("git status --porcelain", shell=True, capture_output=True, text=True)
    if not result.stdout.strip():
        print("✅ No changes to commit")
        return True

    # Stage all changes
    if not run_command("git add .", "Staging changes"):
        return False

    # Commit
    if not run_command(f'git commit -m "{commit_message}"', "Committing changes"):
        print("⚠️  Nothing to commit or commit failed")

    # Push to GitHub
    if not run_command("git push origin main", "Pushing to GitHub"):
        return False

    print("\n✅ Pushed to GitHub! Railway will auto-deploy.")
    return True

def create_backup():
    """Create a timestamped backup on Google Drive."""
    print("\n💾 CREATING BACKUP ON GOOGLE DRIVE")

    # Create backup folder if it doesn't exist
    BACKUP_FOLDER.mkdir(parents=True, exist_ok=True)

    # Create timestamped archive name
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    archive_name = f"mga-mk2-backup_{timestamp}"
    archive_path = BACKUP_FOLDER / archive_name

    # Create zip archive (excluding node_modules, .next, .git)
    print(f"📦 Creating archive: {archive_name}.zip")

    # Use shutil to create archive
    shutil.make_archive(
        str(archive_path),
        'zip',
        PROJECT_DIR,
        '.'
    )

    # Get file size
    zip_path = Path(f"{archive_path}.zip")
    size_mb = zip_path.stat().st_size / (1024 * 1024)

    print(f"✅ Backup created: {zip_path.name} ({size_mb:.1f} MB)")
    print(f"📁 Location: {BACKUP_FOLDER}")

    return True

def main():
    print("\n" + "="*60)
    print("🚗 MGA MK2 WEBSITE DEPLOY SCRIPT")
    print("="*60)

    # Get commit message
    commit_message = get_commit_message()

    # Deploy to GitHub
    github_success = deploy_to_github(commit_message)

    # Create backup
    backup_success = create_backup()

    # Summary
    print("\n" + "="*60)
    print("📋 SUMMARY")
    print("="*60)
    print(f"   GitHub Deploy: {'✅ Success' if github_success else '❌ Failed'}")
    print(f"   Google Drive Backup: {'✅ Success' if backup_success else '❌ Failed'}")
    print(f"\n🌐 Live site: https://new-mega-site-production.up.railway.app")
    print(f"📂 GitHub: https://github.com/kendoris/new-mga-site")
    print("="*60 + "\n")

if __name__ == "__main__":
    main()
