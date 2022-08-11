console.log('main.js is connected!');


const apiKey = "672e5597b1eb1f4cbb6e9b963e5abd3f";

// DOM variables



const getWeather = function(zip) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${apiKey}`)
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

   // document.getElementById('zip').innerText = ''
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
const zip = document.querySelector('#zip').value;
const zipField = document.getElementById('zip');

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

    name.innerText = `${data.name}, ${zip}`;
    temp.innerText = `${data.main.temp}°`;
    description.innerText =`${data.weather[0].description}`;
    min.innerText = `Today's low is: ${data.main.temp_min}`;
    max.innerText = `Today's high is: ${data.main.temp_max}`;

    console.log(zipField)
    zipField.value = ''

    name.style.fontSize = "1.5em"
    name.style.padding = "3.5%"
    temp.style.padding = "3.5%"
    description.style.padding = "3.5%"
}

const button = document.querySelector('button');
button.addEventListener('click', enterZip);
