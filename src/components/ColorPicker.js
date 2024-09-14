// ColorPicker.js
import React, { useState } from "react";

const ColorPicker = ({ onColorChange }) => {
  const [color, setColor] = useState("#ffffff");

  const handleChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <input
      type="color"
      value={color}
      onChange={handleChange}
      style={{ margin: "10px" }}
    />
  );
};

export default ColorPicker;
