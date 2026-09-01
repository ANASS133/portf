import React from 'react';

export default function SectionHeader({ number, label, title, subtitle }) {
  return (
    <header className="section-header">
      <span className="section-header-eyebrow">{number} / {label}</span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <i aria-hidden="true" />
    </header>
  );
}
