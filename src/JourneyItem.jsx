import React from 'react';

const JourneyItem = ({ date, title, subtitle, items, icon }) => (
  <div className="education-content">
    <div className="content">
      <div className="year">
        {icon} {date}
      </div>
      <h3>{title}</h3>
      <p><strong>{subtitle}</strong></p>
      <ul>
        {items.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default JourneyItem;
