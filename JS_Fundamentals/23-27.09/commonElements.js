function commonElements(arr1, arr2) {
    // for(let i=0;i<arr1.length;i++){
    //     let currentElement=arr1[i];
    //     if(arr2.includes(currentElement)){
    //         console.log(currentElement);
    //     }
    // }
    for (let i = 0; i < arr1.length; i++) {
        let currentElement = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(currentElement);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)