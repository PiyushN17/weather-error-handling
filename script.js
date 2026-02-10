const srchBtn = document.getElementById('srchBtn');
const cityName = document.getElementById('cityName');
const city = document.getElementById('city');
const temp = document.getElementById('temp');

let ERROR_CONFIG = {};

srchBtn.addEventListener('click', function() {
    if(cityName.value === '') {
        alert('Please enter a city name');
    }
    else {
        getGeo(cityName.value);
    }
})

async function loadErrorConfig() {
    const res = await fetch('./status.json');
    ERROR_CONFIG = await res.json();
}

loadErrorConfig();

async function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }

    const message =
        ERROR_CONFIG[res.status] || ERROR_CONFIG.default;

    throw {
        status: res.status,
        message
    };
}


async function getGeo(cityName) {
    const geoAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`;

    try {
        const res = await fetch(geoAPI);
        const data = await handleResponse(res);

        if (!data.results || data.results.length === 0) {
            throw { status: 404, message: ERROR_CONFIG[404] };
        }

        city.innerText = data.results[0].name;
        getCityTemp(data.results[0].longitude, data.results[0].latitude);

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}


async function getCityTemp(lon, lat) {
    const cityAPI = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    try {
        const res = await fetch(cityAPI);
        const data = await handleResponse(res);

        temp.innerText =
            `Temperature: ${data.current_weather.temperature}${data.current_weather_units.temperature}`;

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}
