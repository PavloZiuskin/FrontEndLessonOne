const API_KEY = 'e802c813c8732540c887bbaf1b88561b';
const LATITUDE = "50.450001";
const LONGITUDE ="30.523333";
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
             new Error('Не вдалося завантажити дані');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-info').innerText = 'Помилка завантаження даних';
    }
}
function displayWeather(data) {
    const temp = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('weather-info').innerHTML = `
            <p>Температура: ${temp}°C</p>
            <p>Опис: ${weatherDescription}</p>
            <p>Вологість: ${humidity}%</p>
            <p>Швидкість вітру: ${windSpeed} м/с</p>
        `;
}

getWeather();