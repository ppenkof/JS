function makeDictionary(jsonText) {
    let jsonArr = [];
    for (const text of jsonText) {
        let jsonObj = JSON.parse(text);
        let entri = Object.entries(jsonObj);
        jsonArr.push(entri);
       // jsonArr.push(jsonObj);
    }
    //let entri = Object.entries(jsonArr);
    jsonArr.sort(([keyA,valueA], [keyB,valueB]) => {
        return keyA[0].localeCompare(keyB[0]);
});

   for (let element of jsonArr) {
        let [term, description]=element[0];
        console.log(`Term: ${term} => Definition: ${description}`)
    }
}
makeDictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);