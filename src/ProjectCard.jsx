import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
};

function ProjectCard({ project, direction = 'left' }) {
  if (!project) return null;

  return (
    <motion.div
      className={`project-card ${direction}`}
      initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      variants={cardVariants}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <img src={project.image || "default.webp"} alt={project.title} className="card-image" />
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list">
          {project.tech && project.tech.map((t, idx) => <li key={idx}>{t}</li>)}
        </ul>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="visit-btn">
          Visit →
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;