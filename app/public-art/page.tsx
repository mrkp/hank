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
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 opacity-0-init animate-fade-in">
            Public Art
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-6 opacity-0-init animate-reveal delay-200">
            Art in the
            <br />
            <span className="gradient-text">Public Sphere</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl opacity-0-init animate-slide-up delay-400">
            Permanent installations that transform public spaces into sites of
            reflection, dialogue, and community engagement.
          </p>
        </div>

        {/* Featured Installation */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[12rem] font-light text-white/5">01</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              </div>
              <div className="space-y-6">
                <p className="text-accent text-sm tracking-wide">
                  {artistData.publicArt[0].year} &middot;{' '}
                  {artistData.publicArt[0].location}
                </p>
                <h2 className="text-4xl md:text-5xl font-light">
                  {artistData.publicArt[0].title}
                </h2>
                <p className="text-lg text-muted leading-relaxed">
                  {artistData.publicArt[0].description}
                </p>
                <div className="pt-4">
                  <div className="w-24 h-px bg-accent" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* All Public Art */}
        <section>
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-12">
              Permanent Installations
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {artistData.publicArt.slice(1).map((artwork, index) => (
              <ScrollReveal key={artwork.title} delay={index * 150}>
                <article className="grid md:grid-cols-3 gap-8 items-start group">
                  <div className="aspect-[4/3] bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-light text-white/5 group-hover:text-accent/10 transition-colors">
                        {String(index + 2).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-accent text-sm">{artwork.year}</span>
                      <span className="w-8 h-px bg-white/20" />
                      <span className="text-sm text-muted">
                        {artwork.location}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-light group-hover:text-accent transition-colors">
                      {artwork.title}
                    </h2>
                    <p className="text-muted leading-relaxed max-w-xl">
                      {artwork.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="mt-32 pt-16 border-t border-white/10">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
                Locations
              </p>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                Experience the Work
              </h2>
              <div className="aspect-[2/1] bg-white/5 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted mb-2">
                      Brooklyn, NY &bull; San Francisco, CA &bull; Opa Locka, FL
                    </p>
                    <p className="text-sm text-muted/60">
                      Yorkshire Sculpture Park, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Commission Info */}
        <section className="mt-32">
          <ScrollReveal>
            <div className="p-8 md:p-16 border border-white/10 bg-white/[0.02]">
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
                Public Design Commission
              </p>
              <h2 className="text-2xl md:text-3xl font-light mb-6">
                City of New York Member
              </h2>
              <p className="text-muted leading-relaxed max-w-2xl">
                As a member of the Public Design Commission for the City of New
                York, Hank Willis Thomas continues to advocate for public art
                that engages communities and transforms shared spaces into sites
                of meaning and dialogue.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
