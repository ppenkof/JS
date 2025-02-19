function solution() {
  let string = "";
  return {
    append(str) {
      string = string + str;
      return string;
    },

    removeStart(indexNum) {
      string = string.substring(indexNum);
      return string;
    },

    removeEnd(index) {
      string = string.substring(0, string.length-index);
      return string;
    },

    print() {
      console.log(string);
    },
  };
}
//   function append(str) {
//     return string + str;
//   }

//   function removeStart(indexNum) {
//     return string.substring(indexNum);
//   }

//   function removeEnd(index) {
// return string.substring(0,index+1);
//   }

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
//exp result = loa
let secondZeroTest = solution();
secondZeroTest.append('123'); 
secondZeroTest.append('45'); 
secondZeroTest.removeStart(2); 
secondZeroTest.removeEnd(1); 
secondZeroTest.print();