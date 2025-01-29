function password(params) {
    let username=params[0];
    let password=params[1];
    let currentPass=params[2];
    let index=3;
    while (currentPass!==password) {
        currentPass=params[index];
        index++;  
    }
    console.log(`Welcome ${username}!`);
}
password(["Gosho", "secret", "secret"])