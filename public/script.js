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
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 
'Dec']; 

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
        setWeatherData(data, place.formatted_address)
    })
})
// end of the search box logic

// TODO start of the logic for the location history section goes here !!! 

// clickable buttons for location search box 
// logic for teh search bar gathering of inputs and displaying the city on the card 
const searchBtnEl = document.getElementById('searchBtn');
searchBtnEl.addEventListener('click', function () {
    console.log('clicked');
    const userInput = searchEl.value;
    localStorage.setItem('userInput', userInput);
    displaySavedInput(); 
});
const displaySavedInput = function(){
    const statusEl = document.getElementsByName('status')[0];
    const storedInput = localStorage.getItem("userInput");
    if (storedInput) {
        statusEl.innerHTML = storedInput;
    }
}

// end of logic to display the searched locaton onto the card 

const clearEl = document.getElementById('clearBtn');
// Event listner for the clear button 
clearEl.addEventListener('click', function(){
    console.log('clicked');
}); 
// end of the search bar logic 

// dom minipulation for the left side weather pane below 
const currentDay = document.getElementsByClassName('currently'); 


