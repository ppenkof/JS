//((x2-x1)^2 + (y2-y1)^2)^1/2
function pointsValidation(arrCoordinates) {
    let coordX = [arrCoordinates[0], arrCoordinates[2]];
    //let coordX = [Math.abs(arrCoordinates[0]), Math.abs(arrCoordinates[2]), Math.abs(arrCoordinates[0]), Math.abs(arrCoordinates[2])];
    let coordY = [arrCoordinates[1], arrCoordinates[3]];
    //let coordY = [Math.max(arrCoordinates[1], arrCoordinates[3]), Math.min(arrCoordinates[1], arrCoordinates[3])];
    let coordZero = [0, 0];

    function calcDistances(coord1, coord2) {
        let squareX = (coord2[0] - coord1[0]) * (coord2[0] - coord1[0]);
        let squareY = (coord2[1] - coord1[1]) * (coord2[1] - coord1[1]);
        let squareSum = squareX + squareY;
        let result = Math.sqrt(squareSum);
        return result;
    }

    let point1Coord = [arrCoordinates[0], arrCoordinates[1]];
    let point2Coord = [arrCoordinates[2], arrCoordinates[3]];
    
    function match2Dcoordinates(arr1, arr2) {
        let point1Coord = ['{' + arr1[0], ' ' + arr1[1] + '}'];
        let point2Coord = ['{' + arr2[0], ' ' + arr2[1] + '}'];
        let result = [point1Coord, point2Coord];
        return result;
    }

    let differenceX0 = calcDistances(coordX, coordZero);
    let point1 = match2Dcoordinates(point1Coord, coordZero)[0];
    let point1Zero = match2Dcoordinates(point1Coord, coordZero)[1];
    if (differenceX0 % 1 === 0) {
        console.log(`${(point1)} to ${(point1Zero)} is valid`);
    } else {
        console.log(`${(point1)} to ${(point1Zero)} is invalid`);
    }

    let differenceY0 = calcDistances(coordY, coordZero);
    let point2 = match2Dcoordinates(point2Coord, coordZero)[0];
    let point2Zero = match2Dcoordinates(point2Coord, coordZero)[1];
    if (differenceY0 % 1 === 0) {
        console.log(`${(point2)} to ${(point2Zero)} is valid`);
    } else {
        console.log(`${(point2)} to ${(point2Zero)} is invalid`);
    }

    let differenceXY = calcDistances(coordX, coordY);
    let point3 = match2Dcoordinates(point1Coord, point2Coord)[0];
    let point3Zero = match2Dcoordinates(point1Coord, point2Coord)[1];
    if (differenceXY % 1 === 0) {
        console.log(`${(point3)} to ${(point3Zero)} is valid`);
    } else {
        console.log(`${(point3)} to ${(point3Zero)} is invalid`);
    }
}
pointsValidation([2, 1, 1, 1])