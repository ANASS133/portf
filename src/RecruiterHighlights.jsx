import React from 'react';
import { useTranslation } from 'react-i18next';
import './nav.css';

export default function RecruiterHighlights() {
  const { t } = useTranslation();
  const highlights = t('highlights.items', { returnObjects: true });
  return (
    <section className="recruiter-highlights" aria-label={t('highlights.label')}>
      {highlights.map((item) => (
        <article key={item.title}>
          <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
          <div><h2>{item.title}</h2><p>{item.text}</p></div>
        </article>
      ))}
    </section>
  );
}
