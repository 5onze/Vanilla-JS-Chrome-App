const API_KEY = '4506ef4e290d6eda0264e94930e5bd60';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul,korea&appid=${API_KEY}&lang=kr&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tempIcon = document.querySelector('#weather .temp-icon');
      const temp = document.querySelector('#weather .temp');
      const city = document.querySelector('#weather .city');
      const icon = data.weather[0].icon;
      const img = document.createElement('img');
      city.innerText = `${data.name}-si`;
      temp.innerText = `${Math.floor(data.main.temp)}°`;
      tempIcon.prepend(img);
      img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      isLoaded = true;
    });
}
function onGeoError() {
  alert("Can't find you. NO weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
