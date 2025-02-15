window.addEventListener("load", solve);

function solve() {
  let colorElement = document.getElementById("colors");
  let modelElement = document.getElementById("motorcycles");
  let nameElement = document.getElementById("full-name");
  let emailElement = document.getElementById("email");
  let dateTimeElement = document.getElementById("datetime");
  let btnElement = document.getElementById("test-ride-btn");
  let previewListElement = document.getElementById("preview-list");
  let completeListElement = document.getElementById("complete-list");
  let dataViewElement = document.querySelector(".data-view");

  btnElement.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    if (
      colorElement.value == "" ||
      modelElement.value == "" ||
      nameElement.value == "" ||
      emailElement.value == "" ||
      dateTimeElement.value == ""
    ) {
      return;
    }

    let articleElementInfo = document.createElement("article");
    let liElementInfo = document.createElement("li");
    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    let color = document.createElement("p");
    color.textContent = `Color: ${colorElement.value}`;

    let model = document.createElement("p");
    model.textContent = `Model: ${modelElement.value}`;

    let fullName = document.createElement("p");
    fullName.textContent = `For: ${nameElement.value}`;

    let email = document.createElement("p");
    email.textContent = `Contact: ${emailElement.value}`;

    let time = document.createElement("p");
    time.textContent = `Test Ride On: ${dateTimeElement.value}`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "next-btn");
    nextBtn.textContent = "Next";

    articleElementInfo.appendChild(color);
    articleElementInfo.appendChild(model);
    articleElementInfo.appendChild(fullName);
    articleElementInfo.appendChild(email);
    articleElementInfo.appendChild(time);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(btnContainer);

    previewListElement.appendChild(liElementInfo);

    let editColorElement = colorElement.value;
    let editModelElement = modelElement.value;
    let editedNameElement = nameElement.value;
    let editedEmailElement = emailElement.value;
    let editTimeElement = dateTimeElement.value;

    colorElement.value = "";
    modelElement.value = "";
    nameElement.value = "";
    emailElement.value = "";
    dateTimeElement.value = "";

    btnElement.disabled = true;

    editBtn.addEventListener("click", onEdit);

    function onEdit() {
      colorElement.value = editColorElement;
      modelElement.value = editModelElement;
      nameElement.value = editedNameElement;
      emailElement.value = editedEmailElement;
      dateTimeElement.value = editTimeElement;

      liElementInfo.remove();
      btnElement.disabled = false;
    }

    nextBtn.addEventListener("click", onNext);

    function onNext() {
      let liElementconfirm = document.createElement("li");

      let articleElementContinue = document.createElement("article");
      articleElementContinue = articleElementInfo;

      let completeBtn = document.createElement("button");
      completeBtn.setAttribute("class", "complete-btn");
      completeBtn.textContent = "Complete";

      articleElementContinue.appendChild(completeBtn);
      liElementconfirm.appendChild(articleElementContinue);

      liElementInfo.remove();

      completeListElement.appendChild(liElementconfirm);

      completeBtn.addEventListener("click", onComplete);

      function onComplete() {
        liElementconfirm.remove();

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
