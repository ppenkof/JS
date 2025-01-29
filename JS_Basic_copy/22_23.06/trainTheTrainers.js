function trainTheTrainers(params) {
    let judges = Number(params[0]);
    //let firstCycle=judges;
    let index = 0;
    index++;
    let presentation = params[index];
    index++;
    let assesments = Number(params[index]);
    let averagePresentation = 0;
    let sumPresentation = 0;
    let averageCommon = 0;
    let sumCommon=0;
    let indexSum=0;

    while (presentation != "Finish") {
       indexSum++;
        for (let i=1; i <= judges; i++) {
            assesments = Number((params[index]));
            index++;
            sumPresentation += assesments;
        }
        averagePresentation= sumPresentation/judges;
        sumCommon+=averagePresentation;
        console.log(`${presentation} - ${averagePresentation.toFixed(2)}.`);
        presentation = params[index];
        index++;
        sumPresentation=0;
        averagePresentation=0;
    }
    averageCommon =sumCommon/indexSum;
    console.log(`Student's final assessment is ${ averageCommon.toFixed(2)}.`);
}
//trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"])
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])
//trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"])