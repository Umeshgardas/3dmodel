import React from "react";
import "../styles/components/Testimonials.scss";

const testimonials = [
  { name: "Client A", feedback: "Great 3D services!" },
  { name: "Client B", feedback: "Amazing AR experience!" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.feedback}"</p>
            <h3>- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
