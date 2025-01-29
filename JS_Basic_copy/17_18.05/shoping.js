function shoping(params) {
    let budged = Number(params[0]);
    let videoCards = Number(params[1]);
    let CPUs = Number(params[2]);
    let RAMs = Number(params[3]);
    let total = videoCards * 250 + CPUs * 0.35 * (videoCards * 250) + RAMs * 0.1 * (videoCards * 250);
    
    if (videoCards>CPUs){
        total = total*0.85;
    }

    if (budged>=total){
        console.log(`You have ${(budged-total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total-budged).toFixed(2)} leva more!`);
    }
} 
shoping(["900",

"2",

"1",

"3"])