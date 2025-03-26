function attachEvents() {
  const url = "http://localhost:3030/jsonstore/forecaster";
  const locationEl = document.getElementById("location");
  const getWeatherBtn = document.getElementById("submit");
  const forecastDivEl = document.getElementById("forecast");
  const currentDivEl = document.getElementById("current");
  const upcomingDivEl = document.getElementById("upcoming");
  const symbols = {
    Sunny: "&#x2600;",
    "Partly sunny": " &#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
    Degrees: "&#176;",
  };
  //let location = "";

  getWeatherBtn.addEventListener("click", () => {
    //debugger;
    //forecastDivEl.innerHTML!=''?forecastDivEl.innerHTML:null;
    // upcomingDivEl.innerHTML = "";
    // currentDivEl.innerHTML = "";

    fetch(url + "/locations")
      .then((response) => response.json())
      .then((data) => {
        let location = data.find((x) => x.name === locationEl.value);
        //console.log(location);
        // if (!location) {
        //   window.location.reload();
        //   return;
        // }

        //   .catch((error) => {
        //     console.log(error);
        //   });
        //console.log(`${url}/today/${location.code}`);
        fetch(`${url}/today/${location.code}`)
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);

            // beging of the current forecast
            const forcastDiv = document.createElement("div");
            //forcastDiv.innerHTML!=''?forcastDiv.innerHTML='':null;
            forcastDiv.className = "forecasts";

            const spanSymbolEl = document.createElement("span");
            spanSymbolEl.className = "condition symbol";
            spanSymbolEl.innerHTML = symbols[data.forecast.condition];

            const spanConditionEl = document.createElement("span");
            spanConditionEl.className = "condition";

            //******************* */
            const spanLocationEl = document.createElement("span");
            spanLocationEl.className = "forecast-data";
            spanLocationEl.textContent = data.forecast.name;

            const spanDegreesEl = document.createElement("span");
            spanDegreesEl.className = "forecast-data";
            spanDegreesEl.innerHTML =
              data.forecast.low +
              symbols.Degrees +
              "/" +
              data.forecast.high +
              symbols.Degrees;

            const conditionSpanEl = document.createElement("span");
            conditionSpanEl.className = "forecast-data";
            conditionSpanEl.textContent = data.forecast.condition;
            //***************************** */

            spanConditionEl.appendChild(spanLocationEl);
            spanConditionEl.appendChild(spanDegreesEl);
            spanConditionEl.appendChild(conditionSpanEl);

            forcastDiv.appendChild(spanSymbolEl);
            forcastDiv.appendChild(spanConditionEl);

            currentDivEl.appendChild(forcastDiv);
            //end of the current forecast

            //   .catch((error) => {
            //     console.log(error);
            //   });

            //beginning of the upcoming forecast
            //const forcast3Div = document.createElement("div");

            fetch(`${url}/upcoming/${location.code}`)
              .then((response) => response.json())
              .then((data) => {
                const forcast3Div = document.createElement("div");
                forcast3Div.className = "forecast-info";
                data.forecast.forEach((threeDayForcast) => {
                  //const forcast3Div = document.createElement("div");
                  //forcast3Div.className = "forecast-info";

                  const upcomingSpanEl = document.createElement("span");
                  upcomingSpanEl.className = "upcoming";

                  const spanSymbolEl = document.createElement("span");
                  spanSymbolEl.className = "symbol";
                  spanSymbolEl.innerHTML = symbols[threeDayForcast.condition];

                  const spanDegreesEl = document.createElement("span");
                  spanDegreesEl.className = "forecast-data";
                  spanDegreesEl.innerHTML =
                    threeDayForcast.low +
                    symbols.Degrees +
                    "/" +
                    threeDayForcast.high +
                    symbols.Degrees;

                  const conditionSpanEl = document.createElement("span");
                  conditionSpanEl.className = "forecast-data";
                  conditionSpanEl.textContent = threeDayForcast.condition;

                  upcomingSpanEl.appendChild(spanSymbolEl);
                  upcomingSpanEl.appendChild(spanDegreesEl);
                  upcomingSpanEl.appendChild(conditionSpanEl);

                  forcast3Div.appendChild(upcomingSpanEl);
                });
                upcomingDivEl.appendChild(forcast3Div);
                //end of the upcoming forecast
              });
          });
      })
      .catch((error) => {
        console.log(error);
      });

    //upcomingDivEl.appendChild(forcastDiv);
    forecastDivEl.style.display = "block";
    //console.log("This is a forcastEl" + forcast3Div.textContent);
  });
}
attachEvents();
