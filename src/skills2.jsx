import React from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';

export default function Skills2() {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true });
  const security = t('skills.securityItems', { returnObjects: true });
  const learning = t('skills.learningItems', { returnObjects: true });

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">{t("skills.my")} <span>{t("skills.titleSpan")}</span></h2>
      <p className="skills-intro">{t('skills.intro')}</p>

      <div className="skills-grid" aria-label={t('skills.supportingTitle')}>
        {groups.map((group) => (
          <article className="skill-group" key={group.title}>
            <div className="skill-group-title"><i className={`fa-solid ${group.icon}`} aria-hidden="true"></i><h3>{group.title}</h3></div>
            <ul>{group.items.map((item) => <li key={item.name}><div><strong>{item.name}</strong><span>{item.context}</span></div><a href={item.target}>{t('skills.evidence')}<i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a></li>)}</ul>
          </article>
        ))}
      </div>

      <div className="security-skills">
        <div><span className="skills-kicker"><i className="fa-solid fa-shield-halved" aria-hidden="true"></i>{t('skills.securityEyebrow')}</span><h3>{t('skills.securityTitle')}</h3><p>{t('skills.securityIntro')}</p></div>
        <ul>{security.map((item) => <li key={item}><i className="fa-solid fa-check" aria-hidden="true"></i>{item}</li>)}</ul>
      </div>

      <div className="skills-learning"><span><i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>{t('skills.learningTitle')}</span><ul>{learning.map((item) => <li key={item}>{item}</li>)}</ul></div>
    </section>
  );
}
