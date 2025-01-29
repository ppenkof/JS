function needForSpeed3(arrStr) {
    let carCount = arrStr.shift();
    let cars = {};
    for (let i = 0; i < carCount; i++) {
        let items = arrStr.shift();
        let [car, mileage, fuel] = items.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        if (!(car in cars)) {
            cars[car] = { mileage, fuel };
        }
    }

    let cmd = arrStr.shift();
    while (cmd !== 'Stop') {

        let cmdItems = cmd.split(' : ');
        let action = cmdItems.shift();

        if (action === 'Drive') {

            let [car, distance, fuel] = cmdItems;
            fuel = Number(fuel);
            distance = Number(distance);
            if (car in cars) {

                if (cars[car].fuel >= fuel) {
                    cars[car].fuel -= fuel;
                    cars[car].mileage += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    if (cars[car].mileage >= 100000) {
                        delete cars[car];
                        console.log(`Time to sell the ${car}!`);
                    }

                } else {
                    console.log("Not enough fuel to make that ride");
                }
            }

        } else if (action === 'Refuel') {

            let [car, fuel] = cmdItems;
            fuel = Number(fuel);
            if (car in cars) {

                if (cars[car].fuel + fuel > 75) {
                    console.log(`${car} refueled with ${75 - cars[car].fuel} liters`);
                    cars[car].fuel = 75;
                } else {
                    cars[car].fuel += fuel;
                    console.log(`${car} refueled with ${fuel} liters`);
                }
            }

        } else if (action === 'Revert') {

            let [car, kilometers] = cmdItems;
            kilometers = Number(kilometers);
            if (car in cars) {
                if (cars[car].mileage - kilometers < 10000) {
                    cars[car].mileage = 10000;
                } else {
                    cars[car].mileage -= kilometers;
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }

            }

        }

        cmd = arrStr.shift();
    }

    let entries = Object.entries(cars);

    for (let car of entries) {
        console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    }

}
/*needForSpeed3([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])*/

needForSpeed3([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])