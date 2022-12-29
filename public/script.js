// scripts for the weather api front end below 
// constants below 
const searchEl = document.querySelector('[data-city-search]');
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

// clickable buttons 
const searchBtn = document.getElementById('searchBtn');
const clearEl = document.getElementById('clearBtn');

// event listner for the search button 
searchEl.addEventListener('click', function () {
    console.log('clicked');
});

// Event listner for the clear button 
clearEl.addEventListener('click', function(){
    console.log('clicked');
}); 

// dom minipulation for the left side weather pane below 
const currentDay = document.getElementsByClassName('currently'); 
