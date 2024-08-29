import React from 'react';
import '../css/hero.css'; // Import the styles

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="heroContent">
        <h1>Sakura-Shop</h1>
        <p>Discover the latest trends and styles for every occasion.</p>
        <a href="#shop" className="heroBtn">Shop Now</a>
      </div>
    </section>
  );
}

export default HeroSection;
