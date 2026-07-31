import React, { useEffect, useState } from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';

const navItems = [['home', 'header.home'], ['about', 'header.about'], ['experience', 'header.experience'], ['education', 'header.education'], ['skills', 'header.skills'], ['portfolio', 'header.projects'], ['certificates', 'header.certificates'], ['contact', 'header.contact']];

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

    const { i18n } = useTranslation();
  const cycle = ["en", "de"];

  const next = () => {
    const idx = cycle.indexOf(i18n.language);
    const nextLang = cycle[(idx + 1) % cycle.length];
    i18n.changeLanguage(nextLang);}

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          Sibbi<span className="dot">.</span>
        </h1>

        {/* Menu icon for mobile */}
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isOpen}>
          <i className="fa-solid fa-bars"></i>
        </button>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className={`nav-link ${activeSection === id ? 'active' : ''}`}>{t(label)}</a>)}
          <button
      type="button"
      onClick={next}
      aria-label="Change language"
      title="Change language"
      className="lang"
    >
    {i18n.language?.toUpperCase() || "EN"}
    </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
