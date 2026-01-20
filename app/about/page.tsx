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
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 opacity-0-init animate-fade-in">
              About
            </p>
            <h1 className="text-4xl md:text-6xl font-light mb-6 opacity-0-init animate-reveal delay-200">
              Hank Willis
              <br />
              <span className="gradient-text">Thomas</span>
            </h1>
            <p className="text-sm text-muted opacity-0-init animate-fade-in delay-400">
              b. {artistData.born}
              <br />
              Lives and works in {artistData.location}
            </p>
          </div>
          <div className="opacity-0-init animate-slide-up delay-500">
            <div className="aspect-[4/5] bg-white/5 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8rem] font-light text-white/5">HWT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-32">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-8">
              Biography
            </p>
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
                <div className="sticky top-32 space-y-8">
                  <div>
                    <p className="text-xs text-accent tracking-wider uppercase mb-3">
                      Themes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {artistData.themes.map((theme) => (
                        <span
                          key={theme}
                          className="px-3 py-1 border border-white/10 text-sm text-muted"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Statement Quote */}
        <section className="mb-32 py-24 border-t border-b border-white/10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="quote-mark text-accent">&ldquo;</span>
              <blockquote className="text-2xl md:text-4xl font-light leading-relaxed -mt-8">
                {artistData.statement}
              </blockquote>
            </div>
          </ScrollReveal>
        </section>

        {/* Education */}
        <section className="mb-32">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-12">
              Education
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {artistData.education.map((edu, index) => (
              <ScrollReveal key={edu.degree + edu.year} delay={index * 100}>
                <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-white/10">
                  <p className="text-accent">{edu.year}</p>
                  <p className="font-light">{edu.degree}</p>
                  <p className="text-muted">{edu.institution}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Honors */}
        <section className="mb-32">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-12">
              Honors & Awards
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {artistData.honors.map((honor, index) => (
              <ScrollReveal key={honor.title} delay={index * 50}>
                <div className="group flex items-start gap-6 p-6 border border-white/10 hover:border-accent/30 transition-colors duration-500">
                  <span className="text-2xl font-light text-accent">
                    {honor.year}
                  </span>
                  <p className="font-light group-hover:text-accent transition-colors">
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
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-12">
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
                  className="group block p-8 border border-white/10 hover:border-accent/50 transition-colors duration-500"
                >
                  <h3 className="text-2xl font-light mb-2 group-hover:text-accent transition-colors">
                    {rep.gallery}
                  </h3>
                  <p className="text-muted mb-6">{rep.location}</p>
                  <div className="flex items-center gap-2 text-sm text-muted group-hover:text-foreground transition-colors">
                    <span className="link-underline">Visit Gallery</span>
                    <span>&rarr;</span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Public Role */}
        <section className="mt-32">
          <ScrollReveal>
            <div className="p-8 md:p-12 bg-white/[0.02] border border-white/10">
              <p className="text-xs text-accent tracking-wider uppercase mb-4">
                Public Service
              </p>
              <h2 className="text-2xl md:text-3xl font-light mb-4">
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
