const errorBoxDiv = document.getElementById("errorBox");

export default function errorHandling(error) {
  console.log(error);
  errorBoxDiv.children[0].textContent = error;
  errorBoxDiv.style.display = "inline-block";

  setTimeout(() => {
    errorBoxDiv.style.display = "none";
    errorBoxDiv.children[0].textContent = "";
  }, 3000);
}
