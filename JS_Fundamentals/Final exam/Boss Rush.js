function bossRush(arr) {
    let count = arr.shift();
    let pattern = /(\|)(?<boss>[A-Z]{4,})\1:(#)(?<title>[A-Za-z]+ [A-Za-z]+)\3/;///(\|)(?<boss>[A-Z]{4,})\1:(#)(?<title>\w+ \w+)\3/;///(\|)[A-Z]{4,}\1:(#)\w+ \w+\2/;
    for (let i = 0; i < count; i++) {

        let nameItems = arr.shift();
        let matches = pattern.exec(nameItems);
        if (matches) {
            console.log(`${matches[2]}, The ${matches[4]}`);
            console.log(`>> Strength: ${matches[2].length}`);
            console.log(`>> Armor: ${matches[4].length}`);
        }else {
            console.log('Access denied!');
        }

    }
}
bossRush(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])
/*"{boss name}, The {title}
>> Strength: {length of the name}
>> Armor: {length of the title}"
*/

bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
