import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 2.5 seconds (gives time for all animations to finish)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2800);

    // Completely unmount/notify parent after the fade out transition is done
    const unmountTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3600); // 2800 + 800ms fade duration

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="splash-logo">
          <svg className="splash-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 60">
            <circle cx="40" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="6" />
            <circle cx="80" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="6" />
            <line x1="10" y1="30" x2="110" y2="30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="splash-name">CROSSLINE</h1>
        <div className="splash-tagline">Premium Optical Lens Frames</div>
      </div>
    </div>
  );
};

export default SplashScreen;
