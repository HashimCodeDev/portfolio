import React from 'react';
import './app.css';
import Profile from './sections/profile';
import About from './sections/about';

const App = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className='container'>
      <nav className='navbar'>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className='nav-item'>
            {item.label}
          </a>
        ))}
      </nav>
      <div>
        <Profile />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default App;
