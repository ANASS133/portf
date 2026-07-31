import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import './nav.css';

const certificateFiles = [
  '/certificates/telc-german-b2.pdf',
  '/certificates/zab-professional-qualification.pdf',
  '/certificates/python-essentials-1.pdf',
  null,
  null,
  null,
  '/certificates/html-course.pdf',
  '/certificates/php-course.pdf'
];

export default function Credentials() {
  const { t } = useTranslation();
  const languages = t('credentials.languageItems', { returnObjects: true });
  const certificates = t('credentials.certificateItems', { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(null);
  const availableIndexes = useMemo(() => certificateFiles.map((file, index) => file ? index : null).filter((index) => index !== null), []);
  const closeViewer = useCallback(() => setActiveIndex(null), []);
  const moveViewer = useCallback((direction) => {
    const position = availableIndexes.indexOf(activeIndex);
    setActiveIndex(availableIndexes[(position + direction + availableIndexes.length) % availableIndexes.length]);
  }, [activeIndex, availableIndexes]);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowRight') moveViewer(1);
      if (event.key === 'ArrowLeft') moveViewer(-1);
    };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.classList.remove('modal-open'); window.removeEventListener('keydown', onKeyDown); };
  }, [activeIndex, closeViewer, moveViewer]);

  return (
    <section className="credentials" id="certificates">
      <article className="credential-card">
        <h2><i className="fa-solid fa-language" aria-hidden="true"></i> {t('credentials.languages')}</h2>
        <ul>{languages.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="credential-card certificate-card">
        <h2><i className="fa-solid fa-award" aria-hidden="true"></i> {t('credentials.certificates')}</h2>
        <ul className="certificate-list">{certificates.map((item, index) => (
          <li key={item}>
            {certificateFiles[index] ? <button type="button" onClick={() => setActiveIndex(index)}><span><i className="fa-solid fa-certificate" aria-hidden="true"></i>{item}</span><i className="fa-solid fa-expand" aria-hidden="true"></i></button> : <span className="certificate-unavailable">{item}</span>}
          </li>
        ))}</ul>
      </article>

      {activeIndex !== null && createPortal(<div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title" onMouseDown={(event) => { if (event.target === event.currentTarget) closeViewer(); }}>
        <div className="certificate-viewer">
          <header><div><span>{t('credentials.verifiedDocument')}</span><h2 id="certificate-title">{certificates[activeIndex]}</h2></div><button type="button" className="certificate-close" onClick={closeViewer} aria-label={t('credentials.close')}><i className="fa-solid fa-xmark" aria-hidden="true"></i></button></header>
          <div className="certificate-document"><iframe src={`${process.env.PUBLIC_URL}${certificateFiles[activeIndex]}#toolbar=0&navpanes=0&view=FitH`} title={certificates[activeIndex]} /></div>
          <footer>
            <button type="button" onClick={() => moveViewer(-1)}><i className="fa-solid fa-arrow-left" aria-hidden="true"></i>{t('credentials.previous')}</button>
            <a href={`${process.env.PUBLIC_URL}${certificateFiles[activeIndex]}`} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>{t('credentials.open')}</a>
            <a href={`${process.env.PUBLIC_URL}${certificateFiles[activeIndex]}`} download><i className="fa-solid fa-download" aria-hidden="true"></i>{t('credentials.download')}</a>
            <button type="button" onClick={() => moveViewer(1)}>{t('credentials.next')}<i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
          </footer>
        </div>
      </div>, document.body)}
    </section>
  );
}
