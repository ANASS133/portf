import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './nav.css';
import { useTranslation } from 'react-i18next';
import DigitalRain from './DigitalRain';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState('recruiter');
  const [profileOpen, setProfileOpen] = useState(false);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? t('home.goodMorning') : hour < 18 ? t('home.goodAfternoon') : t('home.goodEvening');

  useEffect(() => {
    document.documentElement.classList.remove('lang-en', 'lang-de');
    document.documentElement.classList.add(`lang-${i18n.language}`);
  }, [i18n.language]);

  useEffect(() => {
    if (!profileOpen) return undefined;
    const close = (event) => { if (event.key === 'Escape') setProfileOpen(false); };
    document.body.classList.add('drawer-open');
    window.addEventListener('keydown', close);
    return () => { document.body.classList.remove('drawer-open'); window.removeEventListener('keydown', close); };
  }, [profileOpen]);

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

  const profileDrawer = profileOpen && createPortal(
    <div className="profile-drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setProfileOpen(false); }}>
      <aside className="profile-drawer" role="dialog" aria-modal="true" aria-labelledby="quick-profile-title">
        <header><div><span>{t('home.quickEyebrow')}</span><h2 id="quick-profile-title">{t('home.quickTitle')}</h2></div><button type="button" onClick={() => setProfileOpen(false)} aria-label={t('home.closeProfile')}><i className="fa-solid fa-xmark" aria-hidden="true"></i></button></header>
        <dl>
          <div><dt>{t('home.profileRole')}</dt><dd>{t('home.role')}</dd></div>
          <div><dt>{t('home.profileStack')}</dt><dd>React · Spring Boot · Flutter · Laravel</dd></div>
          <div><dt>{t('home.profileExperience')}</dt><dd>{t('home.profileExperienceValue')}</dd></div>
          <div><dt>{t('home.profileGerman')}</dt><dd>B2 · telc</dd></div>
          <div><dt>{t('home.profileStudy')}</dt><dd>{t('home.profileStudyValue')}</dd></div>
          <div><dt>{t('home.profileLocation')}</dt><dd>Casablanca → Germany</dd></div>
        </dl>
        <div className="profile-drawer-actions"><a href="#contact" onClick={() => setProfileOpen(false)} className="primary-btn">{t('home.contact')}</a><a href={`${process.env.PUBLIC_URL}/weg.pdf`} download className="outline-btn"><i className="fa-solid fa-download" aria-hidden="true"></i>{t('home.downloadShort')}</a></div>
      </aside>
    </div>, document.body
  );

  return (
    <section className="home" id="home" onPointerMove={moveHeroLight}>
      <DigitalRain />
      <div className="hero-architecture" aria-hidden="true"><span>React</span><i></i><span>REST API</span><i></i><span>Spring Boot</span><i></i><span>SQL</span></div>
      <div className="home-content">
        <div className="hero-topline"><span>{greeting}</span><button type="button" onClick={() => setProfileOpen(true)}><i className="fa-solid fa-id-card" aria-hidden="true"></i>{t('home.quickProfile')}</button></div>
        <div className="availability-badge"><span aria-hidden="true"></span>{t('home.badge')}</div>
        <div className="hero-mode" role="group" aria-label={t('home.viewMode')}><button type="button" className={mode === 'recruiter' ? 'active' : ''} onClick={() => setMode('recruiter')}>{t('home.recruiterView')}</button><button type="button" className={mode === 'developer' ? 'active' : ''} onClick={() => setMode('developer')}>{t('home.developerView')}</button></div>
        <h1>{t('home.hi')}</h1>
        <h3>{t('home.role')}</h3>
        <p className="hero-description" key={mode}>{mode === 'recruiter' ? t('home.recruiterText') : t('home.developerText')}</p>
        <div className="hero-focus" key={`${mode}-focus`}>{(mode === 'recruiter' ? t('home.recruiterFocus', { returnObjects: true }) : t('home.developerFocus', { returnObjects: true })).map((item) => <span key={item}>{item}</span>)}</div>

        <div className="btn-box">
          <a href="#portfolio" className="primary-btn magnetic" onPointerMove={moveMagnet} onPointerLeave={resetMagnet}>{t('home.projects')}</a>
          <a href={`${process.env.PUBLIC_URL}/weg.pdf`} download className="outline-btn cv-btn magnetic" onPointerMove={moveMagnet} onPointerLeave={resetMagnet}><i className="fa-solid fa-download" aria-hidden="true"></i>{t('home.download')}</a>
          <a href="#contact" className="hero-contact-link">{t('home.contact')} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className="hero-location"><i className="fa-solid fa-location-dot" aria-hidden="true"></i><span>Casablanca, Morocco</span><i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i><strong>{t('home.openGermany')}</strong></div>
        <div className="hero-trust"><a href="#experience">{t('home.trustExperience')}</a><a href="#certificates">{t('home.trustGerman')}</a><a href="#certificates">{t('home.trustZab')}</a></div>
        <div className="home-sci"><a href="https://www.linkedin.com/in/anass-sibbi-75778b347/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a><a href="https://wa.me/+212699771759" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a><a href="https://github.com/ANASS133" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a></div>
      </div>
      <a className="hero-scroll" href="#about"><span>{t('home.explore')}</span><i className="fa-solid fa-arrow-down" aria-hidden="true"></i></a>
      {profileDrawer}
    </section>
  );
};

export default Home;
