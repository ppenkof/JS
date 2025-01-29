function fancyBarcode(array) {
    let count = array.shift();
    let pattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/;
    for (let index = 0; index < count; index++) {
        let matches = array[index].match(pattern);
        let productGroup = '';
        if (matches) {
            for (let letter of matches[0]) {
                let digitPattern = /\d/;
                let digitMatches = letter.match(digitPattern);
                if (digitMatches) {
                    productGroup += digitMatches;
                }
            }
            if (productGroup === '') {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
/*fancyBarcode(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

/*Product group: 00
Product group: 0
Product group: 46
 */

fancyBarcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])


/*Product group: 11
Product group: 00
Invalid barcode
Invalid barcode
Invalid barcode
Product group: 00

 */