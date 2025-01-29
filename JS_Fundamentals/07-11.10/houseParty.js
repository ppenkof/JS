function houseParty(arrStr) {
    let guests = [];
    for (let i = 0; i < arrStr.length; i++) {
        let token = arrStr[i].split(' ');
        let name = token.shift();
        let cmd = token.join(' ');
        if (cmd === 'is going!') {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                guests.pop();
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guests.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])