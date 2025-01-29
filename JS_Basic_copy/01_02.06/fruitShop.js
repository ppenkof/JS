function fruitShop(params) {
    let fruit = params[0];
    let dayOfWeek = params[1];
    let quantity = Number(params[2]);
    let total = 0;
    if (dayOfWeek === "Sunday" || dayOfWeek === "Saturday") {
        switch (fruit) {
            case "banana":
                total = quantity * 2.70;
                console.log(`${total.toFixed(2)}`);
                break;
            //(banana / apple / orange / grapefruit / kiwi / pineapple / grapes
            case "apple":
                total = quantity * 1.25;
                console.log(`${total.toFixed(2)}`);
                break;
            case "orange":
                total = quantity * 0.90;
                console.log(`${total.toFixed(2)}`);
                break;
            case "grapefruit":
                total = quantity * 1.60;
                console.log(`${total.toFixed(2)}`);
                break;
            case "kiwi":
                total = quantity * 3.00;
                console.log(`${total.toFixed(2)}`);
                break;
            case "pineapple":
                total = quantity * 5.60;
                console.log(`${total.toFixed(2)}`);
                break;
            case "grapes":
                total = quantity * 4.20;
                console.log(`${total.toFixed(2)}`);
                break;
            default:
                console.log('error');
                break;

        }

    } else if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
        switch (fruit) {
            case "banana":
                total = quantity * 2.50;
                console.log(`${total.toFixed(2)}`);
                break;
            case "apple":
                total = quantity * 1.20;
                console.log(`${total.toFixed(2)}`);
                break;
            case "orange":
                total = quantity * 0.85;
                console.log(`${total.toFixed(2)}`);
                break;
            case "grapefruit":
                total = quantity * 1.45;
                console.log(`${total.toFixed(2)}`);
                break;
            case "kiwi":
                total = quantity * 2.70;
                console.log(`${total.toFixed(2)}`);
                break;
            case "pineapple":
                total = quantity * 5.50;
                console.log(`${total.toFixed(2)}`);
                break;
            case "grapes":
                total = quantity * 3.85;
                console.log(`${total.toFixed(2)}`);
                break;
            default:
                console.log('error');
                break;

        }
        //console.log(`${total.toFixed(2)}`);
    } else {
        console.log('error');
    }

}
fruitShop(["grapefruit", "Saturday", "1.25"]) //grapefruit
//Saturday
//1.25