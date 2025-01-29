function oddOccurrence(str) {
    let Str = str.toLowerCase();
    let inputArr = Str.split(' ');
    let occurences = {};

    for (const word of inputArr) {
        if (word in occurences) {
            occurences[word]++;
        } else {
            occurences[word] = 1;
        }
    }

    let entries = Object.entries(occurences);
    let sorted = [];
    for (const [name, value] of entries) {
        if (!(value % 2 == 0)) {
            sorted.push(name);
        }
    }
    console.log(sorted.join(' '));
}
oddOccurrence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')