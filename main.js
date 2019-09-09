console.log('main.js is connected!');


const key = "d6f2ead4a139c685afe455ad2755f85c"

let searchButton = document.getElementById("search");
let searchInput = document.getElementById("zip");
let location = document.getElementById("location");
let icon = document.getElementById("temp-icon");
let temperature = document.getElementById("temp-degrees");
let lowTemp = document.getElementById("min");
let highTemp = document.getElementById("max");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {

  }else {
    let searchLink ="https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+key;
   httpRequestAsync(searchLink, theResponse);
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  location.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  lowTemp.innerHTML = jsonObject.main.temp_min + "°";
  highTemp.innerHTML = jsonObject.main.temp_max + "°";
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
