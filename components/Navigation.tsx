'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Gallery' },
  { href: '/works', label: 'Works' },
  { href: '/public-art', label: 'Public Art' },
  { href: '/exhibitions', label: 'Exhibitions' },
  { href: '/collaborations', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform" />
            <span className="text-sm md:text-base font-light tracking-[0.2em] uppercase">
              Hank Willis Thomas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-pill text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-black'
                    : 'text-muted hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-black transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'
              }`}
            />
            <span
              className={`w-5 h-px bg-black transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[0px]' : 'translate-y-1'
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-light tracking-widest uppercase transition-all duration-500 ${
                isOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              } ${pathname === link.href ? 'text-black' : 'text-muted hover:text-black'}`}
              style={{ transitionDelay: `${index * 50 + 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Gallery hours - museum style touch */}
        <div
          className={`absolute bottom-12 left-0 right-0 text-center text-xs text-muted tracking-wider transition-all duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Brooklyn, New York
        </div>
      </div>
    </>
  );
}
