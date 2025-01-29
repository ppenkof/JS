function walking(params) {
    index = 0;
    let steps = params[index];
    let sumSteps = 0;
    let goal = 10000;
 
    while (sumSteps <= goal) {
        steps = params[index];
        if (steps === "Going home") {
            index++;
            steps = Number(params[index]);
             sumSteps += steps;
            break;
        } 
        steps = Number(params[index]);
        sumSteps += steps;
        index++;
    }

    if(sumSteps >= goal){
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps - goal} steps over the goal!`);
    }else{console.log(`${goal - sumSteps} more steps to reach goal.`);}
}
walking(["125", "250", "4000", "30", "2678", "4682"]);