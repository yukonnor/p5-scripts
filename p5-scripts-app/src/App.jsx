import { useState } from "react";
import "./App.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import NavBar from "./components/NavBar";
import SketchInputs from "./components/SketchInputs";

import P5Wrapper from "./components/P5Wrapper";
import redCircles from "./sketches/red-circles";

function App() {
    // Store params as an object to easily extend for additional sketches
    const [params, setParams] = useState({
        radius: 50, // Default radius for redCircles sketch
        background: 200,
        circleColor: "#ff0000",
    });

    // Handle changes to any parameter by key
    const handleParamChange = (key, value) => {
        setParams((prevParams) => ({
            ...prevParams,
            [key]: value,
        }));
    };

    return (
        <>
            <NavBar />
            <Box sx={{ flexGrow: 1 }} id="main-sketch-area">
                <h1>Red Circles</h1>

                <Grid container spacing={2}>
                    <Grid size={4}>
                        <SketchInputs params={params} onParamChange={handleParamChange} />
                    </Grid>
                    <Grid size={8}>
                        <P5Wrapper sketch={redCircles} params={params} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default App;
