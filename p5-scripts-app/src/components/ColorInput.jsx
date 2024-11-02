import React from "react";
import { MuiColorInput } from "mui-color-input";

const ColorInput = ({ defaultColor, onChange }) => {
    const [color, setColor] = React.useState(defaultColor ?? "#ffffff");

    const handleChange = (color) => {
        setColor(color);
        onChange(color);
    };

    return <MuiColorInput value={color} onChange={handleChange} />;
};

export default ColorInput;
