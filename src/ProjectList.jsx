import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCard.css';


const projects = [
  {
    title: 'Awesome App',
    description: 'This project does amazing things with magic.',
    tech: ['React', 'Node.js', 'CSS'],
    image: 'me.webp',
    liveLink: '#'
  },
  {
    title: 'Cool Tool',
    description: 'A tool that makes your life easier.',
    tech: ['TypeScript', 'GraphQL', 'Tailwind'],
    image: 'me.webp',
    liveLink: '#'
  },
  // Add more as needed...
];

const ProjectList = () => (
  <section className="project-section">
  {projects.map((p, i) => (
    <ProjectCard key={i} project={p} direction={i % 2 === 0 ? 'left' : 'right'} />
  ))}
</section>
);

export default ProjectList;
