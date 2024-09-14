// src/components/HeroSection.js
import React from "react";
import "../styles/components/HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="content">
        <h1>Visualize Your Space</h1>
        <p>
          Experience furniture like never before with our interactive 3D
          configurator.
        </p>
        <a href="#configurator" className="btn">
          Start Configuring
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
