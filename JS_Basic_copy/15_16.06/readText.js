function readText(params) {
    let index = 0;
    let word = params[index];

    while (word !== "Stop") {
        console.log(word);
        index++;
        word = params[index];    
    }
}
readText(["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"])