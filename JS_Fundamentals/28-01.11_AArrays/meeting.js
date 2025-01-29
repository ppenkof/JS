function meeting(arrStr) {
    let schedule = {};
    for (const iterator of arrStr) {
        let [day, person] = iterator.split(' ');
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (const day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}
meeting(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim'])