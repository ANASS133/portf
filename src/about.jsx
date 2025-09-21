import React, { useEffect } from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const options = {
      threshold: 0.3, 
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('about-img')) {
            entry.target.classList.add('animate-left');
          } else if (entry.target.classList.contains('about-text')) {
            entry.target.classList.add('animate-right');
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll('.about-img, .about-text');

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="section-title">
        {t("about.title")} <span>{t("about.titleSpan")}</span>
      </h2>

      <div className="about-content">
        <div className="about-img" data-aos="fade-right">
          <div className="circle-ring"></div>
          <img src="/081b29.png" alt="About" />
        </div>

        <div className="about-text" data-aos="fade-left">
          <h3>{t("about.role")}</h3>
          <p>{t("about.text")}</p>

          <a href="#more" className="btn">{t("about.readMore")}</a>
        </div>
      </div>
    </section>
  );
};

export default About;