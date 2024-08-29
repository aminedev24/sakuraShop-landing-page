// Testimonials.js

import React from 'react';
import '../css/Testimonials.css'; // Import the styles

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Fashion Blogger',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel tellus vel justo cursus gravida non ut nulla.',
      image: "https://picsum.photos/200/300?random=1"
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Style Influencer',
      quote: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod quam vel luctus gravida.',
      image: "https://picsum.photos/200/300?random=3"
    },
    {
      id: 3,
      name: 'Chris Evans',
      position: 'Fashion Designer',
      quote: 'Fusce non diam vel orci aliquet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      image: "https://picsum.photos/200/300?random=2"
    },
  ];

  return (
    <section id='testimonials' className="testimonials">
      <div className="testimonialsContainer">
        <h2>What Our Customers Say</h2>
        <div className="testimonialsList">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonialCard">
              <img src={testimonial.image} alt={testimonial.name} className="customerImage" />
              <p className="quote">{testimonial.quote}</p>
              <div className="authorInfo">
                <p className="name">{testimonial.name}</p>
                <p className="position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
