import axios from "axios";

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
  greensboro: {
    temp: 29.6,
    humidity: 100,
  },
};

let searchButton = document.querySelector("#searchButton");
let searchContent = document.querySelector("#searchContent");
let date = new Date();
let cityTitle = document.querySelector("#cityG");
let searchDisplay = document.querySelector("#searchDisplay");
let dateText = document.querySelector("#dateText");

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let weekday = ["Sunday", "Monday", "Tue", "Wed", "Thu", "Fri", "Sat"];
let hour = date.getHours();
let minute = date.getMinutes();
let currentTime = `${date.getHours()}:${date.getMinutes()}`;

let time = `${weekday[date.getDay()]}, ${
  month[date.getMonth()]
} ${date.getDate()} ${date.getFullYear()} at ${currentTime}`;
dateText.innerHTML = time;

// function updateCity() {
//   console.log(searchContent.value);
//   if (!weather[searchContent.value.toLowerCase()]) {
//     searchDisplay.style.display = "block";
//     searchDisplay.textContent = `Sorry! We could not find ${searchContent.value}. Please try another search.`;
//   } else {
//     searchDisplay.style.display = "none";
//     cityTitle.textContent = `${searchContent.value.toLocaleLowerCase()}`;
//   }
// }

// searchButton.addEventListener("click", updateCity);

// let search = prompt("what city are you in?").toLowerCase();

// if (!weather[search]) {
//   alert(
//     `Sorry, we know the weather for this city, try going to https://www.google.com/search?q=weather+${search}`
//   );
// } else {
//   alert(
//     `It is currently ${weather[search].temp}°C in ${search}, with a humidity of ${weather[search].humidity}.`
//   );
// }

function showTemperature(response) {
  console.log("response.data", response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  let cityNameElement = document.querySelector("#cityG");
  temperatureElement.innerHTML = temperature;
  cityNameElement.innerHTML = response.data.name;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#searchContent");
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let newCity = cityInput.value;
  let apiKey = "d9646d4c5ddbe1f1d542842fe530e8bf";
  let units = "imperial";
  let url = `${apiEndpoint}?q=${newCity}&appid=${apiKey}&units=${units}`;

  axios.get(url).then(showTemperature).catch(console.log);
}

// let citySubmit = document.querySelector("#searchButton");
document.addEventListener("submit", searchCity);
