function attachEventsListeners() {
  const dayInput = document.getElementById("days");
  const hourInput = document.getElementById("hours");
  const minuteInput = document.getElementById("minutes");
  const secondInput = document.getElementById("seconds");
  //debugger;
  document.querySelector("main").addEventListener("click", onConvert);
  
  function onConvert(el) {
    if (el.target.tagName === "INPUT" && el.target.type === "button") {
      let input = el.target.parentElement.querySelector('input[type="text"]');
      let inputVal = Number(input.value);

      if (isNaN(inputVal)) return;

      let period = convert(inputVal, input.id);

      dayInput.value = period.days;
      hourInput.value = period.hours;
      minuteInput.value = period.minutes;
      secondInput.value = period.seconds;
    }
  }

  let ration = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function convert(value, unit) {
    let inDays = value / ration[unit];

    return {
      days: inDays,
      hours: inDays * ration.hours,
      minutes: inDays * ration.minutes,
      seconds: inDays * ration.seconds,
    };
  }
}
