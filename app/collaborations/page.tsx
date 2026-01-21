'use client';

import { useState, useEffect } from 'react';
import { artistData } from '@/lib/data';

export default function CollaborationsPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" className="animate-pulse">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section - Diagonal Split */}
      <section className="relative min-h-screen flex items-center">
        {/* Diagonal slice */}
        <div
          className="absolute inset-0 bg-white origin-top-left"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            transform: `translateX(${scrollY * 0.1}px)`,
          }}
        />

        {/* Floating shapes */}
        <div
          className="absolute w-32 h-32 border border-white rounded-full opacity-20"
          style={{
            left: `${20 + mousePos.x * 0.02}%`,
            top: `${30 + mousePos.y * 0.02}%`,
            transform: `rotate(${scrollY * 0.1}deg)`,
          }}
        />
        <div
          className="absolute w-64 h-64 border border-black opacity-10"
          style={{
            right: `${10 + mousePos.x * 0.01}%`,
            bottom: `${20 + mousePos.y * 0.01}%`,
            transform: `rotate(${-scrollY * 0.05}deg)`,
          }}
        />

        <div className="relative z-10 w-full px-4 md:px-8 pt-32">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - on white */}
            <div className="mix-blend-difference">
              <p className="text-xs tracking-[0.5em] uppercase mb-8 animate-pulse">
                Art &times; Activism &times; Community
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight leading-[0.85] tracking-tighter">
                COL
                <br />
                LAB
                <br />
                <span className="inline-block animate-bounce">O</span>
                <br />
                RATE
              </h1>
            </div>

            {/* Right side - manifesto text */}
            <div className="lg:pl-16 space-y-8">
              <div className="h-px w-full bg-gradient-to-r from-white to-transparent" />
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
                Art is not neutral.
                <br />
                <span className="opacity-50">Silence is complicity.</span>
                <br />
                <em>Create the change.</em>
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 border border-white/30 text-xs tracking-widest animate-pulse">
                  DISRUPT
                </span>
                <span className="px-4 py-2 border border-white/30 text-xs tracking-widest">
                  ENGAGE
                </span>
                <span className="px-4 py-2 border border-white/30 text-xs tracking-widest">
                  TRANSFORM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
          <span className="text-xs tracking-widest opacity-50">SCROLL</span>
        </div>
      </section>

      {/* For Freedoms Section - Full Bleed */}
      <section className="relative py-32 bg-white text-black overflow-hidden">
        {/* Animated wave background */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              style={{ transform: `translateX(${Math.sin(scrollY * 0.01) * 50}px)` }}
            />
          </svg>
        </div>

        <div className="relative z-10 px-4 md:px-8">
          {/* Large For Freedoms Logo */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-16">
            <svg
              viewBox="0 0 468 216"
              className="w-32 md:w-48 lg:w-64 flex-shrink-0"
              style={{ transform: `rotate(${scrollY * 0.02}deg)` }}
            >
              <g fill="currentColor">
                <path d="M468,21.9904375 C459.02667,18.4220331 450.117105,15.4631083 441.260053,13 L441.260053,113.041273 C306.064345,75.434174 183.635346,159.467393 50,136.966417 L50,162.066897 C183.640972,184.555586 306.069971,100.522367 441.260053,138.13561 L441.260053,163.06406 C306.064345,125.451431 183.635346,209.484651 50,186.984288 L50,212.112417 C192.394251,236.07811 322.056176,139.036312 468,197.148834 L468,21.9904375" />
                <path d="M26.7340956,102.955842 C161.960582,140.582074 284.397039,56.551445 418,79.029861 L418,53.9346464 C284.391412,31.4562304 161.960582,115.492389 26.7340956,77.8612415 L26.7340956,52.9368346 C161.960582,90.5624528 284.397039,6.53182346 418,29.0047098 L418,3.88123204 C275.644254,-20.0625666 145.98039,76.9715668 0,18.8398084 L0,194.010477 C8.96721231,197.584536 17.8769104,200.53189 26.7340956,203 L26.7340956,102.955842" />
              </g>
            </svg>
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter">
                FOR FREEDOMS
              </h2>
              <p className="text-lg md:text-xl text-black/60 mt-4 max-w-2xl">
                A platform for creative civic engagement, discourse, and direct action.
              </p>
            </div>
          </div>

          {/* Stats/Impact - Brutalist Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-black">
            {[
              { num: '50+', label: 'States Reached' },
              { num: '200+', label: 'Artists' },
              { num: '∞', label: 'Conversations' },
              { num: '2017', label: 'ICP Infinity Award' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="border-r border-b border-black p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-300 group"
              >
                <span className="text-4xl md:text-6xl font-extralight block mb-2 group-hover:animate-pulse">
                  {stat.num}
                </span>
                <span className="text-xs tracking-widest uppercase opacity-60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Quote - Rotated */}
          <div className="my-32 relative">
            <div
              className="absolute -left-4 top-0 text-[20rem] font-serif opacity-5 select-none"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              &ldquo;
            </div>
            <blockquote className="text-3xl md:text-5xl font-extralight leading-tight max-w-4xl relative z-10">
              Art should comfort the disturbed and
              <span className="inline-block px-4 py-2 bg-black text-white mx-2 -rotate-1">
                disturb
              </span>
              the comfortable.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Projects Grid - Experimental Layout */}
      <section className="py-32 px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-xs tracking-[0.5em] uppercase opacity-50 mb-4">
            Collaborative Projects
          </h2>
          <div className="h-px w-32 bg-white/30" />
        </div>

        <div className="space-y-0">
          {artistData.collaborations.map((collab, index) => (
            <article
              key={collab.title}
              className="group border-t border-white/10 hover:border-white/50 transition-colors"
            >
              <div className="py-12 md:py-16 grid md:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span
                    className="text-6xl md:text-8xl font-extralight opacity-10 group-hover:opacity-30 transition-opacity"
                    style={{
                      transform: `translateX(${index % 2 === 0 ? '' : '-'}${scrollY * 0.02}px)`
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                  <p className="text-xs tracking-widest uppercase opacity-40 mb-4">
                    {collab.type}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-extralight mb-6 group-hover:translate-x-4 transition-transform">
                    {collab.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-xl">
                    {collab.description}
                  </p>
                </div>

                {/* Visual element */}
                <div className="md:col-span-4 flex justify-end">
                  <div
                    className="w-24 h-24 border border-white/20 group-hover:border-white group-hover:rotate-45 transition-all duration-500"
                    style={{
                      transform: `rotate(${index * 15}deg)`,
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Manifesto Section - Glitch Effect */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[30vw] font-black tracking-tighter">ACT</span>
        </div>

        <div className="relative z-10 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs tracking-[0.5em] uppercase opacity-50 mb-16 text-center">
              The Approach
            </h2>

            <div className="space-y-16">
              {[
                { num: '01', title: 'AMPLIFY', text: 'Community voices across difference.' },
                { num: '02', title: 'AGITATE', text: 'Challenge the status quo through art.' },
                { num: '03', title: 'ACTIVATE', text: 'Transform conversation into action.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="grid md:grid-cols-3 gap-8 items-center group"
                >
                  <span className="text-8xl md:text-9xl font-extralight opacity-10 group-hover:opacity-30 transition-opacity">
                    {item.num}
                  </span>
                  <div className="md:col-span-2">
                    <h3 className="text-4xl md:text-6xl font-extralight tracking-tight mb-4 group-hover:translate-x-4 transition-transform">
                      {item.title}
                    </h3>
                    <p className="text-xl opacity-60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Split Screen */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="bg-black text-white flex items-center justify-center p-12 md:p-24">
          <div className="text-center">
            <p className="text-xs tracking-[0.5em] uppercase opacity-50 mb-8">
              The question is not
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
              &ldquo;What is art?&rdquo;
            </h2>
          </div>
        </div>
        <div className="bg-white text-black flex items-center justify-center p-12 md:p-24">
          <div className="text-center">
            <p className="text-xs tracking-[0.5em] uppercase opacity-50 mb-8">
              The question is
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
              &ldquo;What can art do?&rdquo;
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
