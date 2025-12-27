'use client';

import { motion } from 'framer-motion';
import ContentCard from '@/components/ContentCard';
import { Terminal, Play, Eye, Rocket, MessageSquare, CheckCircle, Github, Cloud, HardDrive, AlertTriangle } from 'lucide-react';

export default function HowToPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--nav-bg)] mb-2 text-center">
          Website Update Session
        </h1>
        <p className="text-xl text-center text-[var(--foreground)] opacity-80 mb-8">
          A step-by-step guide from start to finish
        </p>

        {/* Step 1: Open Terminal & Start Claude */}
        <ContentCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--nav-bg)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-2 flex items-center gap-2">
                <Terminal size={24} /> Start Claude Code
              </h2>
              <p className="text-lg mb-3">
                Open Terminal and start a Claude Code session:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono space-y-2">
                <div><span className="text-gray-500"># Go to the project folder</span></div>
                <div>cd /Users/kend/claudecodeprojects/MGAsite/</div>
                <div>&nbsp;</div>
                <div><span className="text-gray-500"># Start Claude Code</span></div>
                <div>claude</div>
              </div>
              <p className="text-sm mt-3 opacity-70">
                Claude will start and you can chat with it to make changes to the website.
                This folder contains both the new site and the old site for reference.
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Step 2: Tell Claude What You Want */}
        <ContentCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--nav-bg)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-2 flex items-center gap-2">
                <MessageSquare size={24} /> Tell Claude What to Change
              </h2>
              <p className="text-lg mb-3">
                Just describe what you want in plain English:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg space-y-3">
                <p className="italic">&quot;Add a new photo to the gallery page&quot;</p>
                <p className="italic">&quot;Change the text on the history page&quot;</p>
                <p className="italic">&quot;Add a new adventure for our trip to Maine&quot;</p>
                <p className="italic">&quot;Fix the typo on the home page&quot;</p>
              </div>
              <p className="text-sm mt-3 opacity-70">
                Claude will make the changes to the code for you.
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Step 3: Test Locally */}
        <ContentCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--nav-bg)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-2 flex items-center gap-2">
                <Eye size={24} /> Preview Your Changes
              </h2>
              <p className="text-lg mb-3">
                Ask Claude to start the local server so you can preview:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="italic">&quot;Start the dev server so I can preview the changes&quot;</p>
              </div>
              <p className="text-lg mt-3 mb-2">
                Or run this command yourself:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono">
                npm run dev
              </div>
              <p className="text-lg mt-3">
                Then open your browser to:
              </p>
              <div className="bg-gray-100 p-3 rounded-lg font-mono text-center text-lg mt-2">
                <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  http://localhost:3000
                </a>
              </div>
              <p className="text-sm mt-3 opacity-70">
                This shows the site on your computer only. Check that everything looks right!
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Step 4: Deploy */}
        <ContentCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--nav-bg)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
              4
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-2 flex items-center gap-2">
                <Rocket size={24} /> Deploy to Railway
              </h2>
              <p className="text-lg mb-3">
                When you&apos;re happy with the changes, ask Claude to deploy:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="italic">&quot;Deploy to railway&quot;</p>
              </div>
              <p className="text-lg mt-3 mb-2">
                Or run the deploy script yourself:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono">
                python3 deploy.py &quot;Describe your changes here&quot;
              </div>
              <p className="text-sm mt-3 opacity-70">
                This pushes to GitHub, triggers Railway to rebuild, and creates a backup on Google Drive.
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Step 5: Verify */}
        <ContentCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--nav-bg)] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
              5
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--nav-bg)] mb-2 flex items-center gap-2">
                <CheckCircle size={24} /> Check the Live Site
              </h2>
              <p className="text-lg mb-3">
                Wait about 1 minute, then check the live website:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-lg">
                <a href="https://new-mga-site.up.railway.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  https://new-mga-site.up.railway.app
                </a>
              </div>
              <p className="text-sm mt-3 opacity-70">
                Your changes are now live for everyone to see!
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Session Summary */}
        <ContentCard className="bg-[var(--nav-bg)] text-white mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Quick Session Summary</h2>
          <div className="space-y-3 text-lg">
            <div className="flex items-center gap-3">
              <span className="bg-white text-[var(--nav-bg)] rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
              <span>cd MGAsite → claude</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-white text-[var(--nav-bg)] rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
              <span>Tell Claude what to change</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-white text-[var(--nav-bg)] rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
              <span>Preview at localhost:3000</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-white text-[var(--nav-bg)] rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
              <span>&quot;Deploy to railway&quot;</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-white text-[var(--nav-bg)] rounded-full w-8 h-8 flex items-center justify-center font-bold">5</span>
              <span>Check live site!</span>
            </div>
          </div>
        </ContentCard>

        {/* How Deploy Works */}
        <h2 className="text-3xl font-bold text-[var(--nav-bg)] mb-4 text-center">
          How the Deploy Works
        </h2>
        <p className="text-center text-lg mb-6 opacity-80">
          When you deploy, three things happen automatically:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ContentCard>
            <div className="text-center">
              <Github size={48} className="mx-auto mb-3 text-[var(--nav-bg)]" />
              <h3 className="text-xl font-bold mb-2">1. GitHub</h3>
              <p className="text-sm">
                Your changes are pushed to GitHub, which stores all versions of the code.
              </p>
            </div>
          </ContentCard>

          <ContentCard>
            <div className="text-center">
              <Cloud size={48} className="mx-auto mb-3 text-[var(--nav-bg)]" />
              <h3 className="text-xl font-bold mb-2">2. Railway</h3>
              <p className="text-sm">
                Railway detects the GitHub update and automatically rebuilds the live website.
              </p>
            </div>
          </ContentCard>

          <ContentCard>
            <div className="text-center">
              <HardDrive size={48} className="mx-auto mb-3 text-[var(--nav-bg)]" />
              <h3 className="text-xl font-bold mb-2">3. Google Drive</h3>
              <p className="text-sm">
                A snapshot of the entire project is saved to Google Drive as a backup.
              </p>
            </div>
          </ContentCard>
        </div>

        {/* Important Reminder */}
        <ContentCard className="bg-yellow-50 border-2 border-yellow-400">
          <div className="flex items-start gap-4">
            <AlertTriangle size={32} className="text-yellow-600 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Important Reminder</h3>
              <p className="text-lg text-yellow-900">
                Make sure <strong>Google Drive Desktop</strong> is running when you work on the site.
                This ensures your backups sync to the cloud automatically.
              </p>
              <p className="text-sm mt-2 opacity-70">
                Look for the Google Drive icon in your menu bar at the top of the screen.
              </p>
            </div>
          </div>
        </ContentCard>

      </motion.div>
    </div>
  );
}
