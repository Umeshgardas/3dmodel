import React, { useState } from "react";
import "../styles/components/ChairComponent.scss";

const ChairComponent = () => {
  const [legColor, setLegColor] = useState("#d3b6a6"); // Default leg color
  const [fabricColor, setFabricColor] = useState("#00aaff"); // Default fabric color

  const handleLegColorChange = (color) => {
    setLegColor(color);
  };

  const handleFabricColorChange = (color) => {
    setFabricColor(color);
  };

  return (
    <div className="chair-container">
      <div className="left-section">
        <div className="chair-view">
          <div className="chair">
            <div className="chair-image-container">
              <img className="chair-image" src="/Blue.png" alt="Oscar chair" />
              <div
                className="leg-overlay"
                style={{ backgroundColor: legColor }}
              ></div>
              <div
                className="fabric-overlay"
                style={{ backgroundColor: fabricColor }}
              ></div>
            </div>
          </div>
          <div className="view-options">
            <button className="view-ar">View in AR</button>
            <div className="carousel">
              <button>360°</button>
              <button>3D</button>
              <button>Side</button>
            </div>
          </div>
        </div>
      </div>

      <div className="right-section">
        <h1>Oscar chair</h1>
        <div className="options">
          <div className="option-group">
            <h3>Leg Color</h3>
            <div className="options-legs">
              {[
                "#d3b6a6",
                "#8b5e3c",
                "#c2a8a4",
                "#6b4c41",
                "#3f2a1e",
                "#a17a6b",
                "#7d5a50",
              ].map((color) => (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className={legColor === color ? "active" : ""}
                  onClick={() => handleLegColorChange(color)}
                ></button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <h3>Fabric Color</h3>
            <div className="options-fabric">
              {[
                "#00aaff",
                "#8b4513",
                "#d4af37",
                "#b22222",
                "#ff6347",
                "#4682b4",
                "#32cd32",
              ].map((color) => (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className={fabricColor === color ? "active" : ""}
                  onClick={() => handleFabricColorChange(color)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="description">
          <p>✔ Hyper realistic</p>
          <p>✔ Dynamic visuals</p>
          <p>✔ Immersive modules</p>
          <p>✔ Mobile responsive</p>
        </div>
      </div>
    </div>
  );
};

export default ChairComponent;
