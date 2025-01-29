function graduation(params) {
    let index = 0;
    let name = params[0];
    index++;
    let currentGrade = Number(params[index]);
    let dicline = 0;
    let sumGrades = 0;
    let diclinebl = true;

    while (index <= 12) {
        currentGrade = Number(params[index]);  
        if (currentGrade < 4.00) {
            dicline++;
        } else {
            sumGrades += currentGrade;
        }
        if (dicline > 1) {
            console.log(`${name} has been excluded at ${index-1} grade`);
            diclinebl = false;
            break;
        }
        index++;
    }
    let averageGrade = sumGrades / 12;
    if (diclinebl) { console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`); }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])