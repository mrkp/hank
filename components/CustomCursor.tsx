'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth follow for dot
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;

      // Slower follow for ring
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;

      requestAnimationFrame(animate);
    };

    // Handle hover states for interactive elements
    const handleMouseEnter = () => {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(0, 0, 0, 0.6)';
      ring.style.transform = `translate(${ringX - 24}px, ${ringY - 24}px)`;
    };

    const handleMouseLeave = () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(0, 0, 0, 0.3)';
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
    };

    // Handle gallery items - expand ring more
    const handleGalleryEnter = () => {
      ring.style.width = '64px';
      ring.style.height = '64px';
      ring.style.borderColor = 'rgba(0, 0, 0, 0.8)';
      ring.style.transform = `translate(${ringX - 32}px, ${ringY - 32}px)`;
      dot.style.opacity = '0';
    };

    const handleGalleryLeave = () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(0, 0, 0, 0.3)';
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      dot.style.opacity = '1';
    };

    // Apply hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    const galleryElements = document.querySelectorAll('[data-cursor-gallery]');

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    galleryElements.forEach((el) => {
      el.addEventListener('mouseenter', handleGalleryEnter);
      el.addEventListener('mouseleave', handleGalleryLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      galleryElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleGalleryEnter);
        el.removeEventListener('mouseleave', handleGalleryLeave);
      });
    };
  }, []);

  // Only show custom cursor on devices that support hover
  return (
    <div className="hidden lg:block">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
