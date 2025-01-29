function softUniBarIncome(arr) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d]*(?<price>\d+\.?\d+)\$/;
    let cmd = arr.shift();
    let income = 0;
    while (cmd !== 'end of shift') {
        let matches = pattern.exec(cmd);
        if (matches) {
            let { name, product, count, price } = matches.groups;
            let totalPrice = +count * +price;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
            income += totalPrice;
        }
        cmd = arr.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift'])