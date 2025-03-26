function lockedProfile() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  fetch("http://localhost:3030/jsonstore/advanced/profiles")
    .then((response) => response.json())
    .then((data) => {
      const users = Object.values(data);
      users.forEach((user, i) => {
        const profileDivEl = document.createElement("div");
        profileDivEl.className = "profile";

        const profileIconImageEl = document.createElement("img");
        profileIconImageEl.className = "userIcon";
        profileIconImageEl.setAttribute("src", "./iconProfile2.png");

        const lockLabelEl = document.createElement("label");
        lockLabelEl.textContent = "Lock";

        const lockInputEl = document.createElement("input");
        lockInputEl.setAttribute("type", "radio");
        lockInputEl.setAttribute("name", `user${i + 1}Locked`);
        lockInputEl.value = "lock";
        lockInputEl.checked = true;

        const unlockLabelEl = document.createElement("label");
        unlockLabelEl.textContent = "Unlock";

        const unlockInputEl = document.createElement("input");
        unlockInputEl.setAttribute("type", "radio");
        unlockInputEl.setAttribute("name", `user${i + 1}Locked`);
        unlockInputEl.value = "unlock";

        const brEl = document.createElement("br");
        const hr1El = document.createElement("hr");

        const labelUsernameEl = document.createElement("label");
        labelUsernameEl.textContent = "Username";

        const inputUsernameEl = document.createElement("input");
        inputUsernameEl.setAttribute("type", "text");
        inputUsernameEl.setAttribute("name", `user${i + 1}Username`);
        inputUsernameEl.value = user.username;
        inputUsernameEl.disabled = true;
        inputUsernameEl.readOnly = true;

        const usernameDivEl = document.createElement("div");
        usernameDivEl.className = `user${i + 1}Locked`;

        const hr2El = document.createElement("hr");

        const labelEmailEl = document.createElement("label");
        labelEmailEl.textContent = "Email";

        const inputEmailEl = document.createElement("input");
        inputEmailEl.setAttribute("type", "text");
        inputEmailEl.setAttribute("name", `user${i + 1}Username`);
        inputEmailEl.value = user.username;
        inputEmailEl.disabled = true;
        inputEmailEl.readOnly = true;

        const labelAgeEl = document.createElement("label");
        labelAgeEl.textContent = "Age";

        const inputAgeEl = document.createElement("input");
        inputAgeEl.setAttribute("type", "number");
        inputAgeEl.setAttribute("name", `user${i + 1}Age`);
        inputAgeEl.value = user.age;
        inputAgeEl.disabled = true;
        inputAgeEl.readOnly = true;

        const showMoreButton = document.createElement("button");
        showMoreButton.textContent = "Show more";

        usernameDivEl.appendChild(hr2El);
        usernameDivEl.appendChild(labelEmailEl);
        usernameDivEl.appendChild(inputEmailEl);
        usernameDivEl.appendChild(labelAgeEl);
        usernameDivEl.appendChild(inputAgeEl);

        profileDivEl.appendChild(profileIconImageEl);
        profileDivEl.appendChild(lockLabelEl);
        profileDivEl.appendChild(lockInputEl);
        profileDivEl.appendChild(unlockLabelEl);
        profileDivEl.appendChild(unlockInputEl);
        profileDivEl.appendChild(brEl);
        profileDivEl.appendChild(hr1El);
        profileDivEl.appendChild(labelUsernameEl);
        profileDivEl.appendChild(inputUsernameEl);
        profileDivEl.appendChild(usernameDivEl);
        profileDivEl.appendChild(showMoreButton);

        main.appendChild(profileDivEl);
        usernameDivEl.style.display = "none";

        showMoreButton.addEventListener("click", () => {
          if (unlockInputEl.checked) {
            if (showMoreButton.textContent === "Show more") {
              usernameDivEl.style.display = "block";
              showMoreButton.textContent = "Hide it";
            } else {
              usernameDivEl.style.display = "none";
              showMoreButton.textContent = "Show more";
            }
          }
        });
      });
    });
}
