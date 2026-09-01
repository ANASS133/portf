import React, { useEffect, useState } from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';

const navItems = [['home', 'header.home'], ['about', 'header.about'], ['experience', 'header.experience'], ['education', 'header.education'], ['skills', 'header.skills'], ['portfolio', 'header.projects'], ['certificates', 'header.certificates'], ['contact', 'header.contact']];

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolioTheme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  const { t } = useTranslation();
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] });
    navItems.forEach(([id]) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 48);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolioTheme', theme);
  }, [theme]);

    const { i18n } = useTranslation();
  const cycle = ["en", "de"];

  const next = () => {
    const idx = cycle.indexOf(i18n.language);
    const nextLang = cycle[(idx + 1) % cycle.length];
    i18n.changeLanguage(nextLang);}

  return (
    <>
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo">
          Anass Sibbi<span className="dot">.</span>
        </h1>

        {/* Menu icon for mobile */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isOpen}>
          <i className="fa-solid fa-bars"></i>
        </button>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className={`nav-link ${activeSection === id ? 'active' : ''}`}>{t(label)}</a>)}
          <div className="nav-tools">
            <button type="button" className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Enable light mode' : 'Enable dark mode'} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}><i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i></button>
            <button type="button" onClick={next} aria-label="Change language" title="Change language" className="lang">{i18n.language?.toUpperCase() || "EN"}</button>
          </div>
        </nav>
      </div>
    </header>
    <nav className="section-rail" aria-label="Section progress">
      {navItems.map(([id, label], index) => <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} aria-label={t(label)} title={t(label)}><span>{String(index + 1).padStart(2, '0')}</span><i aria-hidden="true"></i></a>)}
    </nav>
    </>
  );
};

export default Header;
