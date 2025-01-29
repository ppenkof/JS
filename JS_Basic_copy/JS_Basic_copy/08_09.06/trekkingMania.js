function trekkingMania(params) {
    let groupsNumber = Number(params[0]);
    let index = 1;
    let peopleMusala = 0;
    let peopleMontBlanc = 0;
    let peopleKilimanjaro = 0;
    let peopleK2 = 0;
    let poepleEverest = 0;
    let total = 0;
    let peopleInGroups = Number(params[index]);

    for (let i = 0; i < groupsNumber; i++) {
        peopleInGroups = Number(params[index]);
        index++;
        total += peopleInGroups;
        if (peopleInGroups < 6) {
            peopleMusala += peopleInGroups;
        } else if (peopleInGroups < 13) {
            peopleMontBlanc += peopleInGroups;
        } else if (peopleInGroups < 26) {
            peopleKilimanjaro += peopleInGroups;
        } else if (peopleInGroups < 41) {
            peopleK2 += peopleInGroups;
        } else {
            poepleEverest += peopleInGroups;
        }
    }
    let perMusala = peopleMusala / total * 100;
    let perMontBlanc = peopleMontBlanc / total * 100;
    let perKilimanjaro = peopleKilimanjaro / total * 100;
    let perK2 = peopleK2 / total * 100;
    let perEverest = poepleEverest / total * 100;

    console.log(`${perMusala.toFixed(2)}%`);
    console.log(`${perMontBlanc.toFixed(2)}%`);
    console.log(`${perKilimanjaro.toFixed(2)}%`);
    console.log(`${perK2.toFixed(2)}%`);
    console.log(`${perEverest.toFixed(2)}%`);
}
trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])