console.log('main.js is connected!');


const apiKey = "d6f2ead4a139c685afe455ad2755f85c";

const getWeather = function(zip) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=d6f2ead4a139c685afe455ad2755f85c`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        console.log(response);
        manipulateDOM(response);
    })
    .catch((err) => {
        console.log(err);
    })
}

function enterZip() {
    const zip = document.querySelector('#zip').value;
    if (zip > 0 && zip < 99999) {
        const data = getWeather(zip);
    }
}

function manipulateDOM(data) {
    const name = document.getElementById('location');
    const temp = document.getElementById('temp-degrees');
    const description = document.getElementById('temp-descrip');
    const min = document.getElementById('min');
    const max = document.getElementById('max');

    if (data.main.temp < 40) {
    temp.style.color = 'blue';
  } else {
    temp.style.color = 'black'
  }

  if (data.main.temp > 90) {
    temp.style.color = 'red'
  } else {
    temp.style.color = 'black'
  }

    name.innerText = `${data.name}`;
    temp.innerText = `${data.main.temp}°`;
    description.innerText =`${data.weather[0].description}`;
    min.innerText = `Today's low is: ${data.main.temp_min}`;
    max.innerText = `Today's high is: ${data.main.temp_max}`;

}

const button = document.querySelector('button');
button.addEventListener('click', enterZip);
