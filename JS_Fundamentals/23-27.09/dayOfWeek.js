function dayOfWeek(day) {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day >= 1 && day <= 7) {
        console.log(week[day-1]);
    } else {
        console.log("Invalid day!");
    }
}
dayOfWeek(23)