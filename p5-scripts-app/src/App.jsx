import { useState } from "react";
import "./App.css";

import P5Wrapper from "./components/P5Wrapper";
import redCircles from "./sketches/red-circles";

function App() {
  const [radius, setRadius] = useState(50); // Default radius

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  return (
    <>
      <h1>p5.js Script Sandbox</h1>

      <label>
        Circle Radius: {radius}px
        <input
          type="range"
          min="5"
          max="100"
          value={radius}
          onChange={handleRadiusChange}
        />
      </label>

      <P5Wrapper sketch={redCircles} params={{ radius }} />
    </>
  );
}

export default App;
