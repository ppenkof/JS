function areaOfFigures(data) {
    let figure = data[0];
    let side1 = Number(data[1]);
    let side2 = Number(data[2]);
    let area;
    if (figure === "square") {
        area = side1 * side1;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        area = side1 * side2;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        area = side1 * side1 * Math.PI;
        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        area = side1 * side2 / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures(["circle", "6"])