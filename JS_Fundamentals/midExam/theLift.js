function theLift(arr) {
    let people = Number(arr.shift());
    let freeSpace = arr.shift().split(' ').map(x => x = Number(x));
    for (let i = 0; i < freeSpace.length; i++) {

        let element = freeSpace.shift();
        let elementValue = 4 - element;
        if ((people - elementValue) <= 0) {
            elementValue = people;
        }
        element += elementValue;
        freeSpace.push(element);
        people -= elementValue;

    }

    if (people === 0) {
        console.log("The lift has empty spots!");
    } else {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }

    console.log(freeSpace.join(' '));
}
theLift([
    "15",
    "0 0 0 0 0"
])
theLift([
    "20",
    "0 2 0"
   ]
   )