# MGA MK2 Website

A modern Next.js website for Ken and Melon's 1962 MGA 1600 MKII, migrated from the original static HTML site.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: Vercel (auto-deploys from GitHub)
- **Repository**: https://github.com/kendoris/new-mga-site

## Project Structure

```
src/app/
├── page.tsx                    # Home page
├── history/
│   ├── page.tsx               # History landing page
│   ├── christmas-1969/        # Christmas 1969 story
│   ├── roadside-repairs/      # 1970 roadside repair story
│   ├── first-steps/           # First drive in 30 years (2004)
│   ├── body-work/             # Body restoration photos
│   └── first-award/           # Southampton rally 2005
├── restoration/
│   └── page.tsx               # Restoration details
├── how-to/
│   └── page.tsx               # Technical how-to guides
├── adventures/
│   ├── page.tsx               # Adventures landing page
│   ├── keywest/               # Key West Regional 2006
│   ├── capebreton/            # Cape Breton 2010
│   ├── savannah/              # Savannah Regional 2013
│   ├── asheville/             # Asheville GT-38 2013
│   ├── ottawa/                # Ottawa GT-39 2014
│   ├── wedding/               # Karen's Wedding 2014
│   ├── anniversary/           # 50th Anniversary UK/Ireland 2019
│   └── colorado/              # Colorado GT-47 2022
└── gallery/
    └── page.tsx               # Photo gallery
```

## Assets

- **Images**: `/public/images/` - All photos from the original site
- **PDFs**: `/public/` - Magazine articles
  - `Savannah article.pdf`
  - `Wedding Article.pdf`
  - `FiveCars1.pdf` & `FiveCars2.pdf` (Anniversary trip article)
- **Videos**: `/public/images/`
  - Colorado: `Bridge.mp4`, `RoyalGorgeBridgeOverview.mp4`, `MelonBridge.mp4`
  - Anniversary: `HighRoad.mp4`, `CavernClub.mp4`, `Mersey.mp4`

## Components

- `ContentCard` - Styled card component for content sections
- `Navigation` - Site navigation header
- `Footer` - Site footer

## Deployment

The site auto-deploys to Vercel on every push to the `main` branch.

To deploy manually:
```bash
git add -A
git commit -m "Your message"
git push origin main
```

## Original Source

The original HTML files are in `/Users/kend/Documents/mga-mk2 website/` for reference.

## Development

```bash
npm run dev    # Start dev server at localhost:3000
npm run build  # Production build
```
