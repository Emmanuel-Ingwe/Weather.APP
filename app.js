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

const key = 'aaf17c644495a07bb97f1f4516133ec0';

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
    tempElement.innerHTML = `${weather.temperature.value}<sup>o</sup><span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

const latitudee = position.coords.latitude;
const longitudee = position.coords.longitude;

function initMap() {


    const options = {
        zoom: 8,
        center: { lat: 4.9757, lng: 8.3417 }
    };

    const map = new google.maps.Map(document.getElementById('map'), options);

    // google.maps.event.addListener('map', 'click', function (event) {
    //     addMarker({});
    // });

    // ADD MARkER
    const marker = new google.maps.Marker({
        position: { lat: 4.9757, lng: 8.3417 },
        map: map
    });

    const infoWindow = new google.maps.InfoWindow({
        content: '<h1>Na here you dey stay</h1>'
    });

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
}

// 0807 502 9111
// +234 704 220 8363;