// Newsletter.js

import React, { useState } from 'react';
import '../css/newsletter.css'; // Import the styles

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Add your logic for handling subscription here
    console.log(`Subscribed with email: ${email}`);
    // You can send the email to your server or perform other actions
    // Clear the input field after subscription
    setEmail('');
  };

  return (
    <section id='newsletter' className="newsletter">
      <div className="newsletterContainer">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest trends and promotions.</p>
        <div className="newsletterForm">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
