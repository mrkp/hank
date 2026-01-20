import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';

export default function Home() {
  return (
    <div className="grid-lines">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-8">
            <p className="text-accent text-sm tracking-[0.3em] uppercase opacity-0-init animate-fade-in">
              Conceptual Artist
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none opacity-0-init animate-reveal delay-200">
              Hank Willis
              <br />
              <span className="gradient-text">Thomas</span>
            </h1>
            <div className="max-w-xl opacity-0-init animate-slide-up delay-500">
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                {artistData.statement}
              </p>
            </div>
            <div className="flex gap-6 opacity-0-init animate-fade-in delay-700">
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 text-sm tracking-wide"
              >
                <span className="link-underline">Explore Works</span>
                <span className="transform group-hover:translate-x-2 transition-transform">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/about"
                className="text-sm tracking-wide text-muted hover:text-foreground transition-colors link-underline"
              >
                About the Artist
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0-init animate-fade-in delay-1000">
            <span className="text-xs tracking-widest text-muted uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-pulse-slow" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center relative">
            <span className="quote-mark absolute -top-16 left-0 md:left-12 text-accent">
              &ldquo;
            </span>
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed tracking-tight">
              {artistData.heroQuote}
            </blockquote>
            <div className="mt-8 w-16 h-px bg-accent mx-auto animate-line-grow" />
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Themes */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-12">
              Themes & Practice
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {artistData.themes.map((theme, index) => (
              <ScrollReveal key={theme} delay={index * 100}>
                <div className="group p-6 border border-white/10 hover:border-accent/50 transition-colors duration-500">
                  <span className="text-xs text-muted mb-2 block">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-light group-hover:text-accent transition-colors">
                    {theme}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works Preview */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-12">
              <div>
                <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
                  Selected Works
                </p>
                <h2 className="text-3xl md:text-4xl font-light">
                  Recent Projects
                </h2>
              </div>
              <Link
                href="/works"
                className="hidden md:inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors link-underline"
              >
                View All Works &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistData.selectedWorks.slice(0, 3).map((work, index) => (
              <ScrollReveal key={work.title} delay={index * 150}>
                <article className="group">
                  <div className="aspect-[4/5] bg-white/5 mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-muted">
                      <span className="text-6xl font-light opacity-20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-accent tracking-wide uppercase">
                      {work.category} &middot; {work.year}
                    </p>
                    <h3 className="text-xl font-light group-hover:text-accent transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">
                      {work.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <Link
            href="/works"
            className="md:hidden mt-8 inline-flex items-center gap-2 text-sm link-underline"
          >
            View All Works &rarr;
          </Link>
        </div>
      </section>

      {/* Public Art Highlight */}
      <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Public Art
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-12">
              Art in the Public Sphere
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {artistData.publicArt.map((artwork, index) => (
              <ScrollReveal key={artwork.title} delay={index * 150}>
                <article className="group border-l border-white/10 pl-6 hover:border-accent transition-colors duration-500">
                  <p className="text-accent text-sm mb-2">{artwork.year}</p>
                  <h3 className="text-xl md:text-2xl font-light mb-2 group-hover:text-accent transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted mb-4">{artwork.location}</p>
                  <p className="text-sm text-muted/80 leading-relaxed">
                    {artwork.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={450}>
            <Link
              href="/public-art"
              className="mt-12 inline-flex items-center gap-2 text-sm link-underline"
            >
              Explore Public Art &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Collaborations Preview */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Collaborative Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-12">
              Beyond the Studio
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {artistData.collaborations.slice(0, 2).map((collab, index) => (
              <ScrollReveal key={collab.title} delay={index * 150}>
                <article className="group p-8 border border-white/10 hover:border-accent/30 transition-colors duration-500">
                  <p className="text-xs text-accent tracking-wider uppercase mb-4">
                    {collab.type}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-accent transition-colors">
                    {collab.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {collab.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <Link
              href="/collaborations"
              className="mt-12 inline-flex items-center gap-2 text-sm link-underline"
            >
              All Collaborations &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Current Exhibition Banner */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="relative p-8 md:p-16 border border-accent/30 bg-accent/5">
              <span className="absolute top-4 right-4 text-xs text-accent tracking-widest uppercase animate-pulse-slow">
                Now Showing
              </span>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
                Current Exhibition
              </p>
              <h2 className="text-3xl md:text-5xl font-light mb-4">
                {artistData.exhibitions.current[0].title}
              </h2>
              <p className="text-lg text-muted mb-2">
                {artistData.exhibitions.current[0].venue}
              </p>
              <p className="text-sm text-muted mb-6">
                {artistData.exhibitions.current[0].location} &middot;{' '}
                {artistData.exhibitions.current[0].dates}
              </p>
              <p className="text-muted/80 max-w-2xl leading-relaxed mb-8">
                {artistData.exhibitions.current[0].description}
              </p>
              <Link
                href="/exhibitions"
                className="inline-flex items-center gap-2 text-sm link-underline"
              >
                View All Exhibitions &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Honors Strip */}
      <section className="py-16 px-6 md:px-12 overflow-hidden">
        <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {[...artistData.honors, ...artistData.honors].map((honor, index) => (
            <span
              key={`${honor.title}-${index}`}
              className="text-muted/50 text-sm tracking-wide"
            >
              {honor.title} ({honor.year})
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
