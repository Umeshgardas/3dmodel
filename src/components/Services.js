import React from "react";
import "../styles/components/Services.scss";

const services = [
  { title: "3D Modeling", description: "High-quality 3D models for products." },
  { title: "AR Solutions", description: "Augmented reality integrations." },
  {
    title: "Interactive Configurators",
    description: "Customizable product configurators.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
