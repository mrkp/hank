import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public Art | Hank Willis Thomas',
  description:
    'Explore the permanent public art installations of Hank Willis Thomas across the United States and beyond.',
};

export default function PublicArtPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
            <div className="exhibit-marker" />
            <p className="text-xs tracking-[0.3em] uppercase">
              Gallery — Public Art
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 opacity-0-init animate-reveal delay-200">
            Art in the
            <br />
            Public Sphere
          </h1>
          <p className="text-lg text-muted max-w-xl opacity-0-init animate-slide-up delay-400">
            Permanent installations that transform public spaces into sites of
            reflection and community engagement.
          </p>
        </div>

        {/* Featured Installation */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="aspect-[4/3] bg-neutral-100 gallery-frame relative overflow-hidden">
                <Image
                  src={artistData.publicArt[0].image}
                  alt={artistData.publicArt[0].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="lg:pt-12">
                <div className="artwork-label">
                  <p className="text-xs text-muted tracking-wide uppercase mb-4">
                    {artistData.publicArt[0].year} &middot;{' '}
                    {artistData.publicArt[0].location}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-light mb-6">
                    {artistData.publicArt[0].title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-8">
                    {artistData.publicArt[0].description}
                  </p>
                  <div className="w-16 h-px bg-black" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Room Divider */}
        <div className="room-divider my-16" />

        {/* All Public Art */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Permanent Installations
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {artistData.publicArt.slice(1).map((artwork, index) => (
              <ScrollReveal key={artwork.title} delay={index * 100}>
                <article className="group grid md:grid-cols-3 gap-8 py-12 border-b border-border hover:border-black transition-colors">
                  <div className="aspect-[4/3] bg-neutral-100 gallery-frame relative overflow-hidden">
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="artwork-label border-l-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-muted">{artwork.year}</span>
                        <span className="w-4 h-px bg-border" />
                        <span className="text-xs text-muted">
                          {artwork.location}
                        </span>
                      </div>
                      <h2 className="text-2xl font-light mb-3 group-hover:translate-x-2 transition-transform">
                        {artwork.title}
                      </h2>
                      <p className="text-muted leading-relaxed max-w-xl">
                        {artwork.description}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Locations */}
        <section className="mt-32 pt-16 border-t border-border">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-8">
                Locations
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Boston, MA', 'Brooklyn, NY', 'San Francisco, CA', 'Opa Locka, FL'].map(
                  (location) => (
                    <span
                      key={location}
                      className="px-6 py-3 border border-border text-sm tracking-wide"
                    >
                      {location}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Commission Info */}
        <section className="mt-24">
          <ScrollReveal>
            <div className="p-8 md:p-12 border border-border">
              <p className="text-xs text-muted tracking-widest uppercase mb-4">
                Public Service
              </p>
              <h2 className="text-2xl font-light mb-4">
                Member, Public Design Commission
              </h2>
              <p className="text-muted max-w-2xl">
                City of New York. Contributing to the review and approval of
                public art, architecture, and urban design that shapes the
                city&apos;s shared spaces.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
