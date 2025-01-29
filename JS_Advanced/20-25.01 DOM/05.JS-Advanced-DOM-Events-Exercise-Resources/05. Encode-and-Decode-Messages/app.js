function encodeAndDecodeMessages() {
  const buttons = Array.from(document.querySelectorAll("#main button"));
  const textHoldes = Array.from(document.querySelectorAll("#main textarea"));
  //console.log(textHoldes);
  buttons[0].addEventListener("click", sendAndEncode);
  buttons[1].addEventListener("click", decode);
  //debugger;
  function nextChar(ch) {
    return String.fromCharCode(ch.charCodeAt(0) + 1);
  }

  function previousChar(ch) {
    return String.fromCharCode(ch.charCodeAt(0) - 1);
  }

  function transform(text, fn) {
    return text.split("").map(fn).join("");
  }

  function sendAndEncode() {
    textHoldes[1].value = transform(textHoldes[0].value, nextChar);
    textHoldes[0].value = "";
  }

  function decode() {
    textHoldes[1].value = transform(textHoldes[1].value, previousChar);
    //console.log(textHoldes[1].value);
  }
}
