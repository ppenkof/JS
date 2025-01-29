function destinationMapper(arr) {
    let str=arr.shift();
    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/g;
    let matches = str.match(pattern);
    let travelPOint = 0;
    let locations = [];
    if (matches) {
        for (let dectination of matches) {
            let location=dectination.slice(1,-1);
            locations.push(location);
            travelPOint += location.length;
        }
    }
    console.log(`Destinations: ${locations.join(', ')}`);
    console.log(`Travel Points: ${travelPOint}`);

}
// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
// destinationMapper("ThisIs some InvalidInput")
destinationMapper(['=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='])