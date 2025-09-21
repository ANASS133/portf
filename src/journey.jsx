import React from 'react';
import JourneyItem from './JourneyItem'; // Adjust path if needed
import './nav.css';
import { useTranslation } from 'react-i18next';

const Journey = () => {
  const { t } = useTranslation();

  return (
    <section className="education" id="education">
      <h2 className="section-title">
        {t("journey.my")} <span>{t("journey.titleSpan")}</span>
      </h2>

      <div className="education-row">
        {/* Education Column */}
        <div className="education-column">
          <h3 className="title">{t("journey.education")}</h3>
          <div className="education-box">
            <JourneyItem
              icon={<i className="fa-solid fa-user-graduate" aria-hidden="true"></i>}
              date={t("journey.edu1.date")}
              title={t("journey.edu1.title")}
              subtitle={t("journey.edu1.subtitle")}
              items={t("journey.edu1.items", { returnObjects: true })}
            />

            <JourneyItem
              icon={<i className="fa-solid fa-user-graduate" aria-hidden="true"></i>}
              date={t("journey.edu2.date")}
              title={t("journey.edu2.title")}
              subtitle={t("journey.edu2.subtitle")}
              items={t("journey.edu2.items", { returnObjects: true })}
            />

            <JourneyItem
              icon={<i className="fa-solid fa-user-graduate" aria-hidden="true"></i>}
              date={t("journey.edu3.date")}
              title={t("journey.edu3.title")}
              subtitle={t("journey.edu3.subtitle")}
              items={t("journey.edu3.items", { returnObjects: true })}
            />
          </div>
        </div>

        {/* Experience Column */}
        <div className="education-column">
          <h3 className="title">{t("journey.experience")}</h3>
          <div className="education-box">

            <JourneyItem
              icon={<i className="fa-solid fa-briefcase"></i>}
              date={t("journey.exp3.date")}
              title={t("journey.exp3.title")}
              subtitle={t("journey.exp3.subtitle")}
              items={t("journey.exp3.items", { returnObjects: true })}
            />

            <JourneyItem
              icon={<i className="fa-solid fa-briefcase"></i>}
              date={t("journey.exp1.date")}
              title={t("journey.exp1.title")}
              subtitle={t("journey.exp1.subtitle")}
              items={t("journey.exp1.items", { returnObjects: true })}
            />

            <JourneyItem
              icon={<i className="fa-solid fa-briefcase"></i>}
              date={t("journey.exp2.date")}
              title={t("journey.exp2.title")}
              subtitle={t("journey.exp2.subtitle")}
              items={t("journey.exp2.items", { returnObjects: true })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
