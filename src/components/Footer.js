// Footer.js

import React from 'react';
import '../css/Footer.css'; // Import the styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <h3>Contact Us</h3>
          <p>Email: info@yourstore.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="footerColumn">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div className="footerColumn">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Products</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
