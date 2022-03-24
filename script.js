const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('currentWeatherItems');

const timezoneEL = document.getElementById('timezone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');

const currentTmpEl = document.getElementById('current-tmp');


setInterval(() =>{
    const time = new Date();
    const month =  time.getMonth();
    const date =  time.getDate();
    const day =  time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + <span id="am-pm">${ampm}</span>
}, 1000);
