import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

const cardVariants = { hiddenLeft: { opacity: 0, x: -60 }, hiddenRight: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };

function ArchitectureFlow({ architecture }) {
  const nodes = architecture.split('→').map((node) => node.trim());
  return <div className="architecture-flow" aria-label={architecture}>{nodes.map((node, index) => <React.Fragment key={node}>{index > 0 && <span className="architecture-arrow" aria-hidden="true"><i></i>→</span>}<code style={{ '--node-index': index }}>{node}</code></React.Fragment>)}</div>;
}

function CaseStudyModal({ project, onClose, t }) {
  const titleId = `case-study-${project.title.replace(/\s+/g, '-').toLowerCase()}`;
  return createPortal(
    <div className="case-study-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <motion.section className="case-study-modal" role="dialog" aria-modal="true" aria-labelledby={titleId} initial={{ opacity: 0, y: 20, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .2 }}>
        <header><div>{project.label && <span className="project-label modal-label">{project.label}</span>}<h3 id={titleId}>{project.title}</h3></div><button type="button" className="case-study-close" onClick={onClose} aria-label={t('credentials.close')}><i className="fa-solid fa-xmark" aria-hidden="true"></i></button></header>
        <div className="case-study-content">
          <h4>{t('projects.problem')}</h4><p>{project.purpose}</p>
          <h4>{t('projects.contribution')}</h4><p>{project.contribution}</p>
          <h4>{t('projects.architecture')}</h4><ArchitectureFlow architecture={project.architecture} />
          {project.features && <><h4>{t('projects.features')}</h4><ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></>}
          {project.gallery && <><h4>{t('projects.gallery')}</h4><div className="project-gallery">{project.gallery.map((image) => <figure key={image.src}><img src={image.src} alt={`${project.title}: ${t(`projects.galleryLabels.${image.key}`)}`} loading="lazy" /><figcaption>{t(`projects.galleryLabels.${image.key}`)}</figcaption></figure>)}</div></>}
          {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="case-study-github"><i className="fa-brands fa-github" aria-hidden="true"></i>{t('projects.github')}</a>}
        </div>
      </motion.section>
    </div>, document.body
  );
}

function ProjectCard({ project, direction = 'left' }) {
  const { t } = useTranslation();
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  useEffect(() => {
    if (!caseStudyOpen) return undefined;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setCaseStudyOpen(false); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', closeOnEscape); };
  }, [caseStudyOpen]);

  if (!project) return null;
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
        {project.label && <span className="project-label">{project.label}</span>}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list">{project.tech.map((tech, index) => <li key={tech} className={index > 2 ? 'tech-extra' : ''}>{tech}</li>)}{project.tech.length > 3 && <li className="tech-more">+{project.tech.length - 3}</li>}</ul>
        <div className="project-actions">
          <button type="button" className="case-study-trigger" onClick={() => setCaseStudyOpen(true)}>{t('projects.details')} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>
          {project.liveLink ? <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="visit-btn">{t('projects.visit')} <span aria-hidden="true">→</span></a> : project.githubLink ? <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="visit-btn"><i className="fa-brands fa-github" aria-hidden="true"></i> {t('projects.github')}</a> : <span className="private-label"><i className="fa-solid fa-lock" aria-hidden="true"></i> {t('projects.private')}</span>}
        </div>
      </div>
      {caseStudyOpen && <CaseStudyModal project={project} onClose={() => setCaseStudyOpen(false)} t={t} />}
    </motion.article>
  );
}

export default ProjectCard;
