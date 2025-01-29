function theatrePromotions(typeDay, age) {
    let ticketPrice = 0;
    let shouldPrint = true;
    if (age >= 0 && age <= 18) {
        switch (typeDay) {
            case 'Weekday':
                ticketPrice = 12;
                break;
            case 'Weekend':
                ticketPrice = 15;
                break;
            case 'Holiday':
                ticketPrice = 5;
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (typeDay) {
            case 'Weekday':
                ticketPrice = 18;
                break;
            case 'Weekend':
                ticketPrice = 20;
                break;
            case 'Holiday':
                ticketPrice = 12;
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (typeDay) {
            case 'Weekday':
                ticketPrice = 12;
                break;
            case 'Weekend':
                ticketPrice = 15;
                break;
            case 'Holiday':
                ticketPrice = 10;
                break;
        }
    } else {
        console.log('Error!');
        shouldPrint = false;
    }
    if (shouldPrint) { console.log(ticketPrice +'$'); }
}
theatrePromotions('Holiday', 15)