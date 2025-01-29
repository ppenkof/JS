function walking(params) {
    index = 0;
    let steps = params[index];
    //index++;
    let sumSteps = 0;
    let goal = 10000;
    let isGoingHome = true;


    while (steps !== "Going home") {
        steps = params[index];

        if (steps === "Going home") {
            index++;
            steps = Number(params[index])
            sumSteps += steps;
            isGoingHome = false;
            console.log(`${sumSteps - goal} more steps to reach goal.`);
        }
        steps = Number(params[index]);
        sumSteps += steps;
        if (sumSteps >= goal) {
            //sumSteps += steps;
            isGoingHome = false;
            break;
        }
        index++;
    }

    if (isGoingHome) {
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps - goal} steps over the goal!`);
    }
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);