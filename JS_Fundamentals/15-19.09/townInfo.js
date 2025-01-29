function townInfo(town, population, area) {
    let townName = town;
    let populationCount = population;
    let areaKm2 = area;
    let isInvalidData = true;

    if (townName.length < 3) {
        console.log("Town name must be at least 3 characters!");
        isInvalidData = false;
    }

    if (populationCount < 0) {
        console.log('Population must be a positive number!');
        isInvalidData = false;
    }

    if (areaKm2 < 0) {
        console.log('Area must be a positive number!');
        isInvalidData = false;
    }

    if (isInvalidData) {
        console.log(`Town ${townName} has population of ${populationCount} and area ${areaKm2} square km.`);
    }
}
townInfo('Ka',
    -3600,
    -50
)