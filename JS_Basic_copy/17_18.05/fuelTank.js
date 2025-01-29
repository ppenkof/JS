function fuelTank(params) {
    let fuelType = params[0];
    let fuelQuantity = Number(params[1]);

    if (fuelType === "Diesel" || fuelType === "Gasoline" || fuelType === "Gas") {
        //fuelType.toLowerCase()
        if (fuelQuantity >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`);
        }
    } else {
        console.log('Invalid fuel!');
    }

}
fuelTank(["Diesel","200"])