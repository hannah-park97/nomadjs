const WEATHERAPI_KEY = "weather_key"; //"b531c64d174ce98adeec3";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHERAPI_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            //city.innerText = data.name;
            //weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = "Seoul";
            weather.innerText = "Clear / 19.61 ";
        });
}
function onGeoError() {
    alert("Cant,t find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
