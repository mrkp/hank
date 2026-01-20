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
        <div className="mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 opacity-0-init animate-fade-in">
            Selected Works
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-6 opacity-0-init animate-reveal delay-200">
            Artistic Practice
          </h1>
          <p className="text-lg text-muted max-w-2xl opacity-0-init animate-slide-up delay-400">
            A body of work spanning photography, sculpture, screen printing, and
            mixed media—exploring identity, commodity, and the visual codes that
            shape our understanding of culture.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-16 opacity-0-init animate-fade-in delay-500">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm tracking-wide border transition-colors duration-300 ${
                category === 'All'
                  ? 'border-accent text-accent'
                  : 'border-white/10 text-muted hover:border-white/30 hover:text-foreground'
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
              <article className="group">
                <div className="aspect-[4/5] bg-white/5 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl font-light text-white/5 group-hover:text-accent/10 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-accent tracking-wide uppercase">
                      {work.category}
                    </span>
                    <span className="w-8 h-px bg-white/20" />
                    <span className="text-xs text-muted">{work.year}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-light group-hover:text-accent transition-colors">
                    {work.title}
                  </h2>
                  <p className="text-sm text-muted/80">{work.medium}</p>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {work.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Mediums Section */}
        <section className="mt-32 pt-16 border-t border-white/10">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-8">
              Mediums & Techniques
            </p>
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
                <div className="border-l border-white/10 pl-6 hover:border-accent transition-colors duration-500">
                  <h3 className="text-lg font-light mb-2">{medium.title}</h3>
                  <p className="text-sm text-muted">{medium.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mt-32">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="quote-mark text-accent">&ldquo;</span>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed -mt-8">
                My work often deals with the way we see and the way we choose
                not to see.
              </blockquote>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
