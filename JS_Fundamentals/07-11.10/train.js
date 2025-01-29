// •	Add {passengers} – add a wagon to the end with the given number of passengers.
// •	{passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end, print the final state of the train (all the wagons separated by a space).

function train(params) {
    let wagons = params
        .shift()
        .split(' ')
        .map((x) => Number(x));
    let maxCapacity = Number(params.shift());
    for (let cmd of params) {
        let newCmd = cmd.split(' ');
        let action = newCmd.shift();

        if (action === 'Add') {
            let num = Number(newCmd.shift());
            wagons.push(num);
        } else {
            let passangers = Number(action);
            for (let pass of wagons) {
               let newElement = pass + passangers;
                if (maxCapacity >= newElement) {
                    let index = wagons.indexOf(pass);
                    wagons.splice(index, 1, newElement);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)