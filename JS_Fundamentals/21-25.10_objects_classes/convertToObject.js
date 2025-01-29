// function convertToObject(jsonText) {
//     let jsonObj = JSON.parse(jsonText);
//     for (let key in jsonObj) {
//         let value = jsonObj[key];
//         console.log(`${key}: ${value}`);
//     }

// }
// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')


function convertToObject(jsonText) {
    let jsonObj = JSON.parse(jsonText);
    let jsonKey=Object.keys(jsonObj);
    for (let key of jsonKey) {
        let value = jsonObj[key];
        console.log(`${key}: ${value}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')