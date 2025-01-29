function onTimeForTheExam(params) {
    let hourExam = Number(params[0]);
    let minutesExam = Number(params[1]);
    let hourArrive = Number(params[2]);
    let minutesArrive = Number(params[3]);
    let timeExam = (hourExam * 60) + minutesExam;
    let timeArrive = (hourArrive * 60) + minutesArrive;
    let arriving = 0;

    if (timeArrive < timeExam - 30) {
        console.log("Early");
        if (timeExam - timeArrive >= 60) {
            if (minutesExam - minutesArrive > 9) {
                console.log(`${hourExam - hourArrive}:${minutesExam - minutesArrive} hours before the start`);
            } else {
                console.log(`${hourExam - hourArrive}:0${minutesExam - minutesArrive} hours before the start`);
            }
        } else {
            console.log(`${timeExam - timeArrive} minutes before the start`);
        }


    } else if (timeArrive >= timeExam - 30 && timeArrive <= timeExam) {
        console.log("On time");
        if (timeArrive >= timeExam - 30 && timeExam - timeArrive > 0) { console.log(`${timeExam - timeArrive} minutes before the start`);; }
    } else {
        console.log("Late");
        if (timeArrive - timeExam >= 60) {
            if (minutesArrive - minutesExam > 9) {
                console.log(`${hourArrive - hourExam}:${minutesArrive - minutesExam} hours after the start`);
            } else {
                console.log(`${hourArrive - hourExam}:0${minutesArrive - minutesExam} hours after the start`);
            }
        } else {
            console.log(`${timeArrive - timeExam} minutes after the start`);
        }
    }
}
onTimeForTheExam(["14", "00", "13", "55"])