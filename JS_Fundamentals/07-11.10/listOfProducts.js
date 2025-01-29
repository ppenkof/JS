function listOfProducts(arrStr) {
    arrStr.sort();
    for (let i = 0; i < arrStr.length; i++) {
        console.log(`${i + 1}.${arrStr[i]}`);
    }

}
//listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])