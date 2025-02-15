window.addEventListener("load", solve);

function solve() {
  let colorElement = document.getElementById("colors");
  let modelElement = document.getElementById("motorcycles");
  let dateTimeElement = document.getElementById("datetime");
  let personalNameElement = document.getElementById("full-name");
  let emailElement = document.getElementById("email");
  //debugger;
  let testDriveBtn = document.getElementById("test-ride-btn");
  let previewListElement = document.getElementById("preview-list");
  let completeListElement = document.getElementById("complete-list");

  let dataViewElement = document.querySelector(".data-view");

  testDriveBtn.addEventListener("click", onTestDrive);

  function onTestDrive(e) {
    e.preventDefault();
  //debugger;
    if (
      colorElement.value == "" ||
      modelElement.value == "" ||
      dateTimeElement.value == "" ||
      personalNameElement.value == "" ||
      emailElement.value == ""
    ) {
      return;
    }
    // items creation
    let article = document.createElement("article");
    let listElement = document.createElement("li");
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "btn-container");

    let colorPar = document.createElement("p");
    colorPar.textContent = `Color: ${colorElement.value}`;

    let modelPar = document.createElement("p");
    modelPar.textContent = `Model: ${modelElement.value}`;

    let dateTimePar = document.createElement("p");
    dateTimePar.textContent = `Test Ride On: ${dateTimeElement.value}`;

    let personalNamePar = document.createElement("p");
    personalNamePar.textContent = `For: ${personalNameElement.value}`;

    let emailPar = document.createElement("p");
    emailPar.textContent = `Contact: ${emailElement.value}`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "next-btn");
    nextBtn.textContent = "Next";

    // item put in

    article.appendChild(colorPar);
    article.appendChild(modelPar);
    article.appendChild(dateTimePar);
    article.appendChild(personalNamePar);
    article.appendChild(emailPar);

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(nextBtn);
    listElement.appendChild(article);
    listElement.appendChild(buttonContainer);
    previewListElement.appendChild(listElement);

    let editedColorElementVal = colorElement.value;
    let editedModelElementVal = modelElement.value;
    let editedDateTimeElementVal = dateTimeElement.value;
    let editedPersonalNameElementVal = personalNameElement.value;
    let editedEmailElementVal = emailElement.value;

console.log(colorElement.value, dateTimeElement.value);

    colorElement.value = "";
    modelElement.value = "";
    dateTimeElement.value = "";
    personalNameElement.value = "";
    emailElement.value = "";

    testDriveBtn.disabled = true;

    editBtn.addEventListener("click", onEdit);

    function onEdit() {
      colorElement.value = editedColorElementVal;
      modelElement.value = editedModelElementVal;
      dateTimeElement.value = editedDateTimeElementVal;
      personalNameElement.value = editedPersonalNameElementVal;
      emailElement.value = editedEmailElementVal;

      listElement.remove();
      testDriveBtn.disabled = false;
    }

    nextBtn.addEventListener("click", onNext);
    function onNext() {
      let listElementCompleted = document.createElement("li");
      let articleComleted = document.createElement("article");
      articleComleted = article;
      let completeBtn = document.createElement("button");
      completeBtn.setAttribute("class", "complete-btn");
      completeBtn.textContent = "Complete";

      articleComleted.appendChild(completeBtn);
      listElementCompleted.appendChild(articleComleted);

      listElement.remove();
      completeListElement.appendChild(listElementCompleted);

      completeBtn.addEventListener("click", onComplete);

      function onComplete() {
        listElementCompleted.remove();
        let confirmBtn = document.createElement("button");
        confirmBtn.setAttribute("class", "confirm-btn");
        confirmBtn.textContent = "Your Test Ride is Confirmed";
        dataViewElement.appendChild(confirmBtn);

        confirmBtn.addEventListener("click", onCancel);
        function onCancel() {
          window.location.reload();
        }
      }
    }
  }
}
