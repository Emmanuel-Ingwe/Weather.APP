// axios.get('http://google.com')
//     .then(({ data }) => {
//         console.log(data);
//         for (let google of data.results) {
//             console.log(google.name);
//         }
//         console.log(google.next);
//     });

const iconElement = document.querySelector('.weather-icon');
const DescElement = document.querySelector('.temperature-description');
const tempElement = document.querySelector('.temperature-value p');
const locationElement = document.querySelector('.location p');
const notificationElement = document.querySelector('.notification');

// APP DATA
const weather = {};
weather.temperature = {
    unit: 'celcius'
};


const KELVIN = 273;

const key =; 