import React, { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2 className="header-title">Elias's <span className="port-span">Portfolio</span></h2>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className="navbar-wrapper">
          <a href="#home" onClick={() => {scrollToSection('home'); setIsOpen(false);}}>Home</a>
          <a href="#skills" onClick={() => {scrollToSection('skills'); setIsOpen(false);}}>Skills</a>
          <a href="#projects" onClick={() => {scrollToSection('projects'); setIsOpen(false);}}>Projects</a>
          <a href="#education" onClick={() => {scrollToSection('education'); setIsOpen(false);}}>Education</a>
          <a href="#contact" onClick={() => {scrollToSection('contact'); setIsOpen(false);}}>Contact</a>
        </div>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
