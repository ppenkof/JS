function solve() {
  const infoSpan = document.querySelector("#info > span");
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  let url = "http://localhost:3030/jsonstore/bus/schedule";
  let arr = [];
  let currUrl = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).forEach((el) => {
        url = `http://localhost:3030/jsonstore/bus/schedule/${el}`;
        arr.push(url);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  function depart() {
    departBtn.disabled = true;
    arriveBtn.disabled = false;
    if (currUrl === "") {
      infoSpan.textContent = "Next stop Depot";
    } else {

      fetch(currUrl)
        .then((res) => res.json())
        .then((data) => {
          infoSpan.textContent = `Next stop ${data.name}`;
        })
        .catch((err) => {
          infoSpan.textContent = "Error";
          departBtn.disabled = true;
          arriveBtn.disabled = true;
        });
    }
    currUrl =='http://localhost:3030/jsonstore/bus/schedule/depot'?window.location.reload():currUrl = arr.shift();;
    
  }

  function arrive() {
    departBtn.disabled = false;
    arriveBtn.disabled = true;
    if (infoSpan.textContent === "Next stop Depot") {
      infoSpan.textContent = "Arriving at Depot";
    } else {
      fetch(currUrl)
        .then((res) => res.json())
        .then((data) => {
          infoSpan.textContent = `Arriving at ${data.name}`;
        })
        .catch((err) => {
          infoSpan.textContent = "Error";
          departBtn.disabled = true;
          arriveBtn.disabled = true;
        });
    }
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
