import React, { useEffect, useState } from 'react';
import './about.css';

const About = () => {
  const [opacity, setOpacity] = useState(1); // Initial opacity

  useEffect(() => {
    let scrollY = window.scrollY;

    const handleScroll = () => {
      scrollY = window.scrollY;
      const fadeStart = 0; // Where the fade starts
      const fadeEnd = 300; // Where the fade ends completely

      // Calculate opacity based on scroll
      const newOpacity = 1 - Math.min(scrollY / (fadeEnd - fadeStart), 1);
      setOpacity(newOpacity);
    };

    // Use requestAnimationFrame for smooth scroll handling
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section
        id='about'
        className='about'
        style={{
          opacity: opacity,
          transition: 'opacity 0.3s ease-out', // Smooth transition for opacity
        }}>
        <div className='education'>
          <h3>Education</h3>
          <p>
            B.Tech in Computer Science - Model Engineering College, Thrikkakara
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
