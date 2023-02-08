// scripts for the weather api front end below 

// constants below 
const dateEl = document.getElementById('date');
const currentWeather = document.getElementById('weather-items');
const countryEl = document.getElementById('country');

// dom elements for todays weather conditions 
const statusCheck = document.getElementsByName('status');
const locationCheck = document.getElementsByClassName('location'); 
const cardCons = document.getElementsByClassName('values'); // cards constraints

// end of card constraints for todays weather conditons 

// current date logic below 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 
'Dececember']; 

// function for the current date and time 
setTimeout(() => {
    const time = new Date(); 
    const month = time.getMonth();
    const date= time.getDate()
    const day = time.getDay();
    
    const dateString = `${days[day]}, ${months[month]}, ${date}`;
    document.getElementsByClassName("current-date")[0].innerHTML = dateString;
}, 100)// dom minipulaton below 

// end of logic to get the current time and date displayed 


// constants for the search box and logic for the google maps locations api 
const searchEl = document.getElementById('citySearch'); 
const searchBox = new google.maps.places.SearchBox(searchEl); 
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if (place == null) return
    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng(); 
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application-json',
            'Accept': 'application-json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    }).then(res => res.json()).then(data => {
        fetchWeatherData(data, place.formatted_address)
    })
})
// end of the search box logic

// TODO start of the logic for the location history section goes here !!! 
const searchBtnEl = document.getElementById('searchBtn');
searchBtnEl.addEventListener('click', function () {
const userInput = searchEl.value;
localStorage.setItem('userInput', userInput);
const statusEl = document.getElementsByClassName('status')[0];
const storedInput = localStorage.getItem("userInput");
statusEl.innerHTML = storedInput;
});
// end of logic to display the searched locaton onto the card 

// first card for the daily weather conditions 
const searchBtnTrig = document.getElementById('searchBtn');
searchBtnTrig.addEventListener('click', function () {
  const userInput = searchEl.value;
  localStorage.setItem('userInput', userInput);
  fetchWeatherData(userInput);
});

// constants for the diily weather forecasting 
const windDay = document.getElementsByClassName('valuesWind');
const tempDay = document.getElementsByClassName('valuesTemp');
const PrecDay = document.getElementsByClassName('valuesPrec');


const fetchWeatherData = (location) => {
  const API_KEY = "b041d9f33b1a37c3ccfbe793a5211fbd";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Do something with the weather data here
    })
    .catch(error => console.error(error));
};

// emd of section right 

// start of weather map for cards on bottom 
// non scope constasnts 
const cards = document.getElementsByClassName('cards'); 
const cardContext = document.getElementsByClassName('weekday');
const setDay = document.getElementsByClassName('forecastDay');
const dataTemp = document.getElementsByClassName('data-temp');
const dataRain = document.getElementsByClassName('data-rain');
const dataWind = document.getElementsByClassName('data-wind');

//cards logic





// end of logic for weather forecasting cards 


const clearEl = document.getElementById('clearBtn');
// Event listner for the clear button 
clearEl.addEventListener('click', function(){
    console.log('clicked');
}); 
// end of the search bar logic 

// dom minipulation for the left side weather pane below 
const currentDay = document.getElementsByClassName('currently'); 


