import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

const cardVariants = { hiddenLeft: { opacity: 0, x: -60 }, hiddenRight: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };

function ProjectCard({ project, direction = 'left' }) {
  const { t } = useTranslation();
  if (!project) return null;
  const architectureNodes = project.architecture.split('→').map((node) => node.trim());
  const moveSpotlight = (event) => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
  };
  return (
    <motion.article className={`project-card ${direction}`} onPointerMove={moveSpotlight} initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'} whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={cardVariants} transition={{ type: 'spring', stiffness: 50, damping: 20 }}>
      {project.image ? <img src={project.image} alt={`${project.title} interface preview`} className="card-image" loading="lazy" /> : <div className="project-placeholder" role="img" aria-label={`Abstract illustration for ${project.title}`}><span className="mock-layer layer-one"></span><span className="mock-layer layer-two"></span><span className="mock-layer layer-three"></span><i className={`fa-solid ${project.icon}`} aria-hidden="true"></i><span className="mock-lock"><i className="fa-solid fa-lock" aria-hidden="true"></i></span></div>}
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list">{project.tech.map((tech, index) => <li key={tech} className={index > 2 ? 'tech-extra' : ''}>{tech}</li>)}{project.tech.length > 3 && <li className="tech-more">+{project.tech.length - 3}</li>}</ul>
        <details className="case-study">
          <summary>{t('projects.details')} <i className="fa-solid fa-chevron-down" aria-hidden="true"></i></summary>
          <div className="case-study-content">
            <h4>{t('projects.problem')}</h4><p>{project.purpose}</p>
            <h4>{t('projects.contribution')}</h4><p>{project.contribution}</p>
            <h4>{t('projects.architecture')}</h4>
            <div className="architecture-flow" aria-label={project.architecture}>{architectureNodes.map((node, index) => <React.Fragment key={node}>{index > 0 && <span className="architecture-arrow" aria-hidden="true"><i></i>→</span>}<code style={{ '--node-index': index }}>{node}</code></React.Fragment>)}</div>
          </div>
        </details>
        {project.liveLink ? <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="visit-btn">{t('projects.visit')} <span aria-hidden="true">→</span></a> : <span className="private-label"><i className="fa-solid fa-lock" aria-hidden="true"></i> {t('projects.private')}</span>}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
