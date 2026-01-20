import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Hank Willis Thomas',
  description:
    'Collaborative projects and platforms by Hank Willis Thomas, including For Freedoms and Question Bridge.',
};

export default function CollaborationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      <div className="w-full">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
            <div className="exhibit-marker" />
            <p className="text-xs tracking-[0.3em] uppercase">
              Gallery — Projects
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 opacity-0-init animate-reveal delay-200">
            Collaborative
            <br />
            Projects
          </h1>
          <p className="text-lg text-muted max-w-xl opacity-0-init animate-slide-up delay-400">
            Art as a vehicle for dialogue, community engagement, and civic
            participation.
          </p>
        </div>

        {/* Featured Collaboration */}
        <section className="mb-32">
          <ScrollReveal>
            <article className="p-8 md:p-16 border border-black">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <p className="text-xs tracking-widest uppercase text-muted mb-6">
                    Featured Project
                  </p>
                  <h2 className="text-4xl md:text-5xl font-light mb-6">
                    For Freedoms
                  </h2>
                  <p className="text-lg text-muted leading-relaxed mb-8">
                    A platform for creative civic engagement, discourse, and direct
                    action. For Freedoms uses art as a vehicle for exploring freedom
                    in the United States, building on Norman Rockwell&apos;s 1943
                    paintings illustrating Franklin D. Roosevelt&apos;s Four Freedoms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 border border-black text-sm">
                      ICP Infinity Award 2017
                    </span>
                    <span className="px-4 py-2 border border-border text-sm text-muted">
                      National Billboard Campaign
                    </span>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="w-full">
                    <p className="text-xs tracking-widest uppercase text-muted mb-4">
                      Type
                    </p>
                    <p className="text-sm">Civic Engagement Platform</p>
                    <div className="mt-8 w-full h-px bg-black" />
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>
        </section>

        {/* Room Divider */}
        <div className="room-divider my-16" />

        {/* All Collaborations */}
        <section>
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">All Projects</p>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {artistData.collaborations.map((collab, index) => (
              <ScrollReveal key={collab.title} delay={index * 100}>
                <article className="group grid md:grid-cols-3 gap-8 py-12 border-b border-border hover:border-black transition-colors">
                  <div>
                    <p className="text-xs text-muted tracking-widest uppercase mb-2">
                      {collab.type}
                    </p>
                    <h2 className="text-2xl font-light group-hover:translate-x-2 transition-transform">
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

        {/* Approach */}
        <section className="mt-32 pt-16 border-t border-border">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-12 text-center">
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
                <div className="group py-8 border-b border-border hover:border-black transition-colors">
                  <span className="text-4xl font-extralight text-neutral-200 block mb-6">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-light mb-3 group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="mt-32 py-24 bg-neutral-50 -mx-6 md:-mx-12 px-4 md:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="quote-mark">&ldquo;</span>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed -mt-12 tracking-tight">
                Collaboration is at the heart of social change. Art can create
                spaces for conversation that politics alone cannot.
              </blockquote>
              <div className="mt-12 w-16 h-px bg-black mx-auto" />
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
