function puppyCare(params) {
    let foodQuantity = Number(params[0]);
    foodQuantity = foodQuantity * 1000;
    let index = 1;
    let foodConsumptiomPerDay = Number(params[index]);
    let adoptedPuppy = '';
    let sumOfFood = 0;

    while (adoptedPuppy != "Adopted") {
        sumOfFood += foodConsumptiomPerDay;
        index++;
        foodConsumptiomPerDay = Number(params[index]);
        adoptedPuppy = params[index];
    }
    if (foodQuantity >= sumOfFood) {
        console.log(`Food is enough! Leftovers: ${foodQuantity - sumOfFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${sumOfFood - foodQuantity} grams more.`);
    }

}
puppyCare(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])