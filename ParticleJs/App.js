import "./App.css";
import React from "react";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 400,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
            },
          },
        }}
        height="300vh"
        max-width="100vh"
        style={{
          // Here Goes Background Image
          // backgroundImage: "",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}

export default App;
