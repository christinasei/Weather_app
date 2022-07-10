function displayTemperature(response) {
  console.log(response.data.main.temp);
}
let apiKey = "477f09ca1a2fb1bfcfeb8e5a31f57826";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Vienna&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(displayTemperature);
