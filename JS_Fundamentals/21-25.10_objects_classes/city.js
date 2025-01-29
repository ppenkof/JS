function city(cityObj) {
    let allKeys = Object.keys(cityObj);
    for (let key of allKeys) {
        let value = cityObj[key];
        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});