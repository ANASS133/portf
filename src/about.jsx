import React from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const About = () => {
  const { t } = useTranslation();
  const valueCards = t('about.valueCards', { returnObjects: true });
  const principles = t('about.principles', { returnObjects: true });
  const faq = t('about.faq', { returnObjects: true });

  return (
    <section className="about" id="about">
      <SectionHeader number="01" label={t('sectionHeaders.about.label')} title={t('sectionHeaders.about.title')} subtitle={t('sectionHeaders.about.subtitle')} />

      <div className="about-intro">
        <figure className="about-portrait">
          <div className="portrait-orbit" aria-hidden="true"><i></i><i></i></div>
          <img src={`${process.env.PUBLIC_URL}/081b29.png`} alt={t('about.photoAlt')} loading="lazy" />
          <figcaption><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Casablanca, Morocco</figcaption>
        </figure>
        <div className="about-summary">
          <span className="about-eyebrow">{t('about.eyebrow')}</span>
          <h3>{t('about.role')}</h3>
          <p className="about-lead">{t('about.lead')}</p>
          <p>{t('about.text')}</p>
          <div className="about-evidence">
            <a href="#experience"><i className="fa-solid fa-briefcase" aria-hidden="true"></i>{t('about.evidenceExperience')}</a>
            <a href="#certificates"><i className="fa-solid fa-language" aria-hidden="true"></i>{t('about.evidenceGerman')}</a>
            <a href="#certificates"><i className="fa-solid fa-certificate" aria-hidden="true"></i>{t('about.evidenceZab')}</a>
            <a href="#education"><i className="fa-solid fa-shield-halved" aria-hidden="true"></i>{t('about.evidenceStudy')}</a>
          </div>
        </div>
      </div>

      <div className="about-value-grid">
        {valueCards.map((card) => <article key={card.title}><i className={`fa-solid ${card.icon}`} aria-hidden="true"></i><h3>{card.title}</h3><ul>{card.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
      </div>

      <div className="about-principles">
        <div className="principles-copy"><span className="about-eyebrow">{t('about.principlesEyebrow')}</span><h3>{t('about.principlesTitle')}</h3><p>{t('about.principlesIntro')}</p></div>
        <div className="principle-grid">{principles.map((principle) => <article key={principle.title}><i className={`fa-solid ${principle.icon}`} aria-hidden="true"></i><div><h4>{principle.title}</h4><p>{principle.text}</p></div></article>)}</div>
      </div>

      <div className="about-lower-grid about-profile-only">
        <div className="profile-orbit" aria-label={t('about.profileDiagram')}><span className="orbit-center">Anass<br />Sibbi</span><span className="orbit-node node-security">{t('about.security')}</span><span className="orbit-node node-web">Web</span><span className="orbit-node node-mobile">Mobile</span><span className="orbit-node node-german">Deutsch B2</span></div>
      </div>

      <div className="about-faq"><span className="about-eyebrow">{t('about.faqEyebrow')}</span><h3>{t('about.faqTitle')}</h3>{faq.map((item) => <details key={item.question}><summary>{item.question}<i className="fa-solid fa-plus" aria-hidden="true"></i></summary><p>{item.answer}</p></details>)}</div>

    </section>
  );
};

export default About;
