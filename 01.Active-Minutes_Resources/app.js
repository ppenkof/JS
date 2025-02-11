window.addEventListener("load", solve);

function solve() {
  let activityType = document.getElementById("type");
  let intensityType = document.getElementById("intensity");
  let caloriesBurner = document.getElementById("calories");
  let durationMin = document.getElementById("duration");
  let dateElement = document.getElementById("date");
  let addActitityBtn = document.getElementById("add-activity");
  let ulListElement = document.getElementById("preview-activity");
  let tableBody = document.getElementById("activities-table");

  addActitityBtn.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    if (
      activityType.value == "" ||
      intensityType.value == "" ||
      caloriesBurner.value == "" ||
      durationMin.value == "" ||
      dateElement.value == ""
    ) {
      return;
    }
    // console.log(
    //   activityType.value,
    //   intensity.value,
    //   caloriesBurner.value,
    //   durationMin.value,
    //   date.value
    // );

    let articleEl = document.createElement("article");
    let liEl = document.createElement("li");
    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");
    //--------------------------------------
    let activity = document.createElement("p");
    activity.textContent = `Activity: ${activityType.value}`;

    let intensity = document.createElement("p");
    intensity.textContent = `Intensity: ${intensityType.value}`;

    let duration = document.createElement("p");
    duration.textContent = `Duration: ${durationMin.value}`;

    let date = document.createElement("p");
    date.textContent = `Date: ${dateElement.value}`;

    let calories = document.createElement("p");
    calories.textContent = `Calories: ${caloriesBurner.value}`;

    let btnEdit = document.createElement("button");
    btnEdit.setAttribute("class", "edit-botton");
    btnEdit.textContent = "Edit";

    let btnNext = document.createElement("button");
    btnNext.setAttribute("class", "next-botton");
    btnNext.textContent = "Next";
    //--------------------------------------
    articleEl.appendChild(activity);
    articleEl.appendChild(intensity);
    articleEl.appendChild(duration);
    articleEl.appendChild(date);
    articleEl.appendChild(calories);

    btnContainer.appendChild(btnEdit);
    btnContainer.appendChild(btnNext);

    liEl.appendChild(articleEl);
    liEl.appendChild(btnContainer);

    ulListElement.appendChild(liEl);

    let editedActivityType = activityType.value;
    let editedIntensityType = intensityType.value;
    let editedDurationMin = durationMin.value;
    let editedDateElement = dateElement.value;
    let editedCaloriesBurner = caloriesBurner.value;

    activityType.value = "";
    intensityType.value = "";
    durationMin.value = "";
    dateElement.value = "";
    caloriesBurner.value = "";

    addActitityBtn.disabled = true;

    btnEdit.addEventListener("click", onEdit);

    function onEdit() {
      activityType.value = editedActivityType;
      intensityType.value = editedIntensityType;
      durationMin.value = editedDurationMin;
      dateElement.value = editedDateElement;
      caloriesBurner.value = editedCaloriesBurner;

      liEl.remove();
      addActitityBtn.disabled = false;
    }

    btnNext.addEventListener("click", onNext);

    function onNext() {
      let btnDelete = document.createElement("button");
      btnDelete.setAttribute("class", "delete-btn");
      btnDelete.textContent = "Delete";
      //------------------------
      let trElement = document.createElement("tr");

      let typeCellTd = document.createElement("td");
      typeCellTd.textContent = editedActivityType;
      typeCellTd.setAttribute("class", "type-cell");

      let durationCellTd = document.createElement("td");
      durationCellTd.textContent = editedDurationMin;
      durationCellTd.setAttribute("class", "duration-cell");

      let caloriesCellTd = document.createElement("td");
      caloriesCellTd.textContent = editedCaloriesBurner;
      durationCellTd.setAttribute("class", "calories-cell");

      let dateCellTd = document.createElement("td");
      dateCellTd.textContent = editedDateElement;
      dateCellTd.setAttribute("class", "date-cell");

      let intensityCellTd = document.createElement("td");
      intensityCellTd.textContent = editedIntensityType;
      intensityCellTd.setAttribute("class", "intensity-cell");

      let btnDeleteTd = document.createElement("td");
      btnDeleteTd.setAttribute("class", "bnt-cell");
      btnDeleteTd.appendChild(btnDelete);
      //--------------------------------------
      trElement.appendChild(typeCellTd);
      trElement.appendChild(durationCellTd);
      trElement.appendChild(caloriesCellTd);
      trElement.appendChild(dateCellTd);
      trElement.appendChild(intensityCellTd);
      trElement.appendChild(btnDeleteTd);

      tableBody.appendChild(trElement);

      liEl.remove();
      addActitityBtn.disabled = false;

      btnDelete.addEventListener('click', onDelete);

      function onDelete(){
        let trElement=btnDelete.closest('tr');
        trElement.remove();
      }
    }
  }
}
