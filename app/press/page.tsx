import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press | Hank Willis Thomas',
  description:
    'Press coverage and media features about Hank Willis Thomas and his work.',
};

export default function PressPage() {
  // Group press by year
  const pressByYear = artistData.press.reduce((acc, article) => {
    const year = article.date.split(', ')[1] || article.date.split(' ').pop() || 'Unknown';
    if (!acc[year]) acc[year] = [];
    acc[year].push(article);
    return acc;
  }, {} as Record<string, typeof artistData.press>);

  const years = Object.keys(pressByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
          <div className="exhibit-marker" />
          <p className="text-xs tracking-[0.3em] uppercase">
            Gallery — Press
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 opacity-0-init animate-reveal delay-200">
          In the News
        </h1>
        <p className="text-lg text-muted max-w-xl opacity-0-init animate-slide-up delay-400">
          Selected press coverage and media features.
        </p>
      </div>

      {/* Press by Year */}
      <div className="space-y-16">
        {years.map((year, yearIndex) => (
          <section key={year}>
            <ScrollReveal delay={yearIndex * 50}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl md:text-5xl font-extralight text-neutral-200">
                  {year}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
            </ScrollReveal>

            <div className="grid gap-px bg-border">
              {pressByYear[year].map((article, index) => (
                <ScrollReveal key={article.url} delay={index * 30}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white p-6 md:p-8 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
                      <div className="md:col-span-1">
                        <p className="text-sm font-medium">{article.publication}</p>
                        <p className="text-xs text-muted mt-1">{article.date}</p>
                      </div>
                      <div className="md:col-span-3">
                        <h2 className="text-lg md:text-xl font-light leading-snug group-hover:translate-x-2 transition-transform">
                          {article.title}
                        </h2>
                        <span className="inline-flex items-center gap-2 text-sm text-muted mt-4 group-hover:text-black transition-colors">
                          Read Article
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Publications */}
      <section className="mt-32 pt-16 border-t border-border">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="exhibit-marker" />
            <p className="text-xs tracking-[0.3em] uppercase">
              Featured In
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap gap-4">
          {[...new Set(artistData.press.map(p => p.publication))].slice(0, 15).map((pub, index) => (
            <ScrollReveal key={pub} delay={index * 30}>
              <span className="px-4 py-2 border border-border text-sm tracking-wide hover:border-black transition-colors">
                {pub}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
