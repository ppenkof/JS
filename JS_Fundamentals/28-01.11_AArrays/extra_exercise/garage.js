// function garageTrack(arr) {
//     let garages = {};
//     for (let carType of arr) {
//         let properties = carType.split(', ');
//         let [garageNum, name] = properties[0].split(' - ');
//         //let colorName=name.split(': ').shift();
//         //let garage = 'Garage';
//         let color = properties[0].split(': ').pop();
//         let fuelType = properties[1].split(': ').pop();
//         let manufacture = '';
//         if (properties.length > 2) {
//             manufacture = properties[1].split(': ').pop();
//         }
//         //if (!(garageNum in garages)) {
//         garages[garageNum] = {};
//         //if (!(color in garages[garageNum])) {
//         garages[garageNum] = [color];
//         //if (!(fuelType in garages[garageNum])) {
//         if (fuelType === 'petrol' || fuelType === 'diesel') {
//             garages[garageNum].push(fuelType);
//         } else {
//             if (manufacture.length > 0) {
//                 garages[garageNum].push(manufacture);
//             }
//         }
//         //}
//         //}
//         //}

//         console.log(manufacture);
//     }
// }
// garageTrack(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
function garageTrack(arr) {
    let garages = new Map;
    for (let carType of arr) {
        let properties = carType.split(', ');
        let [garageNum, name] = properties[0].split(' - ');
        //let colorName=name.split(': ').shift();
        //let garage = 'Garage';
        let color = properties[0].split(': ').pop();
        let fuelType = properties[1].split(': ').pop();
        let manufacture = '';
        if (properties.length > 2) {
            manufacture = properties[1].split(': ').pop();
        }
        if (!(garages.has(garageNum))) {
            
            garages.set(garageNum,color,fuelType);

            //if (!(garages.has(color))) {
                //garages.set(color);
                //if (!(fuelType in garages[garageNum])) {
                // if (fuelType === 'petrol' || fuelType === 'diesel') {
                garages.set(garageNum,fuelType);
                // } else {
                if (manufacture.length > 0) {
                    garages.set(garageNum,manufacture);
                }
            //}
        }
        //}
        //}

        console.log(manufacture);
    }
}
garageTrack(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])