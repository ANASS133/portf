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

function App() {
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
    </div>
  );
}

export default App;
