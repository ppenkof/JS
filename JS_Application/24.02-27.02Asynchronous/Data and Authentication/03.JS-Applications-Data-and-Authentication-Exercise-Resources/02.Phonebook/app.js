function attachEvents() {
  const url = "http://localhost:3030/jsonstore/phonebook";
  const loadBtn = document.getElementById("btnLoad");
  const createBtn = document.getElementById("btnCreate");
  const phonebookUlEl = document.getElementById("phonebook");
  const personEl = document.getElementById("person");
  const phoneEl = document.getElementById("phone");

  loadBtn.addEventListener("click", loadPhonebook);

  function loadPhonebook() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        phonebookUlEl.innerHTML = "";
        Object.values(data).forEach((phone) => {
           //console.log(phone._id);
          const li = document.createElement("li");
          li.textContent = `${phone.person}: ${phone.phone}`;

          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";

          li.appendChild(deleteBtn);
          phonebookUlEl.appendChild(li);

          deleteBtn.addEventListener("click", () => {
            //console.log(phone._id);
            fetch(url + "/" + phone._id, { method: "DELETE" }).catch((error) =>
              console.error(error)
            );
          });
        });
      })
      .catch((error) => console.error(error));
  }

  createBtn.addEventListener("click", createPhone);

  function createPhone() {
    const person = personEl.value;
    const phone = phoneEl.value;

    if (person == "" || phone == "") {
      return;
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ person, phone }),
    });
    personEl.value = "";
    phoneEl.value = "";
  }
}

attachEvents();
