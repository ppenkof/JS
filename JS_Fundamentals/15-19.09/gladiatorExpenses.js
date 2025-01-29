// You will receive 5 parameters to your function:
// The first parameter - lost fights count - is an integer in the range [0, 1000].
// The second parameter - helmet price - is the floating-point number in the range [0, 1000]. 
// The third parameter - sword price - is the floating-point number in the range [0, 1000]. 
// The fourth parameter - shield price - is the floating-point number in the range [0, 1000]. 
// The fifth parameter - armor price - is the floating-point number in the range [0, 1000]. 
// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired. 


function gladiatorExpenses(lostFigths, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let annualyExpenses = 0;
    let shieldBreak = 0;
    for (let i = 1; i <= lostFigths; i++) {
        if (i % 2 === 0) {
            annualyExpenses += helmetPrice;
        }
        if (i % 3 === 0) {
            annualyExpenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            annualyExpenses += shieldPrice;
            shieldBreak++;
        }
        if (shieldBreak % 2 === 0 && shieldBreak !== 0) {
            annualyExpenses += armorPrice;
            shieldBreak=0;
        }
    }
    console.log(`Gladiator expenses: ${annualyExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200    
)