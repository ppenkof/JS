function login(params) {

    let user = params[0];
    let password = '';
    let tryCount = 1;

    for (let i = user.length - 1; i >= 0; i--) {
        let currentChar = user[i];
        password += currentChar;
    }
    for (let j = 1; j < params.length; j++) {

        let currentPass = params[j];

        if (currentPass === password) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            if (tryCount < 4) {
                console.log('Incorrect password. Try again.');
            } else {
                console.log(`User ${user} blocked!`);
                break;
            }
        }
        tryCount++;
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
login(['momo','omom'])
login(['sunny','rainy','cloudy','sunny','not sunny'])