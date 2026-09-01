import React, { useState } from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const experienceKeys = ['exp0', 'exp1', 'exp2', 'exp3'];
const educationKeys = ['edu0', 'edu1', 'edu2', 'edu3'];

function CareerSection({ id, title, header, items, mode, selected, setSelected, labels }) {
  if (!items.length) return <section className="career-section empty-career" id={id}><SectionHeader {...header} /><p>{labels.noResults}</p></section>;
  if (mode === 'compact') {
    return <section className="career-section compact-career" id={id}><SectionHeader {...header} /><div className="compact-career-grid">{items.map((item) => <article key={item.key}><div className="career-card-top"><span className={`career-status ${item.current ? 'current' : ''}`}>{item.current ? labels.current : item.type}</span><span>{item.date}</span></div><i className={`career-role-icon fa-solid ${item.icon}`} aria-hidden="true"></i><h3>{item.title}</h3><p className="career-organization">{item.subtitle}</p><p className="career-impact">{item.impact}</p><div className="career-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>;
  }

  const active = items.find((item) => item.key === selected) || items[0];
  return <section className="career-section" id={id}>
    <SectionHeader {...header} />
    <div className="career-split">
      <nav className="career-nav" aria-label={title}>{items.map((item) => <button key={item.key} type="button" className={active.key === item.key ? 'active' : ''} onClick={() => setSelected(item.key)} aria-pressed={active.key === item.key}><span className="career-dot"></span><span><small>{item.date}</small><strong>{item.title}</strong><em>{item.duration}</em></span></button>)}</nav>
      <article className="career-detail" key={active.key}>
        <div className="career-detail-header"><div><div className="career-badges"><span className={`career-status ${active.current ? 'current' : ''}`}>{active.current ? labels.current : labels.completed}</span><span>{active.type}</span></div><h3>{active.title}</h3><p>{active.subtitle}</p><small>{active.context}</small></div><i className={`fa-solid ${active.icon}`} aria-hidden="true"></i></div>
        <div className="career-impact-box"><span>{labels.impact}</span><p>{active.impact}</p></div>
        <div className="career-tags">{active.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <details className="career-responsibilities"><summary>{labels.responsibilities}<i className="fa-solid fa-chevron-down" aria-hidden="true"></i></summary><ul>{active.items.map((item) => <li key={item}>{item}</li>)}</ul></details>
        {(active.related?.length > 0 || active.document) && <div className="career-links">{active.related?.length > 0 && <div><span>{labels.related}</span>{active.related.map((link) => <a key={link.target} href={link.target}>{link.label}<i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>)}</div>}{active.document && <a className="career-document" href={`${process.env.PUBLIC_URL}${active.document}`} target="_blank" rel="noreferrer"><i className="fa-solid fa-file-shield" aria-hidden="true"></i>{labels.document}</a>}</div>}
      </article>
    </div>
  </section>;
}

export default function Journey() {
  const { t } = useTranslation();
  const [selectedExperience, setSelectedExperience] = useState('exp0');
  const [selectedEducation, setSelectedEducation] = useState('edu0');
  const experienceMeta = t('career.experienceMeta', { returnObjects: true });
  const educationMeta = t('career.educationMeta', { returnObjects: true });
  const labels = t('career.labels', { returnObjects: true });
  const sectionHeaders = t('sectionHeaders', { returnObjects: true });

  const makeItems = (keys, metadata) => keys.map((key, index) => ({ key, date: t(`journey.${key}.date`), title: t(`journey.${key}.title`), subtitle: t(`journey.${key}.subtitle`), items: t(`journey.${key}.items`, { returnObjects: true }), ...metadata[index] }));
  const experiences = makeItems(experienceKeys, experienceMeta);
  const education = makeItems(educationKeys, educationMeta);

  return <div className="career-system">
    <CareerSection id="experience" title={t('journey.experience')} header={{ number: '02', ...sectionHeaders.experience }} items={experiences} mode="timeline" selected={selectedExperience} setSelected={setSelectedExperience} labels={labels} />
    <CareerSection id="education" title={t('career.educationTitle')} header={{ number: '03', ...sectionHeaders.education }} items={education} mode="timeline" selected={selectedEducation} setSelected={setSelectedEducation} labels={labels} />

  </div>;
}
