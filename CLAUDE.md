# Hank Willis Thomas Portfolio

Interactive art gallery website for conceptual artist Hank Willis Thomas, built with Next.js 16 and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript
- **Package Manager**: pnpm

## Project Structure

```
app/
├── page.tsx              # Homepage - gallery entrance with rooms
├── works/page.tsx        # Works gallery with category filters
├── public-art/page.tsx   # Permanent public installations
├── exhibitions/page.tsx  # Current and past exhibitions
├── collaborations/page.tsx # Collaborative projects (For Freedoms, etc.)
├── about/page.tsx        # Biography, education, honors
├── layout.tsx            # Root layout with nav, footer, cursor
└── globals.css           # Gallery animations, effects, theme variables

components/
├── Navigation.tsx        # Fixed header with mobile menu
├── CustomCursor.tsx      # Black dot + ring cursor with gallery hover states
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

### Gallery Aesthetic
The site is designed as an interactive art gallery with:
- Clean white backgrounds mimicking gallery walls
- Museum-style artwork labels with left border accents
- Room dividers between sections
- Exhibit markers (black dots) for section headers
- Hover interactions that reveal and animate content

### Colors (CSS Variables)
- `--background`: #ffffff (gallery white)
- `--foreground`: #0a0a0a (near black)
- `--accent`: #000000 (black)
- `--muted`: #6b6b6b (gray)
- `--border`: #e5e5e5 (light gray borders)

### Custom CSS Classes
- `.gallery-frame` - Artwork container with hover border effect
- `.gallery-card` - Card with lift animation on hover
- `.artwork-label` - Museum-style label with left border
- `.exhibit-marker` - Black dot section indicator
- `.room-divider` - Gradient line between gallery rooms
- `.link-underline` - Animated underline on hover
- `.animate-reveal`, `.animate-fade-in`, `.animate-slide-up` - Entry animations
- `.animate-breathe` - Subtle pulsing animation for "now showing" indicators
- `.section-fade` + `.visible` - Scroll-triggered fade in

### Interactive Elements
- Custom cursor expands on gallery items (`data-cursor-gallery` attribute)
- Hover states shift content horizontally (`group-hover:translate-x-2`)
- Border transitions from light to black on hover
- Theme tags invert colors on hover (black bg, white text)

## Content Updates

All artist content is centralized in `lib/data.ts`. To update:

- **Biography**: Edit `artistData.bio.full` array
- **Works**: Add/edit items in `artistData.selectedWorks`
- **Public Art**: Modify `artistData.publicArt` array
- **Exhibitions**: Update `artistData.exhibitions.current` and `.past`
- **Collaborations**: Edit `artistData.collaborations`
- **Honors**: Add to `artistData.honors` array

## Adding Images

Place images in `/public/works/` and reference them in the data file. The current implementation uses placeholder containers with numbers - replace the placeholder divs with `<Image>` components when images are available.

Example replacement:
```tsx
// From placeholder:
<div className="aspect-[3/4] bg-neutral-100 gallery-frame">
  <span className="text-6xl font-extralight text-neutral-200">01</span>
</div>

// To image:
<div className="aspect-[3/4] gallery-frame overflow-hidden">
  <Image src="/works/artwork-1.jpg" alt="Artwork title" fill className="object-cover" />
</div>
```

## Notes

- Custom cursor only shows on devices with hover capability (lg: breakpoint)
- Add `data-cursor-gallery` to elements for expanded cursor effect
- Mobile navigation uses a full-screen white overlay with staggered link animations
- All pages use scroll-triggered reveal animations via the `ScrollReveal` component
- The honors marquee on the homepage uses an infinite CSS scroll animation
- Gallery rooms are numbered (Gallery 01, Gallery 02, etc.) for wayfinding
