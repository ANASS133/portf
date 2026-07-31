import React from 'react';
import { useTranslation } from 'react-i18next';
import './nav.css';

export default function Credentials() {
  const { t } = useTranslation();
  const languages = t('credentials.languageItems', { returnObjects: true });
  const certificates = t('credentials.certificateItems', { returnObjects: true });
  return (
    <section className="credentials" id="certificates">
      <article className="credential-card">
        <h2><i className="fa-solid fa-language" aria-hidden="true"></i> {t('credentials.languages')}</h2>
        <ul>{languages.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="credential-card certificate-card">
        <h2><i className="fa-solid fa-award" aria-hidden="true"></i> {t('credentials.certificates')}</h2>
        <ul>{certificates.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
    </section>
  );
}
