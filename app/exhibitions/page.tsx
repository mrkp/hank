'use client';

import Image from 'next/image';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';

export default function ExhibitionsPage() {
  const [selectedExhibition, setSelectedExhibition] = useState<typeof artistData.exhibitions[0] | null>(null);

  const currentExhibitions = artistData.exhibitions.filter(e => e.status === 'current');
  const pastExhibitions = artistData.exhibitions.filter(e => e.status === 'past');

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
          <div className="exhibit-marker" />
          <p className="text-xs tracking-[0.3em] uppercase">
            Gallery — Exhibitions
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 opacity-0-init animate-reveal delay-200">
          On View
        </h1>
        <p className="text-lg text-muted max-w-xl opacity-0-init animate-slide-up delay-400">
          Current and recent exhibitions at galleries and museums worldwide.
        </p>
      </div>

      {/* Current Exhibitions */}
      {currentExhibitions.length > 0 && (
        <section className="mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-black rounded-full animate-breathe" />
              <p className="text-xs tracking-[0.3em] uppercase">Now Showing</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentExhibitions.map((exhibition, index) => (
              <ScrollReveal key={exhibition.slug} delay={index * 50}>
                <button
                  onClick={() => setSelectedExhibition(exhibition)}
                  className="group relative w-full text-left overflow-hidden"
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: `${exhibition.width} / ${exhibition.height}`
                    }}
                  >
                    <Image
                      src={exhibition.image}
                      alt={exhibition.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-breathe" />
                        <span className="text-xs text-white/80 tracking-widest uppercase">
                          Now Showing
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
                        {exhibition.title}
                      </h2>
                      <p className="text-sm text-white/80">
                        {exhibition.venue}, {exhibition.location}
                      </p>
                    </div>
                  </div>
                  <div className="md:hidden mt-4 px-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1.5 h-1.5 bg-black rounded-full animate-breathe" />
                      <span className="text-xs text-muted tracking-wide">Now Showing</span>
                    </div>
                    <h2 className="text-lg font-light">{exhibition.title}</h2>
                    <p className="text-sm text-muted">{exhibition.venue}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Past Exhibitions */}
      {pastExhibitions.length > 0 && (
        <section className="mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="exhibit-marker" />
              <p className="text-xs tracking-[0.3em] uppercase">Recent Exhibitions</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastExhibitions.map((exhibition, index) => (
              <ScrollReveal key={exhibition.slug} delay={index * 50}>
                <button
                  onClick={() => setSelectedExhibition(exhibition)}
                  className="group relative w-full text-left overflow-hidden"
                >
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: `${exhibition.width} / ${exhibition.height}`
                    }}
                  >
                    <Image
                      src={exhibition.image}
                      alt={exhibition.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs text-white/80 tracking-widest uppercase mb-2">
                        {exhibition.dates}
                      </span>
                      <h2 className="text-xl md:text-2xl font-light text-white mb-2">
                        {exhibition.title}
                      </h2>
                      <p className="text-sm text-white/80">
                        {exhibition.venue}
                      </p>
                    </div>
                  </div>
                  <div className="md:hidden mt-4 px-1">
                    <span className="text-xs text-muted tracking-wide">{exhibition.dates}</span>
                    <h2 className="text-lg font-light mt-1">{exhibition.title}</h2>
                    <p className="text-sm text-muted">{exhibition.venue}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Selected Venues */}
      <section className="pt-16 border-t border-border">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="exhibit-marker" />
            <p className="text-xs tracking-[0.3em] uppercase">Selected Venues</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artistData.venues.map((venue, index) => (
            <ScrollReveal key={venue} delay={index * 30}>
              <div className="p-4 md:p-6 border border-border hover:border-black transition-colors">
                <p className="font-light text-sm md:text-base">{venue}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedExhibition && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={() => setSelectedExhibition(null)}
        >
          <div
            className="min-h-screen py-8 px-4 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExhibition(null)}
              className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors rounded-full"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-w-6xl mx-auto pt-16">
              <div
                className="relative w-full mb-8"
                style={{
                  aspectRatio: `${selectedExhibition.width} / ${selectedExhibition.height}`
                }}
              >
                <Image
                  src={selectedExhibition.image}
                  alt={selectedExhibition.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="grid md:grid-cols-2 gap-12 text-white">
                <div>
                  {selectedExhibition.status === 'current' && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-white rounded-full animate-breathe" />
                      <span className="text-xs text-white/60 tracking-widest uppercase">
                        Now Showing
                      </span>
                    </div>
                  )}
                  <h1 className="text-3xl md:text-5xl font-light mb-6">
                    {selectedExhibition.title}
                  </h1>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {selectedExhibition.description}
                  </p>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs text-white/60 tracking-widest uppercase mb-2">
                      Venue
                    </p>
                    <p className="text-lg">{selectedExhibition.venue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 tracking-widest uppercase mb-2">
                      Location
                    </p>
                    <p className="text-lg">{selectedExhibition.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 tracking-widest uppercase mb-2">
                      Dates
                    </p>
                    <p className="text-lg">{selectedExhibition.dates}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
