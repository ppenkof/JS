function newHouse(params) {
    let flowerType = params[0];
    let flowerNumber = Number(params[1]);
    let budged = Number(params[2]);
    let totalPrice = 0;

    if (flowerNumber >= 80) {
        if (flowerType === "Roses") { totalPrice = flowerNumber * 5 * 0.9; }
        if (flowerType === "Tulips") { totalPrice = flowerNumber * 2.80 * 0.85; }
        if (flowerType === "Gladiolus") { totalPrice = flowerNumber * 2.50; }
    } else {
        if (flowerType === "Roses") { totalPrice = flowerNumber * 5; }
        if (flowerType === "Tulips") { totalPrice = flowerNumber * 2.80; }
        if (flowerType === "Gladiolus") { totalPrice = flowerNumber * 2.50 * 1.20; }
    }
    if (flowerNumber >= 90) {
        if (flowerType === "Dahlias") { totalPrice = flowerNumber * 3.80 * 0.85; }
    } else {
        if (flowerType === "Dahlias") { totalPrice = flowerNumber * 3.80; }
    }
    if (flowerNumber >= 120) {
        if (flowerType === "Narcissus") { totalPrice = flowerNumber * 3.00; }
    } else {
        if (flowerType === "Narcissus") { totalPrice = flowerNumber * 3.00 * 1.15; }
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