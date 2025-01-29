function oddOccurrence(str) {
    let Str = str.toLowerCase();
    let inputArr = Str.split(' ');
    let occurences = new Map();

    for (const word of inputArr) {
        if (occurences.has(word)) {
            occurences.set(word,occurences.get(word)+1);
        } else {
            occurences.set(word,1);
        }
    }

    let sorted = [];
    for (const [name, value] of occurences) {
        if (!(value % 2 == 0)) {
            sorted.push(name);
        }
    }
    console.log(sorted.join(' '));
}
oddOccurrence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')