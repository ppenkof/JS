function invertory(arr) {
    let heroes = [];
    for (let cmd of arr) {
        let [heroName, heroLevel, heroItems] = cmd.split(' / ');
        heroLevel = Number(heroLevel);
        let heroObj = {
            hero: heroName,
            level: heroLevel,
            item: heroItems
        };
        heroes.push(heroObj);
    }
    heroes.sort((a, b) => a.level - b.level);
    for (let heroObj of heroes) {
        console.log(`Hero: ${heroObj.hero}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.item}`);
    }
}
invertory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])