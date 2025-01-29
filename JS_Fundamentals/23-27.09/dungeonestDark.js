function dungeonestDark(roomsString) {
    let initialHealth = 100;
    let initialCoins = 0;
    let rooms = roomsString.toString().split('|');
    for (let i = 0; i < rooms.length; i++) {
        let item = rooms[i].toString().split(' ');
        let value = Number(item[1]);
        let hero = item[0];
        if (hero === 'potion') {
            console.log(`You healed for ${initialHealth + value > 100 ? 100 - initialHealth : value} hp.`);
            initialHealth += value;
            if (initialHealth > 100) {
                initialHealth = 100;
            }
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (hero === 'chest') {
            initialCoins += value;
            console.log(`You found ${value} coins.`);
        } else {
            initialHealth -= value;
            if (initialHealth <= 0) {
                console.log(`You died! Killed by ${hero}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${hero}.`);
            }
        }
        if (i === (rooms.length - 1) && initialHealth > 0) {
            console.log("You've made it!");
            console.log(`Coins: ${initialCoins}`);
            console.log(`Health: ${initialHealth}`);
        }

    }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])