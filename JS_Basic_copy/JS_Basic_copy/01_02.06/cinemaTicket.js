function cinemaTicket(params) {
    const dayOfWeek = params[0];
    let ticketPrice = 0;
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            ticketPrice = 12;
            break;
        case "Wednesday":
        case "Thursday":
            ticketPrice = 14;
            break;
        default:
            ticketPrice = 16;
    }
    console.log(`${ticketPrice}`);
}
cinemaTicket(["Sunday"])