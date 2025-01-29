function moon(params) {
    let averageSpeed = Number(params[0]);
    let consumption = Number(params[1]);
    let distance = 2*384400;
    let stay = 3;
    let hours=Math.ceil(stay+(distance/averageSpeed));
    let fuelQuantity=distance*consumption/100;

    console.log(hours);
    console.log(fuelQuantity);
}
moon(["15000", "4"])