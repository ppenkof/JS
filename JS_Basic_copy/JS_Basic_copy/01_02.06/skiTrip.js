function skiTrip(params) {
    let dayNumber = Number(params[0]);
    let typeAccomodation = params[1];
    let evaluation = params[2];
    let price = 0;
    let discount = 0;
    let evalDiscount = 0;

    switch (typeAccomodation) {
        case "room for one person":
            price = 18;
            break;
        case "apartment":
            price = 25;
            if (dayNumber < 10) {
                discount = 0.3;
            } else if (dayNumber < 15) {
                discount = 0.35;
            } else {
                discount = 0.50;
            }
            break;
        case "president apartment":
            price = 35;
            if (dayNumber < 10) {
                discount = 0.1;
            } else if (dayNumber < 15) {
                discount = 0.15;
            } else {
                discount = 0.20;
            }
            break;
    }
    if (evaluation === "positive") {
        evalDiscount = 0.25;
    } else {
        evalDiscount = -0.1;
    }

    let total = price * (dayNumber - 1) * (1 - discount) * (1 + evalDiscount);
    console.log(total.toFixed(2));
}
skiTrip(["12", "room for one person", "positive"])