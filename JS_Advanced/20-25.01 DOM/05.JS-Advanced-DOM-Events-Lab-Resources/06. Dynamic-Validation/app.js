function validate() {
  const inputEl = document.getElementById("email");

  inputEl.addEventListener("change", (event) => {
    const emailText = event.currentTarget.value;

    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (pattern.test(emailText)) {
      event.currentTarget.classList.remove("error");
    } else {
      event.currentTarget.classList.add("error");
    }
  });
}
