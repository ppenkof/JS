function solve() {
  //debugger;
  let inputText = document.getElementById("text").value.toLowerCase();
  let namingConv = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  // console.log(inputText);
  // console.log(namingConv);
  // console.log(result);

  let inputArr = inputText.split(" ");
  let strResult = "";

  if (namingConv === "Camel Case") {
    strResult += inputArr[0];
    for (let i = 1; i < inputArr.length; i++) {
      strResult += inputArr[i][0].toUpperCase() + inputArr[i].slice(1);
    }
    result.textContent = strResult;
  } else if (namingConv === "Pascal Case") {
    for (let i = 0; i < inputArr.length; i++) {
      strResult += inputArr[i][0].toUpperCase() + inputArr[i].slice(1);
    }
    result.textContent = strResult;
  } else {
    result.textContent = "Error!";
  }
}
