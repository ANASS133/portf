import React, { useEffect } from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';
import DigitalRain from './DigitalRain';

const Home = () => {
  const { t, i18n } = useTranslation();

  // Add lang class to <html>
  useEffect(() => {
    document.documentElement.classList.remove("lang-en", "lang-de");
    document.documentElement.classList.add(`lang-${i18n.language}`);
  }, [i18n.language]);

  const moveMagnet = (event) => {
    if (window.matchMedia('(hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.14;
    event.currentTarget.style.setProperty('--magnet-x', `${Math.max(-7, Math.min(7, x))}px`);
    event.currentTarget.style.setProperty('--magnet-y', `${Math.max(-7, Math.min(7, y))}px`);
  };
  const resetMagnet = (event) => { event.currentTarget.style.setProperty('--magnet-x', '0px'); event.currentTarget.style.setProperty('--magnet-y', '0px'); };
  const moveHeroLight = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--hero-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--hero-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section className="home" id="home" onPointerMove={moveHeroLight}>
      <DigitalRain />
      <div className="home-content">
        <div className="availability-badge" tabIndex="0"><span aria-hidden="true"></span>{t("home.badge")}<div className="availability-tooltip" role="tooltip"><b>{t("availability.relocation")}</b><b>{t("availability.german")}</b><b>{t("availability.interviews")}</b></div></div>
        <h1>{t("home.hi")}</h1>
        <h3 className="typing-text">{t("home.role")}</h3>
        <p>{t("home.text")}</p>

        <div className="btn-box">
          <a href="#portfolio" className="primary-btn magnetic" onPointerMove={moveMagnet} onPointerLeave={resetMagnet}>{t("home.projects")}</a>
          <a href="#contact" className="outline-btn magnetic" onPointerMove={moveMagnet} onPointerLeave={resetMagnet}>{t("home.contact")}</a>
          <a href={`${process.env.PUBLIC_URL}/weg.pdf`} download className="outline-btn cv-btn magnetic" onPointerMove={moveMagnet} onPointerLeave={resetMagnet}><i className="fa-solid fa-download" aria-hidden="true"></i>{t("home.download")}</a>
        </div>

        <div className="home-sci">
          <a href="https://www.linkedin.com/in/anass-sibbi-75778b347/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://wa.me/+212699771759" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://github.com/ANASS133" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;
