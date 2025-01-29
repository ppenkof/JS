function memoryGame(arr) {
    let gameArr = arr.shift().split(' ');
    let indexArr = arr.shift();
    let increment = 1;
    while (indexArr !== 'end') {

        let currIndex = indexArr.split(' ').map(x => x = Number(x))
        let [index1, index2] = currIndex;
        if (index1 < 0 || index2 < 0 || index1 >= gameArr.length || index2 >= gameArr.length || index1===index2) {
            let midpoint = Math.floor(gameArr.length / 2);
            let addElement = `-${increment}a`;
            gameArr.splice(midpoint, 0, addElement, addElement);
            console.log("Invalid input! Adding additional elements to the board");
        } else {

            if (gameArr[index1] === gameArr[index2]) {
                console.log(`Congrats! You have found matching elements - ${gameArr[index1]}!`);
                if (index1 < index2) {
                    gameArr.splice(index2, 1);
                    gameArr.splice(index1, 1);
                } else {
                    gameArr.splice(index1, 1);
                    gameArr.splice(index2, 1);
                }

                if (gameArr.length < 1) {
                    break;
                }

            } else {
                console.log("Try again!");
            }
        }

        indexArr = arr.shift();
        increment++;
    }

    if (gameArr.length < 1) {
        console.log(`You have won in ${increment} turns!`);
    } else {
        console.log(`Sorry you lose :( \n${gameArr.join(' ')}`);
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"])

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)

memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])