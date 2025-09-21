import React, { useState } from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => setIsOpen(!isOpen);

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
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          <a href="#home" className="nav-link active">{t("header.home")}</a>
          <a href="#about" className="nav-link">{t("header.about")}</a>
          <a href="#services" className="nav-link">{t("header.services")}</a>
          <a href="#portfolio" className="nav-link">{t("header.portfolio")}</a>
          <a href="#contact" className="nav-link">{t("header.contact")}</a>
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
