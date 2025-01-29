function cinema(params) {
    let projection = params[0];
    let row = Number(params[1]);
    let colomn = Number(params[2]);
    let price = 0;

    switch (projection) {
        case "Premiere":
            price = row * colomn * 12;
            break;
        case "Normal":
            price = row * colomn * 7.50;
            break;
        case "Discount":
            price = row * colomn * 5.00;
            break;
    }
    console.log(price.toFixed(2));
}
cinema(["Discount", "12", "30"])