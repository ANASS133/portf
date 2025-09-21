import About from './about';
import Home from './header';
import Journey from './journey';
import './nav.css';
import Header from './navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Skills2 from './skills2';
import ContactForm from './contact';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Journey />
      <Skills2 />      <ProjectList/>
      <ContactForm />
    </div>
  );
}

export default App;
