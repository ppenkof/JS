function sleepyTomCat(params) {
    let holydays = Number(params[0]);
    let holidayPlayMinutes = holydays * 127;
    let workingPlayMinutes = (365 - holydays) * 63;
    let totalPlayminutes = holidayPlayMinutes + workingPlayMinutes;
    let difference = 0;

    if (totalPlayminutes > 30000) {
        console.log('Tom will run away');
        difference = totalPlayminutes - 30000;
        let totalHours = Math.floor(difference / 60);
        let totalMinutes = difference % 60;
        console.log(`${totalHours} hours and ${totalMinutes} minutes more for play`);
    } else {
        console.log('Tom sleeps well');
        difference = 30000 - totalPlayminutes;
        let totalHours = Math.floor(difference / 60);
        let totalMinutes = difference % 60;
        console.log(`${totalHours} hours and ${totalMinutes} minutes less for play`);
    }
}
sleepyTomCat(["100"])