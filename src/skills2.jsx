import React from 'react';
import './nav.css';
import { useTranslation } from 'react-i18next';

export default function Skills2() {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true });
  const [activeGroup, setActiveGroup] = React.useState(null);

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">{t("skills.my")} <span>{t("skills.titleSpan")}</span></h2>
      <div className="skills-grid">
        {groups.map((group) => (
          <article className={`skill-group ${activeGroup === group.title ? 'is-connected' : ''}`} key={group.title} onPointerEnter={() => setActiveGroup(group.title)} onPointerLeave={() => setActiveGroup(null)}>
            <h3>{group.title}</h3>
            <div className="constellation-lines" aria-hidden="true"><span></span><span></span><span></span></div>
            <ul>{group.items.map((item, index) => <li key={item} style={{ '--skill-index': index }}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
