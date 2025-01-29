function journey(params) {
    let budged = Number(params[0]);
    let seasson = params[1];
    let destination;
    let typeAccomodation;
    let outlay = 0;
    let total = 0;

    if (seasson === "summer") {
        if (budged <= 100) {
            destination = "Bulgaria";
            outlay = 0.3;
        } else if (budged <= 1000) {
            destination = "Balkans";
            outlay = 0.4;
        } else {
            destination = "Europe"
            outlay = 0.9;
        }
        if (destination === "Europe") {
            typeAccomodation = "Hotel";
        } else {
            typeAccomodation = "Camp";
        }
    } else {
        typeAccomodation = "Hotel"
        if (budged <= 100) {
            destination = "Bulgaria";
            outlay = 0.7;
        } else if (budged <= 1000) {
            destination = "Balkans";
            outlay = 0.8;
        } else {
            destination = "Europe"
            outlay = 0.9;
        }
    }

    total = budged * outlay;
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeAccomodation} - ${total.toFixed(2)}`);
}
journey(["1500", "summer"])