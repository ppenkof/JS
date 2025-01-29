function hotelRoom(params) {
    let month = params[0];
    let overnightStaysNum = Number(params[1]);
    let discount = 0;
    let discountApp = 0;
    let studio = 0;
    let appartment = 0;

    if (month === "May" || month === "October") {
        studio = 50.00;
        appartment = 65.00;
        if (overnightStaysNum > 14) {
            discount = 0.3;
            discountApp = 0.1;
        } else if (overnightStaysNum > 7) {
            discount = 0.05;
        }
    } else if (month === "June" || month === "September") {
        studio = 75.20;
        appartment = 68.70
        if (overnightStaysNum > 14) {
            discount = 0.2;
            discountApp = 0.1;
        }
    } else {
        studio = 76.00;
        appartment = 77.00
        if (overnightStaysNum > 14) {
            discountApp = 0.1;
        }
    }
    studio = overnightStaysNum * (studio * (1 - discount));
    appartment = overnightStaysNum * (appartment * (1 - discountApp));
    console.log(`Apartment: ${appartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["May",

"15"])