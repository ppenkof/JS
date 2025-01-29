function harvest(params) {
    let vineyardM2 = Number(params[0]);
    let grapesKg = Number(params[1]);
    let litersWineNeeds = Number(params[2]);
    let workers = Number(params[3]);
    let extraction = vineyardM2 * grapesKg;
    let totalExraction = extraction * 0.4;
    let wineExtraction = totalExraction / 2.50;

    if (wineExtraction < litersWineNeeds) {
        console.log(`It will be a tough winter! More ${Math.floor(litersWineNeeds - wineExtraction)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${wineExtraction} liters.`);
        console.log(`${Math.ceil(wineExtraction - litersWineNeeds)} liters left -> ${Math.ceil((wineExtraction - litersWineNeeds) / workers)} liters per person.`);
    }
}
harvest(["1020", "1.5", "425", "4"])