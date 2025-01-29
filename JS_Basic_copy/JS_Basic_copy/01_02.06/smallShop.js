function smallShop(params) {
    let product = params[0];
    let city = params[1];
    let quantity = Number(params[2]);
    let total = 0;

    switch (product) {
        case 'coffee':
            if (city === 'Sofia') {
                total = quantity * 0.50;
            } else if (city === 'Plovdiv'){
                total = quantity * 0.50;
            } else{
                total = quantity * 0.45;
            }
            break;
        case 'water':
            if (city === 'Sofia') {
                total = quantity * 0.80;
            } else if (city === 'Plovdiv') {
                total = quantity * 0.70;
            } else  {
                total = quantity * 0.70;
            }
            break;
        case 'beer':
            if (city === 'Sofia') {
                total = quantity * 1.20;
            } else if (city === 'Plovdiv') {
                total = quantity * 1.15;
            } else {
                total = quantity * 1.10;
            }
            break;
        case 'sweets':
            if (city === 'Sofia') {
                total = quantity * 1.45;
            } else if (city === 'Plovdiv') {
                total = quantity * 1.30;
            } else {
                total = quantity * 1.35;
            }
            break;
        default:
            if (city === 'Sofia') {
                total = quantity * 1.60;
            } else if (city === 'Plovdiv') {
                total = quantity * 1.50;
            } else {
                total = quantity * 1.55;
            }
            break;
    }
    console.log(`${total}`);
}
smallShop(["sweets", "Sofia", "2.23"])