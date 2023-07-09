/**
 * Weather App
DONE Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "1d20ba572149f56a47b7b06f75dc22ec";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  //HINT: Use template literals to create a url with input and an API key
  let FURL = `${URL}q=${city}&appid=${API_KEY}&units=imperial`;
  promiseAPI = fetch(FURL);
  return promiseAPI
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("Error");
      console.log(err);
    });
  //CODE GOES HERE
};
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((res) => {
      showWeatherData(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
