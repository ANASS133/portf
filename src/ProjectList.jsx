import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCard.css';
import { useTranslation } from 'react-i18next';

const projectMeta = [
  { image: process.env.PUBLIC_URL + '/image.png', liveLink: 'https://weather-sigma-jet.vercel.app/' },
  { image: process.env.PUBLIC_URL + '/image2.png', liveLink: 'https://moviemood-one.vercel.app/?showAll=true' },
  { icon: 'fa-chart-line' },
  { icon: 'fa-calendar-check' },
  { icon: 'fa-tv' }
];

const ProjectList = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }).map((project, index) => ({ ...project, ...projectMeta[index] }));
  return (
    <section className="projects" id="portfolio">
      <h2 className="section-title">{t('projects.title')} <span>{t('projects.titleSpan')}</span></h2>
      <div className="project-section">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} direction={index % 2 === 0 ? 'left' : 'right'} />)}
      </div>
    </section>
  );
};

export default ProjectList;
