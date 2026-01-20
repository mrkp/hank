import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exhibitions | Hank Willis Thomas',
  description:
    'Current and past exhibitions featuring the work of Hank Willis Thomas at galleries and museums worldwide.',
};

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
            <div className="exhibit-marker" />
            <p className="text-xs tracking-[0.3em] uppercase">
              Gallery — Exhibitions
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 opacity-0-init animate-reveal delay-200">
            On View
          </h1>
          <p className="text-lg text-muted max-w-xl opacity-0-init animate-slide-up delay-400">
            Current and recent exhibitions at galleries and museums worldwide.
          </p>
        </div>

        {/* Current Exhibitions */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-2 bg-black rounded-full animate-breathe" />
              <p className="text-xs tracking-[0.3em] uppercase">Now Showing</p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {artistData.exhibitions.current.map((exhibition, index) => (
              <ScrollReveal key={exhibition.title} delay={index * 150}>
                <article className="group p-8 md:p-12 border border-border hover:border-black transition-colors">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h2 className="text-3xl md:text-4xl font-light mb-4 group-hover:translate-x-2 transition-transform">
                        {exhibition.title}
                      </h2>
                      <p className="text-lg text-muted mb-4">{exhibition.venue}</p>
                      <p className="text-muted leading-relaxed max-w-xl">
                        {exhibition.description}
                      </p>
                    </div>
                    <div className="space-y-4 text-sm md:text-right">
                      <div>
                        <p className="text-xs text-muted tracking-wide uppercase mb-1">
                          Dates
                        </p>
                        <p>{exhibition.dates}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted tracking-wide uppercase mb-1">
                          Location
                        </p>
                        <p>{exhibition.location}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Room Divider */}
        <div className="room-divider my-16" />

        {/* Past Exhibitions */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Recent Exhibitions
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {artistData.exhibitions.past.map((exhibition, index) => (
              <ScrollReveal key={exhibition.title} delay={index * 100}>
                <article className="group grid md:grid-cols-3 gap-6 py-8 border-b border-border hover:border-black transition-colors">
                  <h3 className="text-xl font-light group-hover:translate-x-2 transition-transform">
                    {exhibition.title}
                  </h3>
                  <p className="text-muted">{exhibition.venue}</p>
                  <div className="md:text-right">
                    <p className="text-sm text-muted">{exhibition.location}</p>
                    <p className="text-sm text-muted/60">{exhibition.dates}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Major Venues */}
        <section className="pt-16 border-t border-border">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Selected Venues
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {artistData.venues.map((venue, index) => (
              <ScrollReveal key={venue} delay={index * 50}>
                <div className="p-6 border border-border hover:border-black transition-colors">
                  <p className="font-light">{venue}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Gallery Representation */}
        <section className="mt-32">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-12 text-center">
              Representation
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {artistData.contact.representation.map((rep) => (
              <ScrollReveal key={rep.gallery}>
                <a
                  href={rep.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 border border-border hover:border-black transition-colors"
                >
                  <h3 className="text-2xl font-light mb-2 group-hover:translate-x-2 transition-transform">
                    {rep.gallery}
                  </h3>
                  <p className="text-muted mb-6">{rep.location}</p>
                  <span className="inline-flex items-center gap-2 text-sm link-underline">
                    Visit Website
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
