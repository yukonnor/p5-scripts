const redCircles = (p) => {
    p.setup = () => {
        p.createCanvas(600, 600);
        p.background(p.params?.background || 200);
    };

    p.draw = () => {
        // Access the radius parameter dynamically, default to 50
        const radius = p.params?.radius || 50;
        p.fill(255, 0, 0);

        // draw ellipses if mouse button is pressed
        p.mouseIsPressed && p.ellipse(p.mouseX, p.mouseY, radius, radius);
    };
};

export default redCircles;
