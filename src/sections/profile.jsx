import React, { useEffect, useState } from 'react';
import '../app.css';

const Profile = () => {
  const [opacity, setOpacity] = useState(1); // Initial opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0; // Where the fade starts
      const fadeEnd = 300; // Where the fade ends completely

      // Calculate opacity based on scroll
      const newOpacity = 1 - Math.min(scrollY / (fadeEnd - fadeStart), 1);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id='profile'
      className='profile'
      style={{
        opacity: opacity,
        transition: 'opacity 0.3s ease-out',
      }}>
      <img
        className='profileimg'
        src='profile.png'
        alt='Profile'
      />
      <div className='profiletext'>
        <h1>Hello, It's</h1>
        <div className='name'>
          {['H', 'A', 'S', 'H', 'I', 'M'].map((letter, index) => (
            <span
              key={index}
              style={{ '--i': index + 1 }}>
              {letter}
            </span>
          ))}
        </div>
        <div className='social'>
          <a
            href='https://github.com/HashimCodeDev'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='github.svg'
              alt='GitHub'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/hashimmohamedta/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              src='linkedin.svg'
              alt='LinkedIn'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
