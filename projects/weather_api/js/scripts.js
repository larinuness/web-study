//Var e seleções de elementos

const apiKey = "cd7a539d5a592f13b50c0c6674ae7712";
const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#weather-data");

// Funções

//acessar api
const getWeatherData = async (city) => {
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(apiWeatherUrl);
  const data = res.json();

  console.log(data);

  return data;
};
//recebe os dados da api
const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerHTML = data.name;
  tempElement.innerHTML = parseInt(data.main.temp);

  descElement.innerHTML = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  countryElement.setAttribute(
    "src",
    `https://flagsapi.com/${data.sys.country.toUpperCase()}/shiny/24.png`
  );
  humidityElement.innerHTML = `${data.main.humidity}%`;
  windElement.innerHTML = `${data.wind.speed}km/hr`;

  weatherContainer.classList.remove("hide");
};

// Deixa a primeira letra maiuscula "nublado" pra "Nublado"
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// Eventos

searchButton.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;
    showWeatherData(city);
  }
});
