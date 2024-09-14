// src/components/ProductConfigurator.js
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import "./ProductConfigurator.scss";

const Model = ({ color }) => {
  const { scene } = useGLTF("/path/to/model.glb");

  scene.traverse((child) => {
    if (child.isMesh) child.material.color.set(color);
  });

  return <primitive object={scene} scale={1.5} />;
};

const ProductConfigurator = () => {
  const [color, setColor] = useState("#ffffff");
  const [environment, setEnvironment] = useState("city");

  return (
    <section className="configurator">
      <h2>Configure Your Product</h2>
      <div className="controls">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <select
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
        >
          <option value="city">City</option>
          <option value="forest">Forest</option>
        </select>
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment={environment}>
            <Model color={color} />
          </Stage>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default ProductConfigurator;
