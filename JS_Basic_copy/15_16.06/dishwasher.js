function Dishwasher(params) {
    let detergent = Number(params[0]);
    let fullDetergent = detergent * 750;
    let index = 1;
    let dishes = params[index];
    let pots = params[index+2];
    let dishesQuantity = 0;
    let potsQuantity = 0;
    let dishesConsuption = 5;
    let potsConsuption = 15;
    let isFinished = true;

    while (fullDetergent >= 0) {
        if (index % 3 === 0) {
            pots = params[index];
            if (pots !== "End") {
                pots = Number(params[index]);
            } else {
                console.log("Detergent was enough!");
                console.log(`${dishesQuantity} dishes and ${potsQuantity} pots were washed.`);
                console.log(`Leftover detergent ${fullDetergent} ml.`);
                isFinished = false;
                break;
            }
            fullDetergent -= potsConsuption * pots;
            potsQuantity += pots;            
        } else {
            dishes = params[index];
            if (dishes !== "End") {
                dishes = Number(params[index]);
            } else {
                console.log("Detergent was enough!");
                console.log(`${dishesQuantity} dishes and ${potsQuantity} pots were washed.`);
                console.log(`Leftover detergent ${fullDetergent} ml.`);
                isFinished = false;
                break;

            }
            dishesQuantity += dishes;
            fullDetergent -= dishesConsuption * dishes;       
        }
        index++;
    }
    if (isFinished) {
        console.log(`Not enough detergent, ${Math.abs(fullDetergent)} ml. more necessary!`);
    }

}
Dishwasher(["1",
    "10",
    "15",
    "10",
    "12","13","30"])