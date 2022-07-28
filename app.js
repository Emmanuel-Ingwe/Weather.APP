// axios.get('http://google.com')
//     .then(({ data }) => {
//         console.log(data);
//         for (let google of data.results) {
//             console.log(google.name);
//         }
//         console.log(google.next);
//     });

const iconElement = document.querySelector('.weather-icon');
const descElement = document.querySelector('.temperature-description');
const tempElement = document.querySelector('.temperature-value p');
const locationElement = document.querySelector('.location p');
const notificationElement = document.querySelector('.notification');

// APP DATA
const weather = {
};
weather.temperature = {
    unit: 'celcius'
};


const KELVIN = 273;

const key = 'AIzaSyCw4O1bJPEFlEHln2pjPvo41mEBGj0biQA';

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = "<p> Doesn't support Maps</p>";
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}


function showError(error) {
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> ${error.message}`;
}

function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api).then(function (response) {
        let data = response.json();
        return data;
    })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function () {
            displayWeather();
        });
}

function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}* <span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// const uluru = { latitude, longitude };

// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: uluru,

//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         latitude, longitude
//     });
//     setPosition();
// }

// window.initMap = initMap;