function heroesOfCodeAndLogic7(arr) {
    let heroesCount = arr.shift();
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let heroesItem = arr.shift();
        let [hero, HP, MP] = heroesItem.split(' ');
        HP = Number(HP);
        MP = Number(MP);

        if (!(hero in heroes)) {
            heroes[hero] = { HP, MP };
        }
    }

    let cmd = arr.shift();
    while (cmd !== 'End') {
        let cmdItems = cmd.split(' - ');
        let action = cmdItems.shift();

        if (action === 'CastSpell') {

            let [hero, MP, spellName] = cmdItems;
            MP = Number(MP);

            if (heroes[hero].MP >= MP) {
                heroes[hero].MP -= MP;
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].MP} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }

        } else if (action === 'TakeDamage') {

            let [hero, HP, attacker] = cmdItems;
            HP = Number(HP);

            heroes[hero].HP -= HP;
            if (heroes[hero].HP > 0) {
                console.log(`${hero} was hit for ${HP} HP by ${attacker} and now has ${heroes[hero].HP} HP left!`);
            } else {
                delete heroes[hero];
                console.log(`${hero} has been killed by ${attacker}!`);
            }

        } else if (action === 'Recharge') {

            let [hero, MP] = cmdItems;
            MP = Number(MP);

            if (heroes[hero].MP + MP > 200) {
                console.log(`${hero} recharged for ${200 - heroes[hero].MP} MP!`);
                heroes[hero].MP = 200;
            } else {
                console.log(`${hero} recharged for ${MP} MP!`);
                heroes[hero].MP += MP;
            }

        } else if (action === 'Heal') {

            let [hero, HP] = cmdItems;
            HP = Number(HP);

            if (heroes[hero].HP + HP > 100) {
                console.log(`${hero} healed for ${100 - heroes[hero].HP} HP!`);
                heroes[hero].HP = 100;
            } else {
                console.log(`${hero} healed for ${HP} HP!`);
                heroes[hero].HP += HP;
            }
        }
        cmd = arr.shift();
    }

    let entries = Object.entries(heroes);
    for (const [hero, items] of entries) {
        console.log(hero);
        console.log(`  HP: ${items.HP}`);
        console.log(`  MP: ${items.MP}`);
    }

}
heroesOfCodeAndLogic7([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])

/*
Solmyr healed for 10 HP!
Solmyr recharged for 50 MP!
Kyrre was hit for 66 HP by Orc and now has 33 HP left!
Kyrre has successfully cast ViewEarth and now has 35 MP!
Solmyr
  HP: 95
  MP: 170
Kyrre
  HP: 33
  MP: 35
*/