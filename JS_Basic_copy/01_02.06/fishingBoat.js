function fishingBoat(params) {
    let budged = Number(params[0]);
    let seasson = params[1];
    let fisherNum = Number(params[2]);
    let boatRent = 0;

    if (seasson === "Spring") { boatRent = 3000; }
    if (seasson === "Summer" || seasson === "Autumn") { boatRent = 4200; }
    if (seasson === "Winter") { boatRent = 2600; }

    if (fisherNum <= 6) {
        boatRent = boatRent * 0.9;
    } else if (fisherNum <= 11) {
        boatRent = boatRent * 0.85;
    } else {
        boatRent = boatRent * 0.75;
    }

    if (seasson !== "Autumn" && fisherNum % 2 == 0) {
        boatRent = boatRent * 0.95;
    } else {
        boatRent;
    }

    if (budged >= boatRent) {
        console.log(`Yes! You have ${(budged - boatRent).toFixed(2)} leva left.`);
    } else { console.log(`Not enough money! You need ${(boatRent - budged).toFixed(2)} leva.`);}
}
fishingBoat(["2000", "Winter", "13"])