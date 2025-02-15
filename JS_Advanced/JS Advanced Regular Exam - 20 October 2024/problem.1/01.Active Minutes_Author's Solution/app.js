window.addEventListener("load", solve);

function solve() {
  let typeElement = document.getElementById("type");
  let intesityElement = document.getElementById("intensity");
  let durationElement = document.getElementById("duration");
  let dateElement = document.getElementById("date");
  let caloriesElement = document.getElementById("calories");
  let btnElement = document.getElementById("add-activity");
  let previewListElement = document.getElementById("preview-activity");
  let tableBodyElement = document.getElementById("activities-table");


  btnElement.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    if (
      typeElement.value == "" ||
      intesityElement.value == "" ||
      durationElement.value == "" ||
      dateElement.value == "" ||
      caloriesElement.value == ""
    ) {
      return;
    }

    let articleElementInfo = document.createElement("article");
    let liElementInfo = document.createElement("li");
    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    let activity = document.createElement("p");
    activity.textContent = `Activity: ${typeElement.value}`;

    let intensity = document.createElement("p");
    intensity.textContent = `Intensity: ${intesityElement.value}`;

    let duration = document.createElement("p");
    duration.textContent = `Duration: ${durationElement.value} min.`;

    let date = document.createElement("p");
    date.textContent = `Date: ${dateElement.value}`;

    let calories = document.createElement("p");
    calories.textContent = `Calories: ${caloriesElement.value} `;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "next-btn");
    nextBtn.textContent = "Next";

    articleElementInfo.appendChild(activity);
    articleElementInfo.appendChild(intensity);
    articleElementInfo.appendChild(duration);
    articleElementInfo.appendChild(date);
    articleElementInfo.appendChild(calories);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(btnContainer);

    previewListElement.appendChild(liElementInfo);

    let edittypeElement = typeElement.value;
    let editintesityElement = intesityElement.value;
    let editeddurationElement = durationElement.value;
    let editeddateElement = dateElement.value;
    let editCaloriesElement = caloriesElement.value;

    typeElement.value = "";
    intesityElement.value = "";
    durationElement.value = "";
    dateElement.value = "";
    caloriesElement.value = "";

    btnElement.disabled = true;

    editBtn.addEventListener("click", onEdit);

    function onEdit() {
      typeElement.value = edittypeElement;
      intesityElement.value = editintesityElement;
      durationElement.value = editeddurationElement;
      dateElement.value = editeddateElement;
      caloriesElement.value = editCaloriesElement;

      liElementInfo.remove();
      btnElement.disabled = false;
    }

    nextBtn.addEventListener("click", onNext);

    function onNext() {

      let deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("class", "delete-btn");
      deleteBtn.textContent = "Delete";

      let trElement = document.createElement("tr");

      let typeTd = document.createElement("td");
      typeTd.textContent = edittypeElement;
      typeTd.setAttribute("class", "type-cell");


      let IntensityTd = document.createElement("td");
      IntensityTd.textContent = editintesityElement;
      IntensityTd.setAttribute("class", "intensity-cell");

      let caloriesTd = document.createElement("td");
      caloriesTd.textContent = editCaloriesElement;
      caloriesTd.setAttribute("class", "calories-cell");

      let durationTd = document.createElement("td");
      durationTd.textContent = editeddurationElement;
      durationTd.setAttribute("class", "duration-cell");


      let dateTd = document.createElement("td");
      dateTd.textContent = editeddateElement;
      dateTd.setAttribute("class", "date-cell");


      let btnTd = document.createElement("td");
      btnTd.appendChild(deleteBtn);
      btnTd.setAttribute("class", "btn-cell");



      trElement.appendChild(typeTd);
      trElement.appendChild(durationTd);
      trElement.appendChild(caloriesTd);
      trElement.appendChild(dateTd);
      trElement.appendChild(IntensityTd);
      trElement.appendChild(btnTd);

      tableBodyElement.appendChild(trElement);
      liElementInfo.remove();
      btnElement.disabled = false;

      deleteBtn.addEventListener("click", onDelete);

      function onDelete() {
        let trElement = deleteBtn.closest("tr");
        trElement.remove();
      }
    }
  }
}
