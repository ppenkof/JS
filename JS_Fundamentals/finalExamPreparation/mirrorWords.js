function mirrorWords(params) {
    let word = params.shift();
    let wordPattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;
    let wordMatches = word.match(wordPattern);
    let delimiter = /[@#]+/;
    let reverseArr = [];
    let symbolless = [];

    if (wordMatches) {
        for (let words of wordMatches) {
            let symbolMatches = words.split(delimiter).filter(x => x.length > 0);
            symbolless.push(symbolMatches[0], symbolMatches[1]);
        }

        for (let i = 0; i < symbolless.length; i++) {

            let currWord = symbolless[i];
            for (let l = symbolless.length - 1; l > i; l--) {
                let nextWord = symbolless[l];
                let revWord = nextWord
                    .split('')
                    .reverse()
                    .join('');

                if (currWord == revWord) {
                    reverseArr.push(currWord);
                    reverseArr.push(nextWord);

                }
            }
        }
    }

    let print = '';
    if (symbolless.length <= 1) {
        console.log("No word pairs found!");
    } else {

        console.log(`${Math.floor(symbolless.length / 2)} word pairs found!`);
        for (let i = 0; i < reverseArr.length; i += 2) {
            i === reverseArr.length - 2 ? print += `${reverseArr[i]} <=> ${reverseArr[i + 1]}` : print += `${reverseArr[i]} <=> ${reverseArr[i + 1]}, `;
        }
    }

    if (reverseArr.length <= 1) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:')
        console.log(print);
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
