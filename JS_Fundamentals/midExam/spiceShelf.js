function spiceShelf(arr) {
    let spices = arr.shift().split(', ');
    let cmd = arr.shift();

    while (cmd !== 'done') {
        let cmdItems = cmd.split(' ');
        let action = cmdItems.shift();

        if (action === 'AddSpice') {

            let typeSpice = cmdItems.shift();
            if (!spices.includes(typeSpice)) {
                spices.push(typeSpice);
            }

        } else if (action === 'AddManySpices') {

            let index = Number(cmdItems.shift());
            let manySpices = cmdItems.shift().split('|');

            for (let i = 0; i < manySpices.length; i++) {
                spices.splice(index + i, 0, manySpices[i]);
            }

        } else if (action === 'SwapSpices') {

            let [spice1, spice2] = cmdItems;
            let index1 = spices.indexOf(spice1);
            let index2 = spices.indexOf(spice2);
            if (index1 != -1 && index2 != -1) {
                if (index1 < index2) {
                    spices.splice(index2, 1, spice1);
                    spices.splice(index1, 1, spice2);
                } else {
                    spices.splice(index1, 1, spice2);
                    spices.splice(index2, 1, spice1);
                }
            }

        } else if (action === 'ThrowAwaySpices') {

            let [spice, num] = cmdItems;
            num = Number(num);
            let index = spices.indexOf(spice);
            if (index != -1) {
                spices.splice(index, num);
            }
        } else if (action === 'Arrange') {
            spices.sort((a, b) => a.localeCompare(b));
        }
        cmd = arr.shift();
    }
    console.log(spices.join(' '));
}
spiceShelf(['coriander, cloves, paprika, allspice, turmeric, anise, cumin',
    'AddSpice nutmeg',
    'ThrowAwaySpices cloves 3',
    'AddManySpices 3 cayenne|cardamom|mace',
    'done'])
spiceShelf(['coriander, cloves, paprika, cumin',
    'AddSpice nutmeg',
    'AddSpice anise',
    'AddSpice turmeric',
    'AddSpice cumin',
    'SwapSpices coriander paprika',
    'ThrowAwaySpices cumin 4',
    'Arrange',
    'done'])


/*•	"AddSpice {spice}":
o	Add a given spice at the end of the sequence. If the spice already exists, skip the command.
•	"AddManySpices {index} {spice1|spice2|spice3|spicen}":
o	Insert all the given spices at the given index. The index and all the spices will be valid. 
•	"SwapSpices {spice1} {spice2}":
o	Find the given spices in the sequence if they exist and swap their places.
•	"ThrowAwaySpices {spice} {number of spices to remove}":
o	If the given spice exist, remove the number of spices, by starting from the given. The number of spices to remove will be always valid.
•	"Arrange":
o	Sort the spices alphabetically.
*/