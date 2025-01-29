function activationKeys(arr) {
    let rawKey = arr.shift();
    let cmd = arr.shift();

    while (cmd !== "Generate") {
        let cmdItem = cmd.split('>>>');
        let action = cmdItem.shift().toLowerCase();
        let changedStr = '';

        if (action === 'slice') {

            let startIndex = Number(cmdItem.shift());
            let endIndex = Number(cmdItem.shift());
            if (startIndex >= 0 && endIndex < rawKey.length) {
                rawKey = rawKey.substring(0, startIndex) + rawKey.substring(endIndex);
                console.log(rawKey);
            }

        } else if (action === 'flip') {
            let [changing, start, stop] = cmdItem;
            start = Number(start);
            stop = Number(stop);
            changing = changing.toLowerCase();
            if (start >= 0 && stop < rawKey.length) {

                if (changing === 'upper' || changing === 'lower') {
                    changing === 'upper' ? changedStr = rawKey.substring(start, stop).toUpperCase() : changedStr = rawKey.substring(start, stop).toLowerCase();
                    rawKey = rawKey.substring(0, start) + changedStr + rawKey.substring(stop);
                    console.log(rawKey);
                }
            }

        } else if (action === 'contains') {
            let substring = cmdItem.shift();
            rawKey.includes(substring) ? console.log(`${rawKey} contains ${substring}`) : console.log('Substring not found!');

        }

        cmd = arr.shift();
    }

    console.log(`Your activation key is: ${rawKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

//outputs:
// abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// Substring not found!
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz
