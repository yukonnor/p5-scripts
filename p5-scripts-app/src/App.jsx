import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";

import P5Wrapper from "./components/P5Wrapper";
import redCircles from "./sketches/red-circles";

function App() {
    const [radius, setRadius] = useState(50); // Default radius

    const handleRadiusChange = (e) => {
        setRadius(e.target.value);
    };

    return (
        <>
            <NavBar />
            <h1>p5.js Sandbox</h1>

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
