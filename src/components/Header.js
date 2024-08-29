import React, { useState } from 'react';
import '../css/Header.css'; // Import the regular CSS file

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'openMenu' : ''}`}>
      <div className="logo">Sakura Shop</div>
      <div className={`menuIcon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'showMenu' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
