# MGA MK2 Website

A modern Next.js website for Ken and Melon's 1962 MGA 1600 MKII, migrated from the original static HTML site.

## Live Site

- **Production**: https://www.mga-mk2.com (Vercel)
- **Backup**: Railway deployment available

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Lightbox**: yet-another-react-lightbox
- **Analytics**: Vercel Analytics
- **Hosting**: Vercel (auto-deploys from GitHub)
- **Repository**: https://github.com/kendoris/new-mga-site

## Project Structure

```
src/app/
├── page.tsx                    # Home page (with clickable timeline)
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
    └── page.tsx               # Photo gallery + Videos section
```

## Key Components

### ClickableImage (`src/components/ClickableImage.tsx`)
- Makes images clickable to open in lightbox
- Includes `PageLightboxManager` export for cycling through all page images
- Uses module-level globals to avoid React hydration issues
- **Usage**: Each page with clickable images needs:
  ```tsx
  import ClickableImage, { PageLightboxManager } from '@/components/ClickableImage';

  // In return statement:
  return (
    <>
      <PageLightboxManager />
      <div>...content with <ClickableImage /> components...</div>
    </>
  );
  ```

### Other Components
- `ContentCard` - Styled card component for content sections
- `Navigation` - Site navigation header with mobile menu
- `Footer` - Site footer
- `Timeline` - Clickable timeline on home page (links to history/adventures)

## Assets

- **Images**: `/public/images/` - All photos from the original site
- **PDFs**: `/public/` - Magazine articles
  - `Savannah article.pdf`
  - `Wedding Article.pdf`
  - `FiveCars1.pdf` & `FiveCars2.pdf` (Anniversary trip article)
- **Videos**: `/public/images/`
  - Colorado: `Bridge.mp4`, `RoyalGorgeBridgeOverview.mp4`, `MelonBridge.mp4`
  - Anniversary: `HighRoad.mp4`, `CavernClub.mp4`, `Mersey.mp4`

## Deployment

The site auto-deploys to Vercel on every push to the `main` branch.

```bash
git add -A
git commit -m "Your message"
git push origin main
```

### Vercel Analytics
Analytics is enabled via `@vercel/analytics` in `layout.tsx`. View stats in the Vercel dashboard → Analytics tab.

### Railway (Backup)
```bash
railway up
```

## Original Source

The original HTML files are in `/Users/kend/Documents/mga-mk2 website/` for reference when adding content.

## Development

```bash
npm run dev    # Start dev server at localhost:3000
npm run build  # Production build
```

## Recent Changes (Dec 2024)

- Added clickable images with cycling lightbox arrows on all adventure/history/restoration pages
- Added Vercel Analytics for visitor tracking
- Made home page timeline items clickable
- Added videos section to Gallery page
- Added PDF article links to Savannah, Wedding, and Anniversary pages
- Created 5 history sub-pages (Christmas 1969, Roadside Repairs, Body Work, First Steps, First Award)
