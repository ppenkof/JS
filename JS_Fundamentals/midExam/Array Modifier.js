function arrayModifier(arrStr) {
    let arr = arrStr.shift().split(' ').map(x=>Number(x));
    let cmd = arrStr.shift();

    while (cmd !== 'end') {

        let cmdItems = cmd.split(' ');
        let action = cmdItems.shift();
        if (action == 'swap') {
            let [index1, index2] = cmdItems.map(Number);
            if (index1 !== index2 && index1 >= 0 && index2 < arr.length && index2 >= 0 && index1 < arr.length) {
                let element1 = arr[index1];
                let element2 = arr[index2];
                if (index1 < index2) {
                    arr.splice(index2, 1, element1);
                    arr.splice(index1, 1, element2);
                } else {
                    arr.splice(index1, 1, element2);
                    arr.splice(index2, 1, element1);
                }
            }

        } else if (action == 'multiply') {

            let [index1, index2] = cmdItems.map(Number);
            if (index1 !== index2 && index1 >= 0 && index2 < arr.length && index2 >= 0 && index1 < arr.length) {
                let element1 = arr[index1];
                let element2 = arr[index2];
                let result = element1 * element2;
                if (index1 < index2) {
                    //arr.splice(index2, 1);
                    arr.splice(index1, 1, result);
                } else {
                    arr.splice(index1, 1, result);
                    //arr.splice(index2, 1);
                }
            }

        } else if (action == 'decrease') {

            for (let i = 0; i < arr.length; i++) {
                arr[i]--;
            }

        }

        cmd = arrStr.shift();
    }

    console.log(arr.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
/*•	"swap {index1} {index2}" takes two elements and swap their places.
•	"multiply {index1} {index2}" takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
•	"decrease" decreases all elements in the array with 1*/

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  )