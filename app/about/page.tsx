import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Hank Willis Thomas',
  description:
    'Learn about Hank Willis Thomas, his artistic practice, education, honors, and representation.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      <div className="w-full">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div>
            <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Gallery — About
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[0.95] mb-8 opacity-0-init animate-reveal delay-200">
              Hank
              <br />
              Willis
              <br />
              Thomas
            </h1>
            <div className="artwork-label opacity-0-init animate-fade-in delay-400">
              <p className="text-sm text-muted">
                b. {artistData.born}
                <br />
                Lives and works in {artistData.location}
              </p>
            </div>
          </div>
          <div className="opacity-0-init animate-scale-in delay-500">
            <div className="aspect-[4/5] bg-neutral-100 gallery-frame relative overflow-hidden">
              <Image
                src={artistData.portrait}
                alt="Hank Willis Thomas"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-xs text-muted mt-3">Photo by Jai Lennard</p>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">Biography</p>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {artistData.bio.full.map((paragraph, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <p className="text-lg leading-relaxed text-muted">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}
            </div>
            <div>
              <ScrollReveal delay={300}>
                <div className="sticky top-32">
                  <p className="text-xs text-muted tracking-widest uppercase mb-4">
                    Themes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {artistData.themes.map((theme) => (
                      <span
                        key={theme}
                        className="px-3 py-1.5 border border-border text-sm hover:border-black transition-colors"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Statement Quote */}
        <section className="mb-32 py-24 bg-neutral-50 -mx-6 md:-mx-12 px-4 md:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="quote-mark">&ldquo;</span>
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed -mt-12 tracking-tight">
                {artistData.statement}
              </blockquote>
              <div className="mt-12 w-16 h-px bg-black mx-auto" />
            </div>
          </ScrollReveal>
        </section>

        {/* Education */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">Education</p>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {artistData.education.map((edu, index) => (
              <ScrollReveal key={edu.degree + edu.year} delay={index * 100}>
                <div className="group grid md:grid-cols-3 gap-4 py-6 border-b border-border hover:border-black transition-colors">
                  <p className="text-sm">{edu.year}</p>
                  <p className="font-light group-hover:translate-x-2 transition-transform">
                    {edu.degree}
                  </p>
                  <p className="text-muted">{edu.institution}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Room Divider */}
        <div className="room-divider my-16" />

        {/* Honors */}
        <section className="mb-32">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">
                Honors & Awards
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {artistData.honors.map((honor, index) => (
              <ScrollReveal key={honor.title} delay={index * 50}>
                <div className="group flex items-start gap-6 p-6 border border-border hover:border-black transition-colors">
                  <span className="text-2xl font-extralight text-neutral-300">
                    {honor.year}
                  </span>
                  <p className="font-light group-hover:translate-x-2 transition-transform">
                    {honor.title}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Representation */}
        <section>
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
                    Visit Gallery
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Public Role */}
        <section className="mt-32">
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
