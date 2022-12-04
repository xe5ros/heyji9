function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((resopnse) => resopnse.json())
    .then((data) => {
      const wheater = document.querySelector("#weather p:first-child");
      const city = document.querySelector("#weather p:last-child");
      city.innerText = data.name;
      wheater.innerText = `${data.weather[0].main}, ${data.main.temp}℃`;
    });
}
function onGeoErr() {
  alert("Can't");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
