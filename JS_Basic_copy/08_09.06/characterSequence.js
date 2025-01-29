function characterSequence(params) {
    let name = params[0];
    for (let i = 0; i < name.length; i++) {
        let letter = name[i];
        console.log(letter);
    }
}
characterSequence(["softuni"])