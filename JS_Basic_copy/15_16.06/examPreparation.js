function examPreparation(params) {
    let index = 0;
    let numPoorGrades = Number(params[0]);
    index++;
    let taskName = params[index];
    index++;
    let currentGrade = Number(params[index]);
    let poorGradeCounter = 0;
    let sumGrades = 0;
    let isNeedAbreak = true;

    while (taskName !== "Enough") {
        if (currentGrade <= 4.00) { poorGradeCounter++; }
        if (poorGradeCounter === numPoorGrades) {
            console.log(`You need a break, ${poorGradeCounter} poor grades.`);
            isNeedAbreak = false;
            break;
        }
        sumGrades += currentGrade;
        index++;
        taskName = params[index];
        index++;
        currentGrade = Number(params[index]);
    }
    let problemNumber = (index-2) / 2;
    let averageGrade = sumGrades / problemNumber;

    if (isNeedAbreak) {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemNumber}`);
        console.log(`Last problem: ${params[index-3]}`);
    }
}
examPreparation(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])