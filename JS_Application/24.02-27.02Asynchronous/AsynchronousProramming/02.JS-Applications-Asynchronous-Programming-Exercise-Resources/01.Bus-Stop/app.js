function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const busesUlEl = document.getElementById("buses");
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
  busesUlEl.innerHTML = "";
  /*Note: The service will respond with valid data to 
    IDs 1287, 1308, 1327 and 2334.*/
  if (stopId !== "") {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        stopName.textContent = data.name;
        //console.log(data);
        Object.entries(data.buses).forEach(([bus, time]) => {
          const liEl = document.createElement("li");
          liEl.textContent = `Bus ${bus} arrives in ${time} minutes`;
          busesUlEl.appendChild(liEl);
        });
      })
      .catch((error) => {
        stopName.textContent = "Error";
      });
  }
}
