const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const monthNames = [
    "Jan.",
    "Feb",
    "Mar.",
    "Apr.",
    "May",
    "jun.",
    "jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  today.innerText = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
