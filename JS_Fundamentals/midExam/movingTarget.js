function movingTarget(arr) {
    let targetSeq = arr.shift().split(' ').map(x => Number(x));
    let cmd = arr.shift();
    while (cmd !== 'End') {
        let cmdItems=cmd.split(' ');
        let [action, index, item] = cmdItems;
        index=Number(index);
        item=Number(item);

        if (action == 'Shoot') {
            if (index >= 0 && index < targetSeq.length) {
                targetSeq[index] -= item;
                if (targetSeq[index] <= 0) {
                    targetSeq.splice(index, 1);
                }
            }

        } else if (action == 'Add') {

            if (index >= 0 && index < targetSeq.length) {
                targetSeq.splice(index, 0, item);
            } else {
                console.log("Invalid placement!");
            }

        } else if (action == 'Strike') {

            if (index >= 0 && index < targetSeq.length && (index - item) >= 0 && (index + item) < targetSeq.length) {

                targetSeq.splice(index - item, 1 + 2 * item);

            } else {
                console.log("Strike missed!");
            }

        }

        cmd = arr.shift();
    }

    console.log(targetSeq.join('|'));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
/*•	"Shoot {index} {power}"
o	Shoot the target at the index if it exists by reducing its value by the given power (integer value). 
o	Remove the target if it is shot. A target is considered shot when its value reaches 0.
•	"Add {index} {value}"
o	Insert a target with the received value at the received index if it exists. 
o	If not, print: "Invalid placement!"
•	"Strike {index} {radius}"
o	Remove the target at the given index and the ones before and after it depending on the radius.
o	If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
*/
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
