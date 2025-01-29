function deckOfCards(arrStr) {
    let cardList = arrStr.shift().split(', ');
    let operationCount = Number(arrStr.shift());
    //let cardList = [];

    for (let i = 0; i < operationCount; i++) {
        let mess = arrStr.shift().split(', ');
        let action = mess.shift();
        if (action === 'Add') {
            let card = mess.shift();
            if (!cardList.includes(card)) {
                cardList.push(card);
                console.log('Card successfully added');
            } else {
                console.log('Card is already in the deck');
            }
        } else if (action === 'Remove') {
            let card = mess.shift();
            if (cardList.includes(card)) {
                let index = cardList.indexOf(card);
                cardList.splice(index, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Card not found");
            }
        } else if (action === 'Remove At') {
            let index = Number(mess.shift());
            if (index > 0 && index <= cardList.length - 1) {
                cardList.splice(index, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Index out of range");
            }
        } else if (action === 'Insert') {
            let index = Number(mess.shift());
            let card = mess.shift();
            if (index > 0 && index <= cardList.length - 1) {
                if (!cardList.includes(card)) {
                    cardList.splice(index, 0, card);
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already added");
                }
            } else {
                console.log("Index out of range");
            }
        }
    }
    console.log(cardList.join(', '));
}
    // deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    //     "3",
    //     "Add, King of Diamonds",
    //     "Insert, 2, Jack of Spades",
    //     "Remove, Ace of Diamonds"])
// deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
// "2",
// "Add, Two of Clubs",
// "Remove, Five of Hearts"])
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"])
