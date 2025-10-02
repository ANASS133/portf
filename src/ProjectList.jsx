import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCard.css';


const projects = [
  {
    title: 'Weather App',
    description: 'This project enables you to check the weather in your city and other cities around the world.',
    tech: ['React', 'Tailwind', 'CSS'],
    image: process.env.PUBLIC_URL + '/image.png',
    liveLink: 'https://weather-sigma-jet.vercel.app/'
  },
  {
    title: 'Moviemood',
    description: 'This project helps you find movies based on your mood.',
    tech: ['Vite js', 'Tailwind'],
    image: process.env.PUBLIC_URL + '/image2.png',
    liveLink: 'https://moviemood-one.vercel.app/?showAll=true'
  },
];

const ProjectList = () => (
  <section className="project-section">
  {projects.map((p, i) => (
    <ProjectCard key={i} project={p} direction={i % 2 === 0 ? 'left' : 'right'} />
  ))}
</section>
);

export default ProjectList;
