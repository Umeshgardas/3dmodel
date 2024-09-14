// src/App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Configurator from "./components/Configurator";
import Footer from "./components/Footer";
import "./styles/main.scss";
import ChairComponent from "./components/ChairComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <Configurator />
      <ChairComponent />
      <Footer />
    </div>
  );
}

export default App;
