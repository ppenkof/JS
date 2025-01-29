function moving(params) {
        let w = Number(params[0]);
        let l = Number(params[1]);
        let h=Number(params[2])
        let index = 3;
        let moving = params[index];
        let volume = w * l*h;
        let isFinished = true;
    
        while (volume > 0) {
            moving = params[index];
            if (moving !== "Done") {
                moving = Number(params[index]);
            } else {
                console.log(`${volume} Cubic meters left.`);
                isFinished = false;
                break;
            }
            volume -= moving;
            index++;
        }
        if (isFinished) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
        } 
    }
    moving(["10",

    "1",
    
    "2",
    
    "4",
    
    "6",
    
    "Done"])