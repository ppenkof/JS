function workingHours(params) {
    let hour = Number(params[0]);
    let dayOfWeek = params[1];

    if (dayOfWeek==="Sunday"){
        console.log("closed");  
    } else{
        if (hour>=10 && hour<=18){ 
            console.log("open");
        }else {
            console.log("closed");
        }
    }
}
workingHours(["20", "Friday"])