// src/components/Header.js
import React from "react";
import "../styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Vertical 3D Tech</div>
      <nav>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#configurator">Configurator</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
