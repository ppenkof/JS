function garageTrack(arr) {
    let garages = {};
    let count = 1;
    let carsArr = [];
    for (let carType of arr) {
        let car = 'car-' + count;
        let properties = carType.split(', ');
        let [garageNum, name] = properties[0].split(' - ');
        let fuelType = '';
        let manufacture = '';
        name = name.split(': ');
        let color = '';//properties[0].split(': ').shift();

        if (name[0] === 'color') {
            color = properties[0].split(': ').pop();
            fuelType = properties[1].split(': ').shift();
        } else if (name[0] === 'fuel type') {
            fuelType = name[1];
        }

        if (fuelType === 'fuel type') {
            fuelType = properties[1].split(': ').pop();
        } else if (fuelType === 'manufacture') {
            manufacture = properties[1].split(': ').pop();
        }

        if (properties.length > 2) {
            manufacture = properties[2].split(': ').pop();
        }


        // if (!(garageNum in garages)) {
        //     garages[garageNum] = {};
        // }
        // if (!(count in garages[garageNum])) {
        //     garages[garageNum][car] = {};
        // }
        // if (!(color in garages[garageNum]) && color!=='') {
        //     garages[garageNum][car].color = color;
        // }
        // if (fuelType === 'petrol' || fuelType === 'diesel') {
        //     garages[garageNum][car].fuelType = fuelType;
        // }
        // if (manufacture.length > 0) {
        //     garages[garageNum][car].manufacture = manufacture;
        // }
        //************************
        if (!(garageNum in garages)) {
            garages[garageNum] = {};
        }

        if (!(color in garages[garageNum]) && color !== '') {
            garages[garageNum][color] = {};
        }

        if (fuelType === 'petrol' || fuelType === 'diesel') {
            garages[garageNum][color] = fuelType;
        }

        if (manufacture.length > 0) {
            if ((fuelType === 'petrol' || fuelType === 'diesel') && color !== '') {
                garages[garageNum][color] = { fuelType, manufacture };
            } else {
                garages[garageNum][color] = manufacture;
            }
        }

        count++;
    }

    let entries = Object.entries(garages);
    for (const [garage, cars] of entries) {
        console.log(`Garage № ${garage}:`);
        let carEntries = Object.entries(cars);
        let print = '';
        for (let [carType, item] of carEntries) {
            let pattern = /[A-Z]/g;
            let match = pattern.test(item);
            if (carType !== 'diesel' && carType !== 'petrol' && carType) {// && !match
                print = `--- color-${carType}`;
            }
            if (carType === 'diesel' || carType === 'petrol') {//|| carType === '') {
                print = `--- fuel type-${carType}`;
            }
            if (carType === '') {     
                print = `--- fuel type-${item}`;
            }
            if ((item === 'diesel' || item === 'petrol')){// && carType !== '') {
                print += `, fuel type - ${item}`;
            } else if (match) {
                if (item.manufacture) {
                    print += `, fuel type - ${item.fuelType}`;
                    print += `, manufacture - ${item.manufacture}`;
                } else {
                    print += `, manufacture - ${item}`;
                }
            }
            console.log(print);
        }
        //console.log(print);
    }


}
// garageTrack(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
garageTrack(['1 - color: green, fuel type: petrol', '1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel', '3 - color: dark blue, fuel type: petrol'])