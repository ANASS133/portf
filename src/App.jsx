import About from './about';
import Home from './header';
import Journey from './journey';
import './nav.css';
import Header from './navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Skills2 from './skills2';
import ContactForm from './contact';
import ProjectList from './ProjectList';
import Credentials from './Credentials';
import RecruiterHighlights from './RecruiterHighlights';
import PortfolioEffects from './PortfolioEffects';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function App() {
  const { t } = useTranslation();
  const [mobileActionsVisible, setMobileActionsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return undefined;
    const observer = new IntersectionObserver(([entry]) => setMobileActionsVisible(!entry.isIntersecting), { threshold: 0.02 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="app">
      <PortfolioEffects />
      <Header />
      <Home />
      <RecruiterHighlights />
      <About />
      <Journey />
      <Skills2 />
      <ProjectList />
      <Credentials />
      <ContactForm />
      <nav className={`mobile-action-bar ${mobileActionsVisible ? 'is-visible' : ''}`} aria-label="Quick actions" aria-hidden={!mobileActionsVisible}>
        <a href="#contact"><i className="fa-solid fa-envelope" aria-hidden="true"></i><span>{t('header.contact')}</span></a>
        <a href={`${process.env.PUBLIC_URL}/weg.pdf`} download><i className="fa-solid fa-download" aria-hidden="true"></i><span>CV</span></a>
        <a href="https://www.linkedin.com/in/anass-sibbi-75778b347/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i><span>LinkedIn</span></a>
      </nav>
    </div>
  );
}

export default App;
