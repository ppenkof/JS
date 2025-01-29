function oldBook(params) {
    let favoriteBook = params[0];
    let index = 0;
    index++;
    let currentBook = params[index];
    let areNoMoreBooks = true;
    let count = index-1;

    while (currentBook !== favoriteBook) {
        if (currentBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${count} books.`);
            areNoMoreBooks = false;
            break;
        } else {
            index++;
            currentBook = params[index];
        }
        count++;
    }
    if (areNoMoreBooks) { console.log(`You checked ${count} books and found it.`) };
}
oldBook(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])