function excursionCalculator(params) {
    let peopleNum = Number(params[0]);
    let season = params[1];
    let overnightStand = 0;
    let addRemoveDiscount = 1;

    switch (season) {
        case 'spring':
            if (peopleNum <= 5) {
                overnightStand = 50;
            } else {
                overnightStand = 48;
            }
            break;
        case 'summer':
            if (peopleNum <= 5) {
                overnightStand = 48.50;
            } else {
                overnightStand = 45;
            }
            addRemoveDiscount = 0.85;
            break;
        case 'autumn':
            if (peopleNum <= 5) {
                overnightStand = 60;
            } else {
                overnightStand = 49.50;
            }
            break;
        case 'winter':
            if (peopleNum <= 5) {
                overnightStand = 86;
            } else {
                overnightStand = 85;
            }
            addRemoveDiscount = 1.08;
            break;
    }

    let totalPrice = peopleNum * overnightStand * addRemoveDiscount;
    console.log(`${totalPrice.toFixed(2)} leva.`);
}
excursionCalculator(["20",
"winter"]);