let findInput = document.getElementById("findInput")
let findBtn = document.getElementById("findBtn")
findBtn.addEventListener("click", function(){
    weather(findInput.value)
    findInput.value=""
})

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

async function weather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=003302b74c8d4738bcb132956240210&q=${city}&days=3`)
    let apiData = await response.json()
    displayData(apiData)
}

weather("cairo")
function displayData(apiData){
    var cartona= ``
    for(let i= 0; i<3 ;i++){
        let day = new Date(apiData.forecast.forecastday[i].date)
        if(i==0){
            cartona +=`<div class="col-md-4 cards">
            <div class="main-card">
                <div class="head d-flex justify-content-between">
                    <div class="day">${days[day.getDay()]}</div>
                    <div class="date">
                        ${day.getDate()+months[day.getMonth()]}
                    </div>
                </div>
                <div class="contant">
                    <div class="city">${apiData.location.name}</div>
                    <div class="degree">${apiData.current.temp_c}<sup>o</sup>C</div>
                    <img class="moon-image" src="https:${apiData.current.condition.icon}" alt="${apiData.current.condition.text}">
                    <div class="state">${apiData.current.condition.text}</div>
                    <div class="desc d-flex">
                        <div class="left">
                            <img src="imges/left.png" alt="umbrella">
                            20%
                        </div>
                        <div class="middle">
                            <img src="imges/middle.png" alt="wind">
                            18km/h
                        </div>
                        <div class="right">
                            <img src="imges/right.png" alt="compass">
                            East
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }
        if(i==1){
            cartona+=` <div class="col-md-4 cards special">
                    <div class="main-card special-ground special-card">
                        <div class="head text-center">
                            <div class="day text-center">${days[day.getDay()]}</div>
                        </div>
                        <div class="contant text-center">
                            <img class="sec-image" src="https:${apiData.forecast.forecastday[1].day.condition.icon}" alt="sunny">
                            <div class="degree">${apiData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
                            <div class="low-degree">${apiData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></div>
                            <div class="state">${apiData.forecast.forecastday[1].day.condition.text}</div>
                        </div>
                    </div>
                </div>`
        }
        if(i==2){
            cartona+=`<div class="col-md-4 cards ">
                    <div class="main-card special-card">
                        <div class="head text-center">
                            <div class="day ">${days[day.getDay()]}</div>
                        </div>
                        <div class="contant text-center">
                            <img class="sec-image" src="https:${apiData.forecast.forecastday[2].day.condition.icon}" alt="${apiData.forecast.forecastday[2].day.condition.text}">
                            <div class="degree">${apiData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
                            <div class="low-degree">${apiData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div>
                            <div class="state">${apiData.forecast.forecastday[2].day.condition.text}</div>
                        </div>
                    </div>
                </div>`
        }
    }
    document.getElementById("rowData").innerHTML = cartona
}
