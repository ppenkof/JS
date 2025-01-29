function furniture(arr) {
    let pattern = />>(?<furniture>[A-Z]+[a-z]*)<<(?<price>\d+[\.]*\d*)!(?<qnt>\d+)/;
    let matches = arr[0].match(pattern);
    let index = 0;
    let totalPrice = 0;
    let furnitureArr = [];
    while (arr[index] !== 'Purchase') {
        let furniturePrice = 0;
        let furniture = '';
        if (matches) {
            furniture = matches[1];
            let price = +matches[2];
            let quantity = +matches[3];
            furniturePrice = price * quantity;
            totalPrice += furniturePrice;
            furnitureArr.push(furniture);
        }
        index++;
        matches = arr[index].match(pattern);
    }

    console.log('Bought furniture:');
    furnitureArr.length > 0 ? console.log(furnitureArr.join('\n')) : '';
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
// furniture(['>>Sofa<<312.23!3',

//     '>>TV<<300!5',

//     '>Invalid<<!5',

//     'Purchase'])
furniture([
    //'>>Laptop<<312.2323!3',

     '>>TV<<300.21314!5',

    '>Invalid<<!5',

    //   '>>TV<<300.21314!20',

    '>>Invalid<!5',

    //'>>TV<<30.21314!5',

    '>>Invalid<<!!5',

    'Purchase'])