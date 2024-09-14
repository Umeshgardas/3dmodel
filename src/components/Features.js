// src/components/Features.js
import "../styles/components/Features.scss";
import React from "react";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="content">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Customization</h3>
            <p>Personalize your furniture with a wide range of options.</p>
          </div>
          <div className="feature-item">
            <h3>Realistic Rendering</h3>
            <p>High-quality 3D models for accurate visualization.</p>
          </div>
          <div className="feature-item">
            <h3>Easy Configuration</h3>
            <p>Intuitive controls to modify and view furniture setups.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
