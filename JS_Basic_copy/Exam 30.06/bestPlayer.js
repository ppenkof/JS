function bestPlayer(params) {
    let index = 0;
    let player = params[0];
    let end = params[index];
    let goals = Number(params[1]);
    let previousResult = 0;
    let maxGoals=0;


    while (end != "END") {
        end = params[index];
        if (goals >= 10) {
            break;
        }  
        if (end === "END") { break; }
        player = params[index];
        index++
        goals = Number(params[index]);
        if (previousResult <= goals){
            maxGoals=goals;
        }else if(maxGoals===previousResult){
            player = params[0];
            break;
        }else{
            maxGoals=previousResult;
        }
        previousResult = goals;
        index++;
    }
    console.log(`${player} is the best player!`);
    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}
bestPlayer(["Neymar",
"3",
"Ronaldo",
"10",
"Messi",
"2",
"END"])