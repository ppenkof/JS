function gladiatorInventory(invertoryArr) {

    function weaponActions(arr) {
        let invertory = arr.shift().split(' ');
        for (let cmd of arr) {
            let cmdArr = cmd.split(' ');
            let action = cmdArr.shift();
            let item = cmdArr.shift();
            if (action === 'Buy') {
                if (!invertory.includes(item)) {
                    invertory.push(item);
                }
            } else if (action === 'Trash') {
                let index = invertory.indexOf(item);
                if (index !== -1) {
                    invertory.splice(index, 1);
                }
            } else if (action === 'Repair') {
                let index = invertory.indexOf(item);
                if (index !== -1) {
                    invertory.splice(index, 1);
                    invertory.push(item);
                }
            } else if (action === 'Upgrade') {
                let itemArr = item.split('-');
                let weapon = itemArr.shift();
                let upgrade = itemArr.shift();
                let index = invertory.indexOf(weapon);
                if (index !== -1) {
                    let newUpgrade = [weapon, upgrade].join(':');
                    invertory.splice(index + 1, 0, newUpgrade);
                }
            }
        }
        return invertory;
    }
    
    let invertory = weaponActions(invertoryArr);
    console.log(invertory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'])