window.addEventListener('load', solution);

function solution() {
  let preferreScentType = document.getElementById("scent-type");
  let budgedElement = document.getElementById("budget");
  let occasionElement = document.getElementById("occasion");
  let brandPreferenceElement = document.getElementById("brand");
  let skinTypeElement = document.getElementById("skin-type");
  //debugger;
  let nextMainBtn = document.getElementById("next-btn");
  let preferenceListElement = document.getElementsByClassName("preference-list")[0];
  let confirmListElement = document.getElementsByClassName("confirm-list")[0];

  let sharePreference = document.getElementById("share-preference");
  let sharePreferencePar=document.getElementById('thanks-text')


  nextMainBtn.addEventListener("click", onMain);

  function onMain(e) {
    
    sharePreferencePar.textContent='';
    e.preventDefault();

    if (
      preferreScentType.value == "" ||
      budgedElement.value == "" ||
      occasionElement.value == "" ||
      brandPreferenceElement.value == "" ||
      skinTypeElement.value == ""
    ) {
      return;
    }
    
    // items creation
    let article = document.createElement("article");
    let listElement = document.createElement("li");
    // let buttonContainer = document.createElement("div");
    // buttonContainer.setAttribute("class", "btn-container");

    let preferreScentPar = document.createElement("p");
    preferreScentPar.textContent = `Scent Type: ${preferreScentType.value}`;

    let budgedPar = document.createElement("p");
    budgedPar.textContent = `Budged: ${budgedElement.value} $`;

    let occasionPar = document.createElement("p");
    occasionPar.textContent = `Occasion: ${occasionElement.value}`;

    let brandPreferencePar = document.createElement("p");
    brandPreferencePar.textContent = `Brand: ${brandPreferenceElement.value}`;

    let skinTypePar = document.createElement("p");
    skinTypePar.textContent = `Skin Type: ${skinTypeElement.value}`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let continueBtn = document.createElement("button");
    continueBtn.setAttribute("class", "continue-btn");
    continueBtn.textContent = "Continue";

    // item put in

    article.appendChild(preferreScentPar);
    article.appendChild(budgedPar);
    article.appendChild(occasionPar);
    article.appendChild(brandPreferencePar);
    article.appendChild(skinTypePar);

    // buttonContainer.appendChild(editBtn);
    // buttonContainer.appendChild(continueBtn);
    listElement.appendChild(article);
    listElement.appendChild(editBtn);
    listElement.appendChild(continueBtn);
    preferenceListElement.appendChild(listElement);

    let editedPreferrecentElementVal = preferreScentType.value;
    let editedBudgedElementVal = budgedElement.value;
    let editedOccasionElementVal = occasionElement.value;
    let editedBrandPreferenceElementVal = brandPreferenceElement.value;
    let editedSkinTypeElementVal = skinTypeElement.value;

//console.log(preferreScentType.value, occasionElement.value);

    preferreScentType.value = "";
    budgedElement.value = "";
    occasionElement.value = "";
    brandPreferenceElement.value = "";
    skinTypeElement.value = "";

    nextMainBtn.disabled = true;

    editBtn.addEventListener("click", onEdit);

    function onEdit() {
      preferreScentType.value = editedPreferrecentElementVal;
      budgedElement.value = editedBudgedElementVal;
      occasionElement.value = editedOccasionElementVal;
      brandPreferenceElement.value = editedBrandPreferenceElementVal;
      skinTypeElement.value = editedSkinTypeElementVal;

      listElement.remove();
      nextMainBtn.disabled = false;
    }

    continueBtn.addEventListener("click", onContinue);
    function onContinue() {
      let listElementContinue = document.createElement("li");
      let articleComleted = document.createElement("article");
      articleComleted = article;
      let confirmBtn = document.createElement("button");
      confirmBtn.setAttribute("class", "confirm-btn");
      confirmBtn.textContent = "Confirm";

      let cancelBtn = document.createElement("button");
      cancelBtn.setAttribute("class", "cancel-btn");
      cancelBtn.textContent = "Cancel";

      articleComleted.appendChild(cancelBtn);
      articleComleted.appendChild(confirmBtn);
      listElementContinue.appendChild(articleComleted);

      listElement.remove();
      confirmListElement.appendChild(listElementContinue);

      confirmBtn.addEventListener("click", onConfirm);

      function onConfirm() {

        sharePreferencePar.textContent = " Thank you for sharing your preferences!";
        listElementContinue.remove();
        nextMainBtn.disabled = false;
        
        }

        cancelBtn.addEventListener("click", onCancel);
        function onCancel() {

          nextMainBtn.disabled = false;
          window.location.reload();
          
      }
    }
  }
}

    
    
