function passwordGuess(data) {
    let pass = data[0];

    if (pass === "s3cr3t!P@ssw0rd") {
        console.log('Welcome');
    } else {
        console.log('Wrong password');
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"])