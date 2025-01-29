function piccolo(arr) {
    let parking = new Set();
    for (let cmd of arr) {
        let [direction, carNumber] = cmd.split(', ');
        if (direction === 'IN') {
            parking.add(carNumber);
        } else {
            parking.delete(carNumber);
        }
    }
    let sorting = Array.from(parking)
        .sort((a, b) => a.localeCompare(b));
    if (sorting.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sorting.join('\n'));
    }
}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])