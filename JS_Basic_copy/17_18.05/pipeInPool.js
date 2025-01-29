function pipeInPool(params) {
    let poolVolume = Number(params[0]);
    let flowP1 = Number(params[1]);
    let flowP2 = Number(params[2]);
    let workerLeaving = Number(params[3]);
    let fullingP1 = (workerLeaving * flowP1) // poolVolume * 100;
    let fullingP2 = (workerLeaving * flowP2) // poolVolume * 100;
    let fullingPool = fullingP1 + fullingP2;
    let fullingPoolpercents = (fullingP1 + fullingP2) / poolVolume * 100;
    let fullingP1percents = fullingP1 / fullingPool * 100;
    let fullingP2percents = fullingP2 / fullingPool * 100;
    
    if (fullingPoolpercents <= 100) {
        console.log(`The pool is ${fullingPoolpercents.toFixed(2)}% full. Pipe 1: ${fullingP1percents.toFixed(2)}%. Pipe 2: ${fullingP2percents.toFixed(2)}%.`);
    } else {
        console.log(`For ${workerLeaving.toFixed(2)} hours the pool overflows with ${((workerLeaving * (flowP1 + flowP2)) - poolVolume).toFixed(2)} liters.`);
    }
}
pipeInPool(["2000", "150", "100", "3"])