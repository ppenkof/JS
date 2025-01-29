//	        Friday	Saturday	Sunday
// Students	8.45	9.80	    10.46
// Business	10.90	15.60	    16
// Regular	15	    20	        22.50

function vacantion(peopleCount, groupType, dayOfWeek) {
    let singlePrice = 0;
    let totalPrice = 0;
    switch (groupType) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                singlePrice = 8.45;
            } else if (dayOfWeek === 'Saturday') {
                singlePrice = 9.80;
            } else if (dayOfWeek === 'Sunday') {
                singlePrice = 10.46;
            }
            totalPrice = singlePrice * peopleCount;
            //·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
            if (peopleCount >= 30) {
                totalPrice *= 0.85;
            }
            break;

        case 'Business':
            if (dayOfWeek === 'Friday') {
                singlePrice = 10.90;
            } else if (dayOfWeek === 'Saturday') {
                singlePrice = 15.60;
            } else if (dayOfWeek === 'Sunday') {
                singlePrice = 16;
            }
            totalPrice = singlePrice * peopleCount;
            //·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
            if (peopleCount >= 100) {
                totalPrice = singlePrice * (peopleCount - 10);
            }
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                singlePrice = 15;
            } else if (dayOfWeek === 'Saturday') {
                singlePrice = 20;
            } else if (dayOfWeek === 'Sunday') {
                singlePrice = 22.50;
            }
            totalPrice = singlePrice * peopleCount;
            //·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
            if (peopleCount >= 10 && peopleCount <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacantion(40,
    "Regular",
    "Saturday"
    )