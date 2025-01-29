function travelTime(arr) {
    let destination = {};
    for (const element of arr) {
        let [country, city, cost] = element.split(' > ');
        if (country in destination) {
            if (city in destination[country]) {
                if (cost < destination[country][city]) {
                    destination[country][city] = +cost;
                }

            } else {
                destination[country][city] = +cost;
            }
        } else {
            destination[country] = {};
            destination[country][city] = +cost;
        }
    }
    let entries = Object.entries(destination)
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, cityObj] of entries) {
        let print = `${country} -> `;
        let entriesObj = Object.entries(cityObj)
            .sort((a, b) => a[1] - b[1]);
        for (const [city, cost] of entriesObj) {
            print += `${city} -> ${cost} `;
        }
        console.log(print);
    }
}
travelTime([

    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

])