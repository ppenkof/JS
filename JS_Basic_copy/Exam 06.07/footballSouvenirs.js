function footballSouvenirs(params) {
    let country = params[0];
    let stock = params[1];
    let num = Number(params[2]);
    let flags = 0;
    let caps = 0;
    let posters = 0;
    let stickers = 0;
    let sum = 0;
    let isInvalidCountry = true;

    if (stock === "flags" || stock === "caps" || stock === "posters" || stock === "stickers") {
        switch (country) {
            case "Argentina":
                if (stock === "flags") { flags = 3.25; sum = num * flags; }
                if (stock === "caps") { caps = 7.20; sum = num * caps; }
                if (stock === "posters") { posters = 5.10; sum = num * posters; }
                if (stock === "stickers") { stickers = 1.25; sum = num * stickers }
                break;
            case "Brazil":
                if (stock === "flags") { flags = 4.20; sum = num * flags; }
                if (stock === "caps") { caps = 8.50; sum = num * caps; }
                if (stock === "posters") { posters = 5.35; sum = num * posters; }
                if (stock === "stickers") { stickers = 1.20; sum = num * stickers }
                break;
            case "Croatia":
                if (stock === "flags") { flags = 2.75; sum = num * flags; }
                if (stock === "caps") { caps = 6.90; sum = num * caps; }
                if (stock === "posters") { posters = 4.95; sum = num * posters; }
                if (stock === "stickers") { stickers = 1.10; sum = num * stickers; }
                break;
            case "Denmark":
                if (stock === "flags") { flags = 3.10; sum = num * flags; }
                if (stock === "caps") { caps = 6.50; sum = num * caps; }
                if (stock === "posters") { posters = 4.80; sum = num * posters; }
                if (stock === "stickers") { stickers = 0.90; sum = num * stickers; }
                break;
            default:
                isInvalidCountry = false;
                console.log("Invalid country!");
                break;
        }
    } else {
        isInvalidCountry = false;
        console.log("Invalid stock!");
    }
    if (isInvalidCountry) { console.log(`Pepi bought ${num} ${stock} of ${country} for ${sum.toFixed(2)} lv.`); }
}
footballSouvenirs(["Brazil",
    "stickers",
    "5"])