function carWash(arrStr) {

    function cleaningCoeficent(ItemStr) {
        let cleaning = 0;
        for (let i = 0; i < ItemStr.length; i++) {
            let washItem = ItemStr[i];
            switch (washItem) {
                case 'soap':
                    cleaning += 10;
                    break;
                case 'water':
                    cleaning *= 1.2;
                    break;
                case 'vacuum cleaner':
                    cleaning *= 1.25;
                    break;
                case 'mud':
                    cleaning *= 0.9;
                    break;
            }
        }
        return cleaning;
    }

    let cleanerValue = cleaningCoeficent(arrStr);
    console.log(`The car is ${cleanerValue.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])