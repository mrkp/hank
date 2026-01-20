import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works | Hank Willis Thomas',
  description:
    'Explore the artistic works of Hank Willis Thomas, including photography, sculpture, and mixed media.',
};

const categories = ['All', 'Photography', 'Retroreflective', 'Print', 'Sculpture'];

export default function WorksPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
            <div className="exhibit-marker" />
            <p className="text-xs tracking-[0.3em] uppercase">
              Gallery — Works
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 opacity-0-init animate-reveal delay-200">
            Selected Works
          </h1>
          <p className="text-lg text-muted max-w-xl opacity-0-init animate-slide-up delay-400">
            A body of work spanning photography, sculpture, screen printing, and
            mixed media.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-16 opacity-0-init animate-fade-in delay-500">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2.5 text-sm tracking-wide border transition-all ${
                category === 'All'
                  ? 'border-black bg-black text-white'
                  : 'border-border text-muted hover:border-black hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {artistData.selectedWorks.map((work, index) => (
            <ScrollReveal key={work.title} delay={index * 100}>
              <article className="gallery-card group">
                <div
                  className="aspect-[3/4] bg-neutral-100 gallery-frame mb-6"
                  data-cursor-gallery
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-extralight text-neutral-200 group-hover:text-neutral-300 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="artwork-label">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-muted tracking-wide uppercase">
                      {work.category}
                    </span>
                    <span className="w-4 h-px bg-border" />
                    <span className="text-xs text-muted">{work.year}</span>
                  </div>
                  <h2 className="text-xl font-light group-hover:translate-x-2 transition-transform">
                    {work.title}
                  </h2>
                  <p className="text-sm text-muted mt-2">{work.medium}</p>
                  <p className="text-sm text-muted mt-3 leading-relaxed line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Mediums Section */}
        <section className="mt-32 pt-16 border-t border-border">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Mediums & Techniques
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Photography',
                description:
                  'Documentary and conceptual photography exploring identity and commodity.',
              },
              {
                title: 'Retroreflective',
                description:
                  'Works using road signage vinyl that reveal hidden imagery under flash.',
              },
              {
                title: 'Sculpture',
                description:
                  'Large-scale bronze and mixed media works for public spaces.',
              },
              {
                title: 'Screen Print',
                description:
                  'Prints that examine the relationship between branding and identity.',
              },
            ].map((medium, index) => (
              <ScrollReveal key={medium.title} delay={index * 100}>
                <div className="group py-6 border-b border-border hover:border-black transition-colors">
                  <h3 className="text-lg font-light mb-2 group-hover:translate-x-2 transition-transform">
                    {medium.title}
                  </h3>
                  <p className="text-sm text-muted">{medium.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
