import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCard.css';
import { useTranslation } from 'react-i18next';

const projectMeta = [
  { image: process.env.PUBLIC_URL + '/image.png', liveLink: 'https://weather-sigma-jet.vercel.app/' },
  { image: process.env.PUBLIC_URL + '/image2.png', liveLink: 'https://moviemood-one.vercel.app/?showAll=true' },
  {
    image: process.env.PUBLIC_URL + '/meetings/01-live-meeting.png',
    githubLink: 'https://github.com/ANASS133/meetings',
    gallery: [
      { src: process.env.PUBLIC_URL + '/meetings/01-live-meeting.png', key: 'liveMeeting' },
      { src: process.env.PUBLIC_URL + '/meetings/04-meetings-list.png', key: 'meetingsList' },
      { src: process.env.PUBLIC_URL + '/meetings/05-dashboard.png', key: 'dashboard' },
      { src: process.env.PUBLIC_URL + '/meetings/02-calendar.png', key: 'calendar' },
      { src: process.env.PUBLIC_URL + '/meetings/03-create-meeting.png', key: 'createMeeting' }
    ]
  },
  { icon: 'fa-tv' },
  { icon: 'fa-gears', githubLink: 'https://github.com/ANASS133/pro' }
];

const projectOrder = [2, 3, 1, 0, 4];

const ProjectList = () => {
  const { t } = useTranslation();
  const localizedProjects = t('projects.items', { returnObjects: true });
  const projects = projectOrder.map((index) => ({ ...localizedProjects[index], ...projectMeta[index] }));
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
