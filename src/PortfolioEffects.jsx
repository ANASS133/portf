import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function PortfolioEffects() {
  const progressRef = useRef(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const sections = document.querySelectorAll('main section, .app > section, .about, .education, .skills, .projects, .credentials, .form');
    const titles = document.querySelectorAll('.section-header');
    const timelineItems = document.querySelectorAll('.education-content');

    if (reduced) {
      [...sections, ...titles, ...timelineItems].forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    [...sections, ...titles, ...timelineItems].forEach((element) => revealObserver.observe(element));

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    const updatePointer = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    if (!touch) window.addEventListener('pointermove', updatePointer, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('pointermove', updatePointer);
    };
  }, []);

  useEffect(() => {
    document.body.classList.remove('language-changing');
    void document.body.offsetWidth;
    document.body.classList.add('language-changing');
    const timer = window.setTimeout(() => document.body.classList.remove('language-changing'), 450);
    return () => window.clearTimeout(timer);
  }, [i18n.language]);

  return <div className="scroll-progress" ref={progressRef} aria-hidden="true" />;
}
