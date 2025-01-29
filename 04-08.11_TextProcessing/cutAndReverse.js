function cutAndReverse(text) {
    let midText=text.length/2;
    let semiTextArr1= text.substring(0,midText).split('').reverse().join('');
    let semiTextArr2= text.substring(midText).split('').reverse().join('');
    console.log(semiTextArr1);
    console.log(semiTextArr2);
    
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')