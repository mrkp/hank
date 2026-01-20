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
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 opacity-0-init animate-fade-in">
            Exhibitions
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-6 opacity-0-init animate-reveal delay-200">
            On View
          </h1>
          <p className="text-lg text-muted max-w-2xl opacity-0-init animate-slide-up delay-400">
            Current and recent exhibitions showcasing new works and retrospective
            presentations at galleries and museums worldwide.
          </p>
        </div>

        {/* Current Exhibitions */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span className="animate-pulse-slow w-3 h-3 bg-accent rounded-full" />
              <p className="text-accent text-sm tracking-[0.3em] uppercase">
                Now Showing
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {artistData.exhibitions.current.map((exhibition, index) => (
              <ScrollReveal key={exhibition.title} delay={index * 150}>
                <article className="group p-8 md:p-12 border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors duration-500">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                      <h2 className="text-3xl md:text-4xl font-light group-hover:text-accent transition-colors">
                        {exhibition.title}
                      </h2>
                      <p className="text-lg text-muted">{exhibition.venue}</p>
                      <p className="text-muted leading-relaxed">
                        {exhibition.description}
                      </p>
                    </div>
                    <div className="space-y-4 md:text-right">
                      <p className="text-accent">{exhibition.dates}</p>
                      <p className="text-muted">{exhibition.location}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Past Exhibitions */}
        <section className="mb-32">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-12">
              Recent Exhibitions
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {artistData.exhibitions.past.map((exhibition, index) => (
              <ScrollReveal key={exhibition.title} delay={index * 100}>
                <article className="group grid md:grid-cols-3 gap-6 py-8 border-b border-white/10 hover:border-accent/30 transition-colors">
                  <h3 className="text-xl font-light group-hover:text-accent transition-colors">
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
        <section className="mt-32 pt-16 border-t border-white/10">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-8">
              Selected Venues
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-12">
              Work Shown At
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artistData.venues.map((venue, index) => (
              <ScrollReveal key={venue} delay={index * 50}>
                <div className="p-6 border border-white/10 hover:border-accent/30 transition-colors duration-500">
                  <p className="font-light">{venue}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Gallery Representation */}
        <section className="mt-32">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {artistData.contact.representation.map((rep) => (
                <a
                  key={rep.gallery}
                  href={rep.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 border border-white/10 hover:border-accent/50 transition-colors duration-500"
                >
                  <p className="text-xs text-accent tracking-wider uppercase mb-4">
                    Gallery Representation
                  </p>
                  <h3 className="text-2xl font-light mb-2 group-hover:text-accent transition-colors">
                    {rep.gallery}
                  </h3>
                  <p className="text-muted">{rep.location}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-muted group-hover:text-foreground transition-colors">
                    <span className="link-underline">Visit Website</span>
                    <span>&rarr;</span>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
