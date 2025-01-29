function emojiDetector(arrStr) {
    let str = arrStr.shift();
    //let pattern = /([*:]{2})[A-Z][a-z]{2,}\1/g;
    let pattern = /(:{2}|\*{2})[A-Z][a-z]{2,}\1/g;
    let patternNum = /\d/g;
    let matchesNum = str.match(patternNum);
    let multiplesNum = 1;
    for (let num of matchesNum) {
        multiplesNum *= +num;
    }
    console.log(`Cool threshold: ${multiplesNum}`);

    let matches = str.match(pattern);
    console.log(`${matches.length} emojis found in the text. The cool ones are:`);
   

    for (let cool of matches) {
        let sumAscii = 0;

        for (let letter of cool) {
            if (letter !== ':' && letter !== '*') {
                let ascii = letter.charCodeAt(0);
                sumAscii += ascii;
            }
        }

        if (sumAscii >= multiplesNum) {
            console.log(cool);
        }

    }

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
//emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
//emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])

/*
Cool threshold: 540
4 emojis found in the text. The cool ones are:
::Smiley:: 
**Tigers** 
::Mooning::
 */