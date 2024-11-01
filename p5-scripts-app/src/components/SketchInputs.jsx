// src/components/SketchInputs.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const SketchInputs = ({ params, onParamChange }) => {
    return (
        <Card className="sketch-inputs">
            <CardContent>
                <h3>Sketch Inputs</h3>
                <Typography id="input-slider-radius" gutterBottom>
                    Circle Radius
                </Typography>

                <Slider
                    defaultValue={params.radius}
                    min={0}
                    max={100}
                    aria-labelledby="input-slider-radius"
                    valueLabelDisplay="auto"
                    onChange={(e) => onParamChange("radius", e.target.value)}
                />

                <Typography id="input-slider-background" gutterBottom>
                    Background Color
                </Typography>

                <Slider
                    defaultValue={params.background}
                    min={0}
                    max={255}
                    aria-labelledby="input-slider-background"
                    valueLabelDisplay="auto"
                    onChange={(e) => onParamChange("background", e.target.value)}
                />
            </CardContent>
        </Card>
    );
};

export default SketchInputs;
