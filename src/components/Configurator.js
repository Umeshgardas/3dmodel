import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Environment, useGLTF } from "@react-three/drei";
import "../styles/components/Configurator.scss";

const Model = () => {
  const { scene } = useGLTF("./leather seat.glb");
  return <primitive object={scene} scale={1} />;
};

const Configurator = () => {
  const [preset, setPreset] = useState("city");

  const handlePresetChange = (event) => {
    setPreset(event.target.value);
  };

  return (
    <section className="configurator" id="configurator">
      <div className="content">
        <h2>3D Configurator</h2>
        <div className="controls">
          <label htmlFor="preset-select">Select Environment Preset: </label>
          <select
            id="preset-select"
            value={preset}
            onChange={handlePresetChange}
          >
            <option value="apartment">Apartment</option>
            <option value="city">City</option>
            <option value="dawn">Dawn</option>
            <option value="forest">Forest</option>
            <option value="lobby">Lobby</option>
            <option value="night">Night</option>
            <option value="park">Park</option>
            <option value="studio">Studio</option>
            <option value="sunset">Sunset</option>
            <option value="warehouse">Warehouse</option>
          </select>
        </div>

        <div className="canvas-container">
          <Canvas>
            <Suspense fallback={null}>
              <Stage environment={preset} intensity={0.6}>
                <Model />
              </Stage>
              <OrbitControls enableZoom={true} />
              <Environment preset={preset} background />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Configurator;
