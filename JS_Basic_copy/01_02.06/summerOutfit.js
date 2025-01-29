function summerOutfit(params) {
    let degrees = Number(params[0]);
    let partOfTheDay = params[1];
    let outfit;
    let shoes;
    switch (partOfTheDay) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else {
                outfit = "T-Swim Suit";
                shoes = "Barefood";
            }
            break;
        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["28", "Evening"])