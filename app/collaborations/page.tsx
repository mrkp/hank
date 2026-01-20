import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collaborations | Hank Willis Thomas',
  description:
    'Collaborative projects and platforms by Hank Willis Thomas, including For Freedoms and Question Bridge.',
};

export default function CollaborationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 opacity-0-init animate-fade-in">
            Collaborative Projects
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-6 opacity-0-init animate-reveal delay-200">
            Beyond the
            <br />
            <span className="gradient-text">Studio</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl opacity-0-init animate-slide-up delay-400">
            Art as a vehicle for dialogue, community engagement, and civic
            participation. These collaborative platforms extend the practice
            beyond the individual into the collective.
          </p>
        </div>

        {/* Featured Collaboration */}
        <section className="mb-32">
          <ScrollReveal>
            <article className="relative p-8 md:p-16 border border-accent/30 bg-accent/5">
              <span className="absolute top-4 right-4 text-xs text-accent tracking-widest uppercase">
                Featured
              </span>
              <p className="text-xs text-accent tracking-wider uppercase mb-6">
                Civic Engagement Platform
              </p>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                For Freedoms
              </h2>
              <p className="text-lg text-muted leading-relaxed max-w-3xl mb-8">
                A platform for creative civic engagement, discourse, and direct
                action. For Freedoms uses art as a vehicle for exploring freedom
                in the United States, building on Norman Rockwell&apos;s 1943
                paintings illustrating Franklin D. Roosevelt&apos;s Four Freedoms.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-accent/30 text-sm text-accent">
                  ICP Infinity Award 2017
                </span>
                <span className="px-4 py-2 border border-white/10 text-sm text-muted">
                  National Billboard Campaign
                </span>
                <span className="px-4 py-2 border border-white/10 text-sm text-muted">
                  Ongoing Since 2016
                </span>
              </div>
            </article>
          </ScrollReveal>
        </section>

        {/* All Collaborations */}
        <section>
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-12">
              All Projects
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {artistData.collaborations.map((collab, index) => (
              <ScrollReveal key={collab.title} delay={index * 150}>
                <article className="group grid md:grid-cols-3 gap-8 p-8 border border-white/10 hover:border-accent/30 transition-colors duration-500">
                  <div className="space-y-4">
                    <p className="text-xs text-accent tracking-wider uppercase">
                      {collab.type}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-light group-hover:text-accent transition-colors">
                      {collab.title}
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-muted leading-relaxed">
                      {collab.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mt-32 py-24 border-t border-b border-white/10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="quote-mark text-accent">&ldquo;</span>
              <blockquote className="text-2xl md:text-4xl font-light leading-relaxed -mt-8 mb-8">
                Collaboration is at the heart of social change. Art can create
                spaces for conversation that politics alone cannot.
              </blockquote>
              <div className="w-16 h-px bg-accent mx-auto" />
            </div>
          </ScrollReveal>
        </section>

        {/* Approach */}
        <section className="mt-32">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-8">
              Collaborative Approach
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Community Voice',
                description:
                  'Creating platforms that amplify community voices and facilitate dialogue across difference.',
              },
              {
                number: '02',
                title: 'Civic Engagement',
                description:
                  'Using art as a tool for civic participation and democratic discourse.',
              },
              {
                number: '03',
                title: 'Collective Memory',
                description:
                  'Building shared narratives that honor history while imagining new futures.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="border-l border-white/10 pl-6 hover:border-accent transition-colors duration-500">
                  <span className="text-4xl font-light text-white/10 block mb-4">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-light mb-3">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
