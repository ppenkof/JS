function hogwarts(arr) {
    let text = arr.shift();
    let cmd = arr.shift();

    while (cmd !== 'Abracadabra') {

        let cmdItems = cmd.split(' ');
        let action = cmdItems.shift();
        if (action === 'Abjuration') {

            text = text.toUpperCase();
            console.log(text);

        } else if (action === 'Necromancy') {

            text = text.toLowerCase();
            console.log(text);

        } else if (action === 'Illusion') {

            let [index, letter] = cmdItems;
            index = Number(index);
            if (index >= 0 && index < text.length) {
                let element = text.substring(index, index + 1);
                text = text.substring(0, index) + letter + text.substring(index + 1);
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }

        } else if (action === 'Divination') {

            let [firstSubstring, secondSubstring] = cmdItems;
            if (text.includes(firstSubstring) && firstSubstring !== secondSubstring) {
                while (text.includes(firstSubstring)) {
                    text = text.replace(firstSubstring, secondSubstring);
                }
                console.log(text);
            }

        } else if (action === 'Alteration') {

            let substring = cmdItems.shift();
            if (text.includes(substring)) {
                text = text.replace(substring, '');
                console.log(text);
            }
        } else {
            console.log("The spell did not work!");
        }

        cmd = arr.shift();
    }
}
hogwarts(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"])

hogwarts(["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"])

hogwarts(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Divination sword good", 
    "Abracadabra"])


/*•	"Abjuration"
o	Replace all letters with upper case and print the result.
•	"Necromancy"
o	Replace all letters with lower case and print the result.
•	"Illusion {index} {letter}"
o	Replace the letter at the index with the given one and print "Done!"
o	If the index is invalid, print: "The spell was too weak."
•	"Divination {first substring} {second substring}"
o	Replace the first substring (all matches) with the second and print the result. 
o	If the substring does not exist, skip the command.
•	"Alteration {substring}"
o	Remove the substring from the string and print the result.
o	If the substring does not exist, skip the command.
If the input command is not in the list, print "The spell did not work!".
*/