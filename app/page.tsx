import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';

export default function Home() {
  return (
    <div>
      {/* Hero - Gallery Entrance */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs tracking-[0.3em] uppercase text-muted opacity-0-init animate-fade-in">
                  Conceptual Artist
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] opacity-0-init animate-reveal delay-200">
                  Hank
                  <br />
                  Willis
                  <br />
                  Thomas
                </h1>
              </div>
              <div className="max-w-md opacity-0-init animate-slide-up delay-500">
                <p className="text-lg text-muted leading-relaxed">
                  {artistData.statement}
                </p>
              </div>
              <div className="flex items-center gap-8 opacity-0-init animate-fade-in delay-700">
                <Link
                  href="/works"
                  className="group inline-flex items-center gap-4 text-sm tracking-wide"
                >
                  <span className="w-12 h-px bg-black group-hover:w-20 transition-all" />
                  <span>Enter Gallery</span>
                </Link>
              </div>
            </div>

            {/* Featured artwork */}
            <div className="opacity-0-init animate-scale-in delay-400">
              <div className="aspect-[4/5] bg-neutral-100 gallery-frame relative overflow-hidden">
                <Image
                  src={artistData.selectedWorks[0].image}
                  alt={artistData.selectedWorks[0].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 artwork-label">
                <p className="text-xs text-muted tracking-wide">Featured Work</p>
                <p className="text-sm mt-1">{artistData.selectedWorks[0].title}, {artistData.selectedWorks[0].year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Divider */}
      <div className="room-divider my-8" />

      {/* Gallery Room 1: Selected Works */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Gallery 01 — Selected Works
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {artistData.selectedWorks.slice(0, 3).map((work, index) => (
              <ScrollReveal key={work.title} delay={index * 100}>
                <article className="gallery-card group">
                  <div className="aspect-[3/4] bg-neutral-100 gallery-frame mb-6 relative overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="artwork-label">
                    <p className="text-xs text-muted tracking-wide uppercase">
                      {work.category}
                    </p>
                    <h3 className="text-lg font-light mt-1 group-hover:translate-x-2 transition-transform">
                      {work.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">{work.year}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 flex justify-center">
              <Link
                href="/works"
                className="group inline-flex items-center gap-4 text-sm tracking-wide px-8 py-4 border border-border hover:border-black transition-colors"
              >
                <span>View All Works</span>
                <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote - Gallery Placard */}
      <section className="py-32 px-6 md:px-12 bg-neutral-50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="quote-mark">&ldquo;</span>
            <blockquote className="text-2xl md:text-4xl font-light leading-relaxed -mt-12 tracking-tight">
              {artistData.heroQuote}
            </blockquote>
            <div className="mt-12 flex justify-center">
              <div className="w-16 h-px bg-black animate-line-grow" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Gallery Room 2: Public Art */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Gallery 02 — Public Art
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="aspect-square bg-neutral-100 gallery-frame relative overflow-hidden">
                <Image
                  src={artistData.publicArt[0].image}
                  alt={artistData.publicArt[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <div className="flex flex-col justify-center">
              <ScrollReveal delay={150}>
                <div className="space-y-8">
                  {artistData.publicArt.slice(0, 4).map((artwork, index) => (
                    <article
                      key={artwork.title}
                      className="group py-6 border-b border-border hover:border-black transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-light group-hover:translate-x-2 transition-transform">
                            {artwork.title}
                          </h3>
                          <p className="text-sm text-muted mt-1">
                            {artwork.location}, {artwork.year}
                          </p>
                        </div>
                        <span className="text-xs text-muted">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </article>
                  ))}
                  <Link
                    href="/public-art"
                    className="inline-flex items-center gap-2 text-sm tracking-wide link-underline"
                  >
                    Explore Public Art
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Room Divider */}
      <div className="room-divider my-8" />

      {/* Gallery Room 3: Current Exhibition */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Gallery 03 — Now Showing
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-[4/3] bg-neutral-100 gallery-frame relative overflow-hidden">
                <Image
                  src={artistData.exhibitions.current[0].image!}
                  alt={artistData.exhibitions.current[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <p className="text-xs tracking-widest uppercase text-muted mb-4">
                  Current Exhibition
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                  {artistData.exhibitions.current[0].title}
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  {artistData.exhibitions.current[0].description}
                </p>
                <div className="space-y-2 text-sm mb-8">
                  <p><span className="text-muted">Venue:</span> {artistData.exhibitions.current[0].venue}</p>
                  <p><span className="text-muted">Location:</span> {artistData.exhibitions.current[0].location}</p>
                  <p><span className="text-muted">Dates:</span> {artistData.exhibitions.current[0].dates}</p>
                </div>
                <Link
                  href="/exhibitions"
                  className="inline-flex items-center gap-2 text-sm tracking-wide link-underline w-fit"
                >
                  All Exhibitions
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Collaborative Projects */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Gallery 04 — Collaborative Projects
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {artistData.collaborations.slice(0, 4).map((collab, index) => (
              <ScrollReveal key={collab.title} delay={index * 100}>
                <article className="group bg-neutral-50 p-8 md:p-12 hover:bg-white transition-colors">
                  <p className="text-xs text-muted tracking-wider uppercase mb-4">
                    {collab.type}
                  </p>
                  <h3 className="text-2xl font-light mb-4 group-hover:translate-x-2 transition-transform">
                    {collab.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {collab.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/collaborations"
                className="inline-flex items-center gap-2 text-sm tracking-wide link-underline"
              >
                View All Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Themes - Interactive Tags */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-12 text-center">
              Themes & Practice
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {artistData.themes.map((theme, index) => (
              <ScrollReveal key={theme} delay={index * 50}>
                <span className="px-6 py-3 border border-border text-sm tracking-wide hover:border-black hover:bg-black hover:text-white transition-all cursor-default">
                  {theme}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Honors Marquee */}
      <section className="py-12 border-t border-border overflow-hidden">
        <div className="flex gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
          {[...artistData.honors, ...artistData.honors].map((honor, index) => (
            <span
              key={`${honor.title}-${index}`}
              className="text-sm text-muted tracking-wide"
            >
              {honor.title} ({honor.year})
              <span className="mx-8 text-border">•</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
