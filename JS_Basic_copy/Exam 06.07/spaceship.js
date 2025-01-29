function spaceship(params) {
    let widthShip = Number(params[0]);
    let lengthShip = Number(params[1]);
    let heigthShip = Number(params[2]);
    let averageHeigthPeople = Number(params[3]);
    let volumeShip = widthShip * lengthShip * heigthShip;
    let astronautVolume = 2 * 2 * (averageHeigthPeople + 0.40);
    let numberAustronaut = volumeShip / astronautVolume;

    if (numberAustronaut > 10) {
        console.log("The spacecraft is too big.");
    } else if (numberAustronaut >= 3) {
        console.log(`The spacecraft holds ${Math.floor(numberAustronaut)} astronauts.`);
    } else {
        console.log("The spacecraft is too small.");
    }

}
spaceship(["3",
"3",
"4",
"1.68"])