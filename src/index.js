function displayTemperature(response) {
  let tempertureElement = document.querySelector("temperature");
  tempertureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "7fe508d235d0ee4554ec8bb21032d44e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axious.get(apiurl).then(displayTemperature);
