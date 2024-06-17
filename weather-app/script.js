const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const errorScreen = document.querySelector(".error-container");

// Initial Variable 
const API_KEY = "";
let currentTab = userTab;
currentTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getfromSessionStorage();
        }
    }

}

userTab.addEventListener('click', () => {
    // Pass ClickTab
    switchTab(userTab);
});

searchTab.addEventListener('click', () => {
    switchTab(searchTab);
});

function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else{
        // console.log(localCoordinates);
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}


async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} = coordinates;

    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try{
        const reponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`)
        const data = await reponse.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
        errorScreen.classList.add("active");
    }
}

function renderWeatherInfo(weatherInfo){
    // Fetch Elements
    const cityName = document.querySelector("[data-cityName]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //Fetch Values and put in ui elements
    cityName.innerText = weatherInfo?.location?.name;
    desc.innerText = weatherInfo?.current?.condition?.text;
    weatherIcon.src = weatherInfo?.current?.condition?.icon;
    temp.innerText = `${weatherInfo?.current?.temp_c} °C`;
    windspeed.innerText = `${weatherInfo?.current?.wind_kph} km/h`;
    humidity.innerText = `${weatherInfo?.current?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.current?.cloud}%`;
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert('Please Allow');
    }
}

function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");

grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchInput.value === ""){ return;}
    fetchSearchWeatherInfo(searchInput.value);
});


async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
        const data = await response.json();
        console.log(data);
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        errorScreen.classList.add("active")
    }
}
