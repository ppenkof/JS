function countStringOccurrences(text, searchWord) {
    // let tempArr = text.split(' ');
     let count = 0;
    // for (let word of tempArr) {
    //     if (word === searchWord) {
    //         count++;
    //     }
    // }

    while(text.includes(searchWord)){
        text=text.replace(searchWord,'');
        
        count++;
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence',

    'is')