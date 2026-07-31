import React from 'react';

const particles = [
  { left: 6, delay: -1.2, duration: 6.8, height: 42, opacity: 0.42, drift: 2, blur: 0.2 },
  { left: 13, delay: -5.1, duration: 7.5, height: 58, opacity: 0.33, drift: -2, blur: 0.5 },
  { left: 20, delay: -3.4, duration: 6.2, height: 34, opacity: 0.38, drift: 1, blur: 0.2 },
  { left: 27, delay: -6.3, duration: 8.1, height: 64, opacity: 0.3, drift: -1, blur: 0.7 },
  { left: 34, delay: -2.2, duration: 6.9, height: 47, opacity: 0.4, drift: 2, blur: 0.3 },
  { left: 41, delay: -4.7, duration: 7.8, height: 38, opacity: 0.34, drift: -2, blur: 0.4 },
  { left: 47, delay: -.8, duration: 6.5, height: 52, opacity: 0.37, drift: 1, blur: 0.2 },
  { left: 9, delay: -4.1, duration: 8.3, height: 31, opacity: 0.29, drift: -1, blur: 0.5 },
  { left: 17, delay: -1.9, duration: 7.2, height: 49, opacity: 0.35, drift: 2, blur: 0.3 },
  { left: 24, delay: -5.8, duration: 6.6, height: 39, opacity: 0.32, drift: -2, blur: 0.4 },
  { left: 31, delay: -3.1, duration: 7.9, height: 56, opacity: 0.38, drift: 1, blur: 0.2 },
  { left: 38, delay: -6.7, duration: 8.5, height: 44, opacity: 0.3, drift: -1, blur: 0.6 },
  { left: 44, delay: -2.6, duration: 7.3, height: 61, opacity: 0.36, drift: 2, blur: 0.3 }
];

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
