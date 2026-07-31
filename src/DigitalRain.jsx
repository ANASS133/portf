import React from 'react';

const particles = Array.from({ length: 32 }, (_, index) => ({
  left: 2 + ((index * 17) % 43),
  delay: -((index * 0.73) % 6.5),
  duration: 3.8 + ((index * 13) % 31) / 10,
  height: 18 + ((index * 19) % 54),
  opacity: 0.28 + ((index * 7) % 24) / 100,
  drift: -8 + ((index * 11) % 17),
  blur: index % 5 === 0 ? 1.5 : index % 3 === 0 ? 0.6 : 0
}));

export default function DigitalRain() {
  return (
    <div className="hero-rain" aria-hidden="true">
      {particles.map((particle, index) => (
        <i key={index} style={{
          '--rain-left': `${particle.left}%`,
          '--rain-delay': `${particle.delay}s`,
          '--rain-duration': `${particle.duration}s`,
          '--rain-height': `${particle.height}px`,
          '--rain-opacity': particle.opacity,
          '--rain-drift': `${particle.drift}px`,
          '--rain-blur': `${particle.blur}px`
        }} />
      ))}
    </div>
  );
}
