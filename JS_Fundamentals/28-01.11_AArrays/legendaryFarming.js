function legendaryFarming(str) {
    let arrToStr = str.split(' ');
    let allMaterials = {};
    let winner = '';
    let keyMaterials = ['fragments', 'motes', 'shards']
    for (let keyWord of keyMaterials) {
        allMaterials[keyWord] = { keyWord };
        allMaterials[keyWord] = 0;
    }
    for (let i = 0; i < arrToStr.length; i += 2) {
        let quantity = +arrToStr[i];
        let material = arrToStr[i + 1].toLowerCase();
        if (!(material in allMaterials)) {
            allMaterials[material] = { material };
            allMaterials[material] = quantity;
        } else {
            allMaterials[material] += quantity;
            if (allMaterials[material] >= 250) {
                allMaterials[material] -= 250;
                winner = material;
                break;
            }
        }
    }
    let entries = Object.entries(allMaterials).sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0]));

    for (let element of entries) {
        let [material, quantity] = element;

        if (winner === 'fragments') {
            console.log('Valanyr obtained!');
        } else if (winner === 'motes') {
            console.log('Dragonwrath obtained!');
        } else if (winner === 'shards') {
            console.log('Shadowmourne obtained!');
        }

        if ((material === 'fragments')) {
            console.log(`${material}: ${quantity}`);
            element.shift(material);
            element.shift(quantity);
        } else if ((material === 'motes')) {

            console.log(`${material}: ${quantity}`);
            element.shift(material);
            element.shift(quantity);
        } else if ((material === 'shards')) {

            console.log(`${material}: ${quantity}`);
            element.shift(material);
            element.shift(quantity);
        }
        winner = '';
    }

    for (let i = 0; i < entries.length; i++) {
        let element = entries[i];
        if (element.length < 1) {
            let index = entries.indexOf(element);
            entries.splice(index, 1);
            i--;
        }
    }

    entries.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let element of entries) {
        let [material, quantity] = element;
        console.log(`${material}: ${quantity}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')