function matchTicket(params) {
    let budged = Number(params[0]);
    let category = params[1];
    let personNumber = Number(params[2]);
    let ticketPrice = 0;
    let transport = 0;

    if (category === "VIP") {
        ticketPrice = 499.99;
    } else {
        ticketPrice = 249.99;
    }
    if (personNumber <= 4) {
        transport = budged * 0.75;
    } else if (personNumber <= 9) {
        transport = budged * 0.6;
    } else if (personNumber <= 24) {
        transport = budged * 0.5;
    } else if (personNumber <= 49) {
        transport = budged * 0.4;
    } else {
        transport = budged * 0.25;
    }
    let totalOutlay = (ticketPrice * personNumber) + transport;
    if (budged >= totalOutlay) {
        console.log(`Yes! You have ${(budged - totalOutlay).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalOutlay - budged).toFixed(2)} leva.`);
    }
}
matchTicket(['30000',
'VIP',
'49'])