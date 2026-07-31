import React from 'react';
import JourneyItem from './JourneyItem';
import './nav.css';
import { useTranslation } from 'react-i18next';

const Journey = () => {
  const { t } = useTranslation();
  const experiences = ['exp0', 'exp1', 'exp2', 'exp3'];
  const education = ['edu0', 'edu1', 'edu2', 'edu3'];

  const renderItems = (keys, icon) => keys.map((key) => (
    <JourneyItem
      key={key}
      icon={<i className={`fa-solid ${icon}`} aria-hidden="true"></i>}
      date={t(`journey.${key}.date`)}
      title={t(`journey.${key}.title`)}
      subtitle={t(`journey.${key}.subtitle`)}
      items={t(`journey.${key}.items`, { returnObjects: true })}
    />
  ));

  return (
    <>
      <section className="education journey-section" id="experience">
        <h2 className="section-title">{t("journey.experience")}</h2>
        <div className="education-row one-column">
          <div className="education-column"><div className="education-box">{renderItems(experiences, 'fa-briefcase')}</div></div>
        </div>
      </section>
      <section className="education journey-section" id="education">
        <h2 className="section-title">{t("journey.education")}</h2>
        <div className="education-row one-column">
          <div className="education-column"><div className="education-box">{renderItems(education, 'fa-user-graduate')}</div></div>
        </div>
      </section>
    </>
  );
};

export default Journey;
