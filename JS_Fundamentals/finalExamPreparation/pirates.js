function pirates(arrStr) {
    let townItems = arrStr.shift();
    let cities = {};

    while (townItems !== 'Sail') {
        let [town, population, gold] = townItems.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!(town in cities)) {
            cities[town] = { population, gold };
        } else {
            cities[town].population += population;
            cities[town].gold += gold;
        }

        townItems = arrStr.shift();
    }

    townItems = arrStr.shift();
    while (townItems !== 'End') {
        let eventItems = townItems.split('=>');
        let event = eventItems.shift();
        if (event === 'Plunder') {
            let [town, population, gold] = eventItems;
            population = Number(population);
            gold = Number(gold);
            if (town in cities) {
                cities[town].population -= population;
                cities[town].gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                if (cities[town].gold <= 0 || cities[town].population <= 0) {
                    delete cities[town];
                    console.log(`${town} has been wiped off the map!`);
                }
            }

        } else if (event === 'Prosper') {
            let [town, gold] = eventItems;
            gold = Number(gold);

            if (gold >= 0) {
                if (town in cities) {
                    cities[town].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
                }
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }

        townItems = arrStr.shift();
    }

    let entries = Object.entries(cities);

    if (entries.length > 0) {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

    for (let town of entries) {
        console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`);
    }

}
/*pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])

    /*Tortuga plundered! 380 gold stolen, 75000 citizens killed.
180 gold added to the city treasury. Santo Domingo now has 810 gold.
Ahoy, Captain! There are 3 wealthy settlements to go to:
Tortuga -> Population: 270000 citizens, Gold: 870 kg
Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
Havana -> Population: 410000 citizens, Gold: 1100 kg
 */
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

/*Gold added cannot be a negative number!
Nassau plundered! 750 gold stolen, 94000 citizens killed.
Nassau plundered! 150 gold stolen, 1000 citizens killed.
Nassau has been wiped off the map!
Campeche plundered! 690 gold stolen, 150000 citizens killed.
Campeche has been wiped off the map!
Ahoy, Captain! There are 2 wealthy settlements to go to:
San Juan -> Population: 930000 citizens, Gold: 1250 kg
Port Royal -> Population: 420000 citizens, Gold: 3000 kg */

