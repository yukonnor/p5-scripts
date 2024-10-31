const redCircles = (p) => {
    p.setup = () => {
        p.createCanvas(400, 400);
        p.background(200);
    };

    p.draw = () => {
        // Access the radius parameter dynamically, default to 50
        const radius = p.params?.radius || 50;
        p.fill(255, 0, 0);

        p.mouseIsPressed && p.ellipse(p.mouseX, p.mouseY, radius, radius);
    };
};

export default redCircles;
