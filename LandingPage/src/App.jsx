import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Working from "./components/Working";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="working">
          <Working />
        </div>

        <div id="services">
          <Features />
        </div>

      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default App;
