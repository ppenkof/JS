function newHouse(params) {
    let flowerType = params[0];
    let flowerNumber = Number(params[1]);
    let budged = Number(params[2]);
    let totalPrice = 0;

    switch (flowerType) {
        case "Roses":
            if (flowerNumber >= 80) {
                totalPrice = flowerNumber * 5 * 0.9;
            } else {
                totalPrice = flowerNumber * 5;
            }
            break;
        case "Dahlias":
            if (flowerNumber >= 90) {
                totalPrice = flowerNumber * 3.80 * 0.85;
            } else {
                totalPrice = flowerNumber * 3.80;
            }
            break;
        case "Tulips":
            if (flowerNumber >= 80) {
                totalPrice = flowerNumber * 2.80 * 0.85;
            } else {
                totalPrice = flowerNumber * 2.80;
            }
            break;
        case "Narcissus":
            if (flowerNumber >= 120) {
                totalPrice = flowerNumber * 3.00;
            } else {
                totalPrice = flowerNumber * 3.00 * 1.15;
            }
            break;
        case "Gladiolus":
            if (flowerNumber >= 80) {
                totalPrice = flowerNumber * 2.50;
            } else {
                totalPrice = flowerNumber * 2.50 * 1.20;
            }
            break;
    }

    if (budged >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowerNumber} ${flowerType} and ${(budged - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budged).toFixed(2)} leva more.`);
    }
}
newHouse(["Tulips",

    "88",

    "260"])