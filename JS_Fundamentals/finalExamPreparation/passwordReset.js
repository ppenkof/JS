function passwordReset(arrStr) {
    let text = arrStr.shift();
    let currPass = '';
    let cmd = arrStr.shift();

    while (cmd !== 'Done') {
        let item = cmd.split(' ').filter(a => a !== '');
        let action = item.shift();
        if (action === 'TakeOdd') {

            for (let ch = 0; ch < text.length; ch++) {
                let char = text[ch];
                if (ch % 2 !== 0) {
                    currPass += char;
                }
            }
            console.log(currPass);
            text = currPass;

        } else if (action === 'Cut') {

            let startIndex = Number(item.shift());
            let len = Number(item.shift());
            let cutting = text.substring(startIndex, startIndex + len);

            let index = text.indexOf(cutting);

            if (index > -1) {
                //currPass = currPass.substring(0, index) + currPass.substring(index + len);
                text = text.replace(cutting, '');
            }
            console.log(text);

        } else if (action === 'Substitute') {

            let [substring, substitute] = item;
            let index = text.indexOf(substring);

            if (index === -1) {
                console.log("Nothing to replace!");
            } else {

                while (index !== -1) {
                    //currPass = currPass.substring(0, index) + substitute + currPass.substring(index + substitute.length + 1);
                    text = text.replace(substring, substitute);
                    index = text.indexOf(substring);
                }
                console.log(text);
            }
        }

        cmd = arrStr.shift();
    }

    console.log(`Your password is: ${text}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

/*icecream::hot::summer
icecream::hot::mer
icecream-hot-mer
Nothing to replace!
Your password is: icecream-hot-mer
*/

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
