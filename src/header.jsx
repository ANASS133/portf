import React, { useEffect } from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  // Add lang class to <html>
  useEffect(() => {
    document.documentElement.classList.remove("lang-en", "lang-de");
    document.documentElement.classList.add(`lang-${i18n.language}`);
  }, [i18n.language]);

  return (
    <section className="home">
      <div className="home-content">
        <h1>{t("home.hi")}</h1>
        <h3 className="typing-text">Full-Stack Developer</h3>
        <p>{t("home.text")}</p>

        <div className="btn-box">
          <a href="#" className="primary-btn">{t("home.hire")}</a>
          <a href="#" className="outline-btn">{t("home.talk")}</a>
        </div>

        <div className="home-sci">
          <a href="https://www.linkedin.com/in/anass-sibbi-75778b347/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://wa.me/+212699771759" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://github.com/ANASS133" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>

        <br />

      <a href="/weg.pdf" download>
  <button className="blob-btn">
    {t("home.download")}
    <span className="blob-btn__inner">
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
      </span>
    </span>
  </button>
</a>

      </div>
    </section>
  );
};

export default Home;
