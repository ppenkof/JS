function makeDictionary(jsonText) {
    let jsonArr = [];
    for (const text of jsonText) {
        let jsonObj = JSON.parse(text);
        let entries = Object.entries(jsonObj);
        jsonArr.push(entries);
        jsonArr.sort((a, b) => a[0][0].localeCompare(b[0][0]));
    }

    for (let element of jsonArr) {
        let entries = Object.entries(element[0]);
        let term = entries[0][1];
        let description = entries[1][1];
        console.log(`Term: ${term} => Definition: ${description}`)
    }
}
makeDictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);