function partyTime(arr) {
    let guests = [];
    for (let i=0;arr.length;i++) {
        let guest=arr[i];
        let count = 0;
        if (guest === 'PARTY') {
            break;
        }
            while (count < 1) {
                count++;
                let index = arr.indexOf(guest);
                arr.splice(index, 1);
                i--;
            }
            if (!arr.includes(guest)) {
                guests.push(guest);
            }
    }
    console.log(guests.length);
    console.log(guests.join('\n'));
}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])
partyTime(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 
'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 
'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])