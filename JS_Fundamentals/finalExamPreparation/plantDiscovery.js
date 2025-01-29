function plantDiscovery(params) {
    let count = params.shift();
    let plants = {};
    for (let i = 0; i < count; i++) {
        let plantItem = params.shift().split('<->');
        let [plant, rarity] = plantItem;
        rarity = Number(rarity);
        if (!(plant in plants)) {
            plants[plant] = { rarity };
        } else {
            plant[plant].rarity = rarity;
        }
    }

    let cmd = params.shift();

    while (cmd !== 'Exhibition') {
        let cmdItems = cmd.split(': ');
        let action = cmdItems.shift();
        if (action === 'Rate') {

            let [plant, rating] = cmdItems[0].split(' - ');
            rating = Number(rating);
            if (plant in plants) {
                if ('rating' in plants[plant]) {
                    plants[plant].rating.push(rating);
                } else {
                    plants[plant].rating = [];
                    plants[plant].rating.push(rating);

                }
            } else {
                console.log('error');
            }

        } else if (action === 'Update') {

            let [plant, newRarity] = cmdItems[0].split(' - ');
            newRarity = Number(newRarity);
            if (plant in plants) {
                plants[plant].rarity = newRarity;
            } else {
                console.log('error');
            }

        } else if (action === 'Reset') {

            let plant = cmdItems.shift();
            if (plant in plants) {
                delete plants[plant].rating;
            } else {
                console.log('error');
            }
        }
        cmd = params.shift();
    }

    console.log('Plants for the exhibition:');
    let print = '';
    let entries = Object.entries(plants);

    for (const plant of entries) {

        let sum = 0;
        if (plant[1].rating) {
            sum = plant[1].rating.reduce((a, b) => a + b, 0); //let sum = arr.reduce((a, b) => a + b, 0);
            let averageRating = sum / plant[1].rating.length;
            print = `- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${averageRating.toFixed(2)}`;
        } else {
            print = `- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: 0.00`;
        }
        console.log(print);
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

/*
Plants for the exhibition:
- Arnoldii; Rarity: 4; Rating: 0.00
- Woodii; Rarity: 5; Rating: 7.50
- Welwitschia; Rarity: 2; Rating: 7.00

Plants for the exhibition:
- {plant_name1}; Rarity: {rarity}; Rating: {average_rating}

*/

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
