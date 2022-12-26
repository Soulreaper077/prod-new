// scripts for the weather api front end below 
// constants below 
const searchEl = document.getElementById('searchBtn');
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
