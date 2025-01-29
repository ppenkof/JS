function secretChat(arrStr) {
    let concealedMessage = arrStr.shift();
    let cmd = arrStr.shift();
    while (cmd !== 'Reveal') {
        let items = cmd.split(':|:');
        let action = items.shift();

        if (action === 'InsertSpace') {

            let index = items.shift();
            concealedMessage = concealedMessage.substring(0, index) + ' ' + concealedMessage.substring(index);
            console.log(concealedMessage);

        } else if (action === 'Reverse') {

            let subst = items.shift();
            if (concealedMessage.includes(subst)) {
                let substIndex = concealedMessage.indexOf(subst);
                let cuttedMess = concealedMessage.substring(substIndex, substIndex + subst.length);
                let reverseMess = cuttedMess
                    .split('')
                    .reverse()
                    .join('');
                concealedMessage = concealedMessage.substring(0, substIndex) + concealedMessage.substring(substIndex + subst.length) + reverseMess;
                console.log(concealedMessage);

            } else {
                console.log("error");
            }

        } else if (action === 'ChangeAll') {

            let [subst, replacementText] = items;
            while (concealedMessage.includes(subst)) {
                concealedMessage = concealedMessage.replace(subst, replacementText);
            }
            console.log(concealedMessage);
        }

        cmd = arrStr.shift();
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])

/*hellodar!gnil
hellodarling!
hello darling!
You have a new text message: hello darling!
*/



/*On the first line of the input, you will receive the concealed message. After that,
until the "Reveal" command is given, you will receive strings with instructions for different
 operations that need to be performed upon the concealed message to interpret it and reveal its actual content. 
 There are several types of instructions, split by ":|:"
•	"InsertSpace:|:{index}":
o	Inserts a single space at the given index. The given index will always be valid.
•	"Reverse:|:{substring}":
o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
o	If not, print "error".
o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
•	"ChangeAll:|:{substring}:|:{replacement}":
o	Changes all occurrences of the given substring with the replacement text.
*/
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )