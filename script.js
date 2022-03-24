const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('currentWeatherItems');

const timezoneEL = document.getElementById('timezone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');

const currentTmpEl = document.getElementById('current-tmp');

const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_key = '7957244a263e63fd9238ba0d0a256dbd';

setInterval(() =>{
    const time = new Date();
    const month =  time.getMonth();
    const date =  time.getDate();
    const day =  time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`;

    dateEl.innerHTML = daysArr[day] + ',' + date + ' ' + monthArr[month];

}, 1000);


function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_key}`).then(res => res.json()).then(data => {
            console.log(data)
        })
    });
}