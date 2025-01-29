function fuelTankPart2(params) {
    let fuelType = params[0];
    let fuelQuantity = Number(params[1]);
    let discountCard = params[2];
    let totalAmount = 0;

    switch (fuelType) {
        case "Diesel":
            if (discountCard === "Yes") {
                totalAmount = fuelQuantity * (2.33 - 0.12);
            } else {
                totalAmount = fuelQuantity * 2.33;
            }
            break;
        case "Gasoline":
            if (discountCard === "Yes") {
                totalAmount = fuelQuantity * (2.22 - 0.18);
            } else {
                totalAmount = fuelQuantity * 2.22;
            }
            break;
        case "Gas":
            if (discountCard === "Yes") {
                totalAmount = fuelQuantity * (0.93 - 0.08);
            } else {
                totalAmount = fuelQuantity * 0.93;
            }
            break;
    }

    if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        totalAmount = totalAmount * 0.92;
    } else if (fuelQuantity < 20) {
        totalAmount;
    } else {
        totalAmount = totalAmount * 0.9
    }
    console.log(`${totalAmount.toFixed(2)} lv.`);

}
fuelTankPart2(["Gas", "30", "Yes"])
fuelTankPart2(["Gasoline", "25", "No"])
fuelTankPart2(["Diesel", "19", "No"])