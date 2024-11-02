// src/components/SketchInputs.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import ColorInput from "./ColorInput";

const SketchInputs = ({ params, onParamChange }) => {
    return (
        <Card className="sketch-inputs">
            <CardContent>
                <h3>Sketch Inputs</h3>
                <Typography gutterBottom>Circle Radius</Typography>

                <Slider
                    value={params.radius}
                    min={0}
                    max={100}
                    aria-labelledby="input-slider-radius"
                    valueLabelDisplay="auto"
                    onChange={(e) => onParamChange("radius", e.target.value)}
                />

                <Typography gutterBottom>Circle Color</Typography>

                <ColorInput
                    defaultColor={params.circleColor}
                    onChange={(newColor) => onParamChange("circleColor", newColor)}
                />
            </CardContent>
        </Card>
    );
};

export default SketchInputs;
