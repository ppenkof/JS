function taxCalculator(str) {
    let asb = str[0];
    let carCount = asb.split('>>');
    let initialTax = 0;
    let tax = 0;
    for (let car of carCount) {
        let isValid = true;
        let carNum = car.split(' ');
        initialTax = 0;
        let carType = carNum.shift();
        let carAge = Number(carNum.shift());
        let carMileage = Number(carNum.shift());
        if (carType === 'family') {
            initialTax = 50.00;
            initialTax -= carAge * 5;
            let taxInc = Math.floor(carMileage / 3000) * 12;
            initialTax += taxInc;

        } else if (carType === 'heavyDuty') {
            initialTax = 80.00;
            initialTax -= carAge * 8;
            let taxInc = Math.floor(carMileage / 9000) * 14;
            initialTax += taxInc;

        } else if (carType === 'sports') {
            initialTax = 100.00;
            initialTax -= carAge * 9;
            let taxInc = Math.floor(carMileage / 2000) * 18;
            initialTax += taxInc;
        } else {
            console.log('Invalid car type.');
            isValid = false;
        }
        tax += initialTax;
        if (isValid) {
            console.log(`A ${carType} car will pay ${initialTax.toFixed(2)} euros in taxes.`);
        }
    }
    console.log(`The National Revenue Agency will collect ${tax.toFixed(2)} euros in taxes.`);
}
//taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])