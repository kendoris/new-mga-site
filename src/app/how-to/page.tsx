'use client';

import { motion } from 'framer-motion';
import ContentCard from '@/components/ContentCard';
import { Terminal, Github, Cloud, HardDrive, CheckCircle, AlertCircle } from 'lucide-react';

export default function HowToPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-2 text-center">
          How to Deploy
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          A simple guide to updating the website
        </p>

        {/* Step 1: Open Terminal */}
        <ContentCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--nav-bg)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-2 flex items-center gap-2">
                <Terminal size={24} /> Open Terminal
              </h2>
              <p className="text-lg mb-3">
                Open the Terminal app on your Mac (search for &quot;Terminal&quot; in Spotlight)
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Step 2: Go to folder */}
        <ContentCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--nav-bg)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-2">
                Go to the Project Folder
              </h2>
              <p className="text-lg mb-3">Copy and paste this command:</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-lg overflow-x-auto">
                cd /Users/kend/claudecodeprojects/MGAsite/mga-mk2-new
              </div>
              <p className="text-sm mt-2 opacity-70">Press Enter after pasting</p>
            </div>
          </div>
        </ContentCard>

        {/* Step 3: Run deploy */}
        <ContentCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--nav-bg)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-2">
                Run the Deploy Script
              </h2>
              <p className="text-lg mb-3">Type this command with your message:</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-lg overflow-x-auto mb-4">
                python3 deploy.py &quot;Your message here&quot;
              </div>
              <p className="text-lg mb-2"><strong>Examples:</strong></p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono overflow-x-auto space-y-2">
                <div>python3 deploy.py &quot;Added new photos&quot;</div>
                <div>python3 deploy.py &quot;Fixed typo&quot;</div>
                <div>python3 deploy.py  <span className="text-gray-500"># uses default message</span></div>
              </div>
            </div>
          </div>
        </ContentCard>

        {/* What Happens */}
        <h2 className="text-3xl font-bold text-[var(--nav-bg)] mb-4 mt-12 text-center">
          What Happens When You Deploy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <ContentCard>
            <div className="text-center">
              <Github size={48} className="mx-auto mb-3 text-[var(--nav-bg)]" />
              <h3 className="text-xl font-bold mb-2">1. GitHub</h3>
              <p>Changes are saved to GitHub</p>
              <a
                href="https://github.com/kendoris/new-mga-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View Repository
              </a>
            </div>
          </ContentCard>

          <ContentCard>
            <div className="text-center">
              <Cloud size={48} className="mx-auto mb-3 text-[var(--nav-bg)]" />
              <h3 className="text-xl font-bold mb-2">2. Railway</h3>
              <p>Website updates automatically (~1 min)</p>
              <a
                href="https://new-mga-site.up.railway.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View Live Site
              </a>
            </div>
          </ContentCard>

          <ContentCard>
            <div className="text-center">
              <HardDrive size={48} className="mx-auto mb-3 text-[var(--nav-bg)]" />
              <h3 className="text-xl font-bold mb-2">3. Backup</h3>
              <p>Snapshot saved to Google Drive</p>
              <span className="text-sm opacity-70">
                My Drive / MGA-Website-Backups
              </span>
            </div>
          </ContentCard>
        </div>

        {/* Troubleshooting */}
        <h2 className="text-3xl font-bold text-[var(--nav-bg)] mb-4 mt-12 text-center">
          Troubleshooting
        </h2>

        <ContentCard className="mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold">&quot;No changes to commit&quot;</p>
                <p className="opacity-70">This is OK! It means there&apos;s nothing new to deploy.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="text-orange-600 shrink-0 mt-1" size={24} />
              <div>
                <p className="font-bold">Railway doesn&apos;t update?</p>
                <p className="opacity-70">Run this command manually:</p>
                <div className="bg-gray-900 text-green-400 p-2 rounded font-mono mt-1">
                  railway up
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        {/* Quick Reference */}
        <ContentCard className="bg-[var(--nav-bg)] text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Quick Reference</h2>
          <div className="font-mono space-y-2 text-center">
            <p><span className="opacity-70">Deploy with message:</span> python3 deploy.py &quot;message&quot;</p>
            <p><span className="opacity-70">Deploy with default:</span> python3 deploy.py</p>
            <p><span className="opacity-70">Manual Railway deploy:</span> railway up</p>
          </div>
        </ContentCard>

      </motion.div>
    </div>
  );
}
