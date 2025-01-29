function schoolGrades(arr) {
    let grades = new Map();
    for (const gradeArg of arr) {
        let [name, ...rest] = gradeArg.split(' ');       
        if (!grades.has(name)) {
            grades.set(name, []);
        }
        for (const grade of rest) {
            grades.get(name).push(+grade);
        }
    }
    let sortedNames = Array.from(grades.entries())
        .sort(([keyA, valueA], [keyB, valueB]) => {
            return keyA.localeCompare(keyB);
        });
    for (const [student, grades] of sortedNames) {
        let averageGrade = 0;
        let sum = 0;
        for (const grade of grades) {
            sum += grade;
        }
        averageGrade = sum / grades.length;
        console.log(`${student}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])