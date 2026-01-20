# Hank Willis Thomas Portfolio

Portfolio website for conceptual artist Hank Willis Thomas, built with Next.js 16 and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript
- **Package Manager**: pnpm

## Project Structure

```
app/
├── page.tsx              # Homepage with hero, themes, works preview
├── works/page.tsx        # Works gallery with category filters
├── public-art/page.tsx   # Permanent public installations
├── exhibitions/page.tsx  # Current and past exhibitions
├── collaborations/page.tsx # Collaborative projects (For Freedoms, etc.)
├── about/page.tsx        # Biography, education, honors
├── layout.tsx            # Root layout with nav, footer, cursor
└── globals.css           # Custom animations, effects, theme variables

components/
├── Navigation.tsx        # Fixed header with mobile menu
├── CustomCursor.tsx      # Golden dot + ring cursor (desktop only)
└── ScrollReveal.tsx      # Intersection Observer scroll animations

lib/
└── data.ts               # All artist content (bio, works, exhibitions, etc.)
```

## Commands

```bash
pnpm dev      # Start dev server (localhost:3000)
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Design System

### Colors (CSS Variables)
- `--background`: #0a0a0a (near black)
- `--foreground`: #fafafa (off white)
- `--accent`: #d4af37 (gold)
- `--muted`: #737373 (gray)

### Custom CSS Classes
- `.gradient-text` - Gold gradient text effect
- `.link-underline` - Animated underline on hover
- `.grid-lines` - Subtle grid background pattern
- `.noise-overlay` - Film grain texture
- `.animate-reveal`, `.animate-fade-in`, `.animate-slide-up` - Entry animations
- `.section-fade` + `.visible` - Scroll-triggered fade in

## Content Updates

All artist content is centralized in `lib/data.ts`. To update:

- **Biography**: Edit `artistData.bio.full` array
- **Works**: Add/edit items in `artistData.selectedWorks`
- **Public Art**: Modify `artistData.publicArt` array
- **Exhibitions**: Update `artistData.exhibitions.current` and `.past`
- **Collaborations**: Edit `artistData.collaborations`
- **Honors**: Add to `artistData.honors` array

## Adding Images

Place images in `/public/works/` and reference them in the data file. The current implementation uses placeholder containers - replace the placeholder divs with `<Image>` components when images are available.

## Notes

- Custom cursor only shows on devices with hover capability (lg: breakpoint)
- Mobile navigation uses a full-screen overlay with staggered link animations
- All pages use scroll-triggered reveal animations via the `ScrollReveal` component
- The honors marquee on the homepage uses an infinite CSS animation
