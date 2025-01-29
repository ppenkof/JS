function transportPrice(params) {
    let distance = Number(params[0]);
    let dayNight = params[1];
    let taxiPrice;
    let price;

    if (dayNight === "day") {
        taxiPrice = 0.70 + (distance * 0.79);
    } else {
        taxiPrice = 0.70 + (distance * 0.90);
    }

    if (distance >= 100) {
        price = distance * 0.06;
    } else if (distance >= 20) {
        price = distance * 0.09;
    }
    if (taxiPrice > price) {
        console.log(price.toFixed(2));
    } else {
        console.log(taxiPrice.toFixed(2));
    }
}
transportPrice(["5", "day"])