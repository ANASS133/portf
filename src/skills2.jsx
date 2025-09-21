import React from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';

export default function Skills2() {
  const { t } = useTranslation();

  return (
    <section className="skills" id="skills">
      <center>
        <h2 className="section-title">
          {t("skills.my")} <span>{t("skills.titleSpan")}</span>
        </h2>
      </center>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">
            {t("skills.backend")} <span>{t("skills.titleSpan")}</span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>{t("skills.php")} <span>90%</span></h3>
                <div className="bar"><span style={{ width: '90%' }}></span></div>
              </div>

              <div className="progress">
                <h3>{t("skills.sql")} <span>80%</span></h3>
                <div className="bar"><span style={{ width: '80%' }}></span></div>
              </div>

              <div className="progress">
                <h3>{t("skills.laravel")} <span>90%</span></h3>
                <div className="bar"><span style={{ width: '90%' }}></span></div>
              </div>

              <div className="progress">
                <h3>{t("skills.mongodb")} <span>75%</span></h3>
                <div className="bar"><span style={{ width: '75%' }}></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">
            {t("skills.frontend")} <span>{t("skills.titleSpan")}</span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>{t("skills.html")}<span>95%</span></h3>
                <div className="bar"><span style={{ width: '95%' }}></span></div>
              </div>

              <div className="progress">
                <h3>{t("skills.css")} <span>95%</span></h3>
                <div className="bar"><span style={{ width: '95%' }}></span></div>
              </div>

              <div className="progress">
                <h3>{t("skills.js")}<span>85%</span></h3>
                <div className="bar"><span style={{ width: '85%' }}></span></div>
              </div>

              <div className="progress">
                <h3>{t("skills.react")}<span>90%</span></h3>
                <div className="bar"><span style={{ width: '90%' }}></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
