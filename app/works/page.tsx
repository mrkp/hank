'use client';

import Image from 'next/image';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';

const categories = ['All', 'Retroreflective', 'Quilts', 'Sculpture', 'Mixed Media'];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWorks = activeCategory === 'All'
    ? artistData.selectedWorks
    : artistData.selectedWorks.filter(work => work.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      <div className="w-full">
        {/* Header */}
        <div className="mb-16">
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
        <div className="flex flex-wrap gap-3 mb-12 opacity-0-init animate-fade-in delay-500">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm tracking-wide border transition-all ${
                category === activeCategory
                  ? 'border-black bg-black text-white'
                  : 'border-border text-muted hover:border-black hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filteredWorks.map((work, index) => (
            <ScrollReveal key={work.title} delay={index * 50}>
              <article className="masonry-item gallery-card group">
                <div
                  className="bg-neutral-100 gallery-frame relative overflow-hidden"
                  style={{
                    aspectRatio: `${work.width} / ${work.height}`
                  }}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="artwork-label mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-muted tracking-wide uppercase">
                      {work.category}
                    </span>
                    <span className="w-4 h-px bg-border" />
                    <span className="text-xs text-muted">{work.year}</span>
                  </div>
                  <h2 className="text-lg font-light group-hover:translate-x-2 transition-transform">
                    {work.title}
                  </h2>
                  <p className="text-sm text-muted mt-1">{work.medium}</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: 'Retroreflective',
                description:
                  'Works using road signage vinyl that reveal hidden imagery under flash photography.',
              },
              {
                title: 'Quilts',
                description:
                  'Textile works connecting craft traditions to contemporary artistic practice and collective memory.',
              },
              {
                title: 'Sculpture',
                description:
                  'Large-scale bronze and mixed media works for public spaces.',
              },
              {
                title: 'Mixed Media',
                description:
                  'Collage and assemblage works exploring identity, history, and visual culture.',
              },
              {
                title: 'Photography',
                description:
                  'Documentary and conceptual photography exploring identity and commodity.',
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
