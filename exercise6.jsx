const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById("cityInput");
const resultDiv = document.getElementById("result");
const btn = document.getElementById("getWeather");

// Fetch weather data using async/await
async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) throw new Error("City not found!");

    const data = await res.json();
    displayWeather(data);
    localStorage.setItem("lastCity", city);
  } catch (error) {
    resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Display weather details dynamically
function displayWeather(data) {
  resultDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>🌡 Temperature: ${data.main.temp}°C</p>
    <p>🌥 Condition: ${data.weather[0].description}</p>
    <p>💨 Wind: ${data.wind.speed} m/s</p>
  `;
}

// Button event
btn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
  else resultDiv.innerHTML = `<p class="error">Please enter a city name.</p>`;
});

// On page load → load last city
window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    cityInput.value = lastCity;
    fetchWeather(lastCity);
  }
});
