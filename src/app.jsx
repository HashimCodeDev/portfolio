import React from 'react';
import './app.css';
import Profile from './sections/profile';

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
      <Profile />
    </div>
  );
};

export default App;
