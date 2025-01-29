function cinemaTicket(params) {
    let index = 0;
    let movieName = params[0];
    index++;
    let freeSpace = Number(params[index]);
    let studentTickets = 'student';
    let standartTickets = 'standard';
    let kidTicket = 'kid';
    let kidCounter = 0;
    let standardCounter = 0;
    let studentCounter = 0;
    let totalStudentCounter = 0;
    let totalKidCounter = 0;
    let totalStandardCounter = 0;
    let totalTicketsPerMovie = 0;
    let totalTicketsPercents = 0;
    let totalTickets = 0;
    let standardTicketsPercent = 0;
    let studentTicketsPercent = 0;
    let kidTicketsPercent = 0;
    let currentMovieName = movieName;
    let isNotEnd = true;

    while (movieName != "Finish") {
        while (movieName != "End") {
            index++;
            movieName = params[index];
            if (movieName === studentTickets) {
                studentCounter++;
            } else if (movieName === kidTicket) {
                kidCounter++;
            } else if (movieName === standartTickets) {
                standardCounter++;
            } else {
                isNotEnd = false;
                break;
            }
        }
        totalTicketsPerMovie = standardCounter + studentCounter + kidCounter;
        totalTicketsPercents = (totalTicketsPerMovie / freeSpace * 100).toFixed(2);
        console.log(`${currentMovieName} - ${totalTicketsPercents}% full.`);
        totalTickets += totalTicketsPerMovie;
        if ((movieName === "End") || (!isNotEnd)) {
            if (isNotEnd || movieName === "End") {
                index++;
            }
            movieName = params[index];
            currentMovieName = movieName;
        }
        index++;
        freeSpace = Number(params[index]);
        totalStudentCounter += studentCounter;
        totalKidCounter += kidCounter;
        totalStandardCounter += standardCounter;
        studentCounter = 0;
        kidCounter = 0;
        standardCounter = 0;
        isNotEnd = true;
    }
    console.log(`Total tickets: ${totalTickets}`);
    studentTicketsPercent = (totalStudentCounter / totalTickets * 100).toFixed(2);
    standardTicketsPercent = (totalStandardCounter / totalTickets * 100).toFixed(2);
    kidTicketsPercent = (totalKidCounter / totalTickets * 100).toFixed(2);
    console.log(`${studentTicketsPercent}% student tickets.`);
    console.log(`${standardTicketsPercent}% standard tickets.`);
    console.log(`${kidTicketsPercent}% kids tickets.`);
}
cinemaTicket(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17",
    "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"])
//cinemaTicket(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
cinemaTicket(['Shutter Island', '9', 'standard', 'standard', 'standard', 'student', 'student', 'student', 'kid', 'kid', 'kid', 'Rush', '9', 'standard',
    'standard', 'standard', 'student', 'student', 'student', 'kid', 'kid', 'kid', 'Deadpool', '9', 'standard', 'standard', 'standard', 'student', 'student',
    'student', 'kid', 'kid', 'kid', 'Finish'])