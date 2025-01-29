function theLift(arr) {
    let people = Number(arr.shift());
    let freeSpace = arr.shift().split(' ').map(x => x = Number(x));
    for (let i = 0; i < freeSpace.length; i++) {

        let elementValue = 4 - freeSpace[i];
        if (people <= elementValue) {
            freeSpace[i] += people;
            people = 0;
            break;
        } else {
            freeSpace[i] += elementValue;
            people -= elementValue;
        }
    }

    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);

    } else if (people === 0 && freeSpace.some(wagon => wagon < 4)) {
        console.log("The lift has empty spots!");
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