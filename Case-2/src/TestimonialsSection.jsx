import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    text: "As a freelancer, my taxes can be a bit complicated. This website was amazing at handling all my self-employment income and expenses. It felt secure, and I got my maximum refund in record time. Highly recommend!",
    name: "Mrs. Jyoti Shukla",
    title: "(Tech Genius)",
    icon: "./src/assets/video.png" 
  },
  {
    text: "I used to dread tax season, but Save Your Tax made it so easy! The clear instructions and step-by-step process took all the stress out of filing. Plus, their customer support was fantastic when I had a quick question.",
    name: "Mrs. Jyoti Shukla",
    title: "(Tech Genius)",
    icon: "./src/assets/video.png" 
  },
  {
    text: "I used to dread tax season, but Save Your Tax made it so easy! The clear instructions and step-by-step process took all the stress out of filing. Plus, their customer support was fantastic when I had a quick question.",
    name: "Mrs. Jyoti Shukla",
    title: "(Tech Genius)",
    icon: "./src/assets/video.png" 
  },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <h2>Read What Others Are Saying About Us</h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">
              <img src={testimonial.icon} alt="Quote icon" />
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
