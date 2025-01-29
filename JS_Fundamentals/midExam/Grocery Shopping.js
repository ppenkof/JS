function groceryShopping(arrStr) {
    let list = arrStr.shift().split('|');
    let newList = [];
    let isReversed = false;
    for (let i = 0; i < arrStr.length; i++) {
        let command = arrStr.shift().split('%');
        let action = command.shift();
        let product = command.shift();
        if (action == 'Important') {
            if (!list.includes(product)) {
                list.unshift(product);
            } else {
                let index = list.indexOf(product);
                list.splice(index, 1);
                list.splice(0, 0, product);
            }

        } else if (action == 'Add') {
            if (!list.includes(product)) {
                list.push(product);
            } else {
                console.log("The product is already in the list.");
            }
        } else if (action == 'Swap') {
            let secProduct = command.shift();
            if (list.includes(product) && list.includes(secProduct)) {
                let index = list.indexOf(product);
                list.splice(index, 1);
                let indexSec = list.indexOf(secProduct);
                list.splice(indexSec, 1);
                list.splice(indexSec, 0, product);
                list.splice(index, 0, secProduct);
            } else {
                let indexSec = list.indexOf(secProduct);
                let index = list.indexOf(product);
                if (index == -1) {
                    console.log(`Product ${product} missing!`);
                } else {
                    console.log(`Product ${secProduct} missing!`);
                }
            }

        } else if (action == 'Remove') {
            if (list.includes(product)) {
                let index = list.indexOf(product);
                list.splice(index, 1);
            } else {
                console.log(`Product ${product} isn't in the list.`);
            }
        } else if (action === 'Reversed') {
            isReversed = true;
            newList = list.reverse();
        } else {
            break;
        }
    }
    if (!isReversed) {
        for (let j = 0; j < list.length; j++) {

            console.log(`${j+1}. ${list[j]}`);
        }
    } else {
        for (let k = 0; k < list.length; k++) {
            console.log(`${k+1}. ${newList[k]}`);
        }
    }
}
groceryShopping((["eggs|milk|bread|fish",
    "Important%bread",
    "Swap%eggs%tomato",
    "Shop!"])
)
groceryShopping((["apple|cheese|salt|bananas",
"Remove%cheese",
"Swap%salt%bananas",
"Shop!"])
)
groceryShopping((["kiwi|paper|coffee",
"Add%coffee",
"Important%bread",
"Shop!"])
)