'use client';

import Image from 'next/image';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { artistData } from '@/lib/data';
import Link from 'next/link';

export default function PublicArtPage() {
  const [selectedProject, setSelectedProject] = useState<typeof artistData.publicArt[0] | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
          <div className="exhibit-marker" />
          <p className="text-xs tracking-[0.3em] uppercase">
            Gallery — Public Art
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 opacity-0-init animate-reveal delay-200">
          Art in the
          <br />
          Public Sphere
        </h1>
        <p className="text-lg text-muted max-w-xl opacity-0-init animate-slide-up delay-400">
          Permanent installations that transform public spaces into sites of
          reflection and community engagement.
        </p>
      </div>

      {/* Large Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {artistData.publicArt.map((project, index) => (
          <ScrollReveal key={project.slug} delay={index * 50}>
            <button
              onClick={() => setSelectedProject(project)}
              className="group relative w-full text-left overflow-hidden"
            >
              <div
                className="relative w-full"
                style={{
                  aspectRatio: `${project.width} / ${project.height}`
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                {/* Content on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs text-white/80 tracking-widest uppercase mb-2">
                    {project.year} · {project.type}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-white/80">
                    {project.location}
                  </p>
                </div>
              </div>
              {/* Always visible label on mobile */}
              <div className="md:hidden mt-4 px-1">
                <span className="text-xs text-muted tracking-wide">
                  {project.year} · {project.location}
                </span>
                <h2 className="text-lg font-light mt-1">{project.title}</h2>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="min-h-screen py-8 px-4 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors rounded-full"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-w-6xl mx-auto pt-16">
              {/* Main Image */}
              <div
                className="relative w-full mb-8"
                style={{
                  aspectRatio: `${selectedProject.width} / ${selectedProject.height}`
                }}
              >
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-2 gap-12 text-white">
                <div>
                  <span className="text-xs text-white/60 tracking-widest uppercase">
                    {selectedProject.year} · {selectedProject.type}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-light mt-4 mb-6">
                    {selectedProject.title}
                  </h1>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs text-white/60 tracking-widest uppercase mb-2">
                      Location
                    </p>
                    <p className="text-lg">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 tracking-widest uppercase mb-2">
                      Type
                    </p>
                    <p className="text-lg">{selectedProject.type}</p>
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
