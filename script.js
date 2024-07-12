const input  = document.getElementById('input')
const button = document.getElementById('button')

const city = document.getElementById('city')
const temperature = document.getElementById('temperature')
const humidity = document.getElementById('humidity')
const weather = document.getElementById('weather')
const emoji = document.getElementById('emoji')
const feels = document.getElementById('feelslike')
const apiKey = '7057ad15720b1dffad3379309b846783';
const container2 = document.getElementById('container2')
const error1 = document.getElementById('error')

async function getWeather(){

try {

    const key = input.value
    const apiWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${key}&appid=${apiKey}`)
    const dataApi = await apiWeather.json()
    
    
    city.textContent = dataApi.name;
    let c = dataApi.main.temp - 273.15
    let f = dataApi.main.feels_like - 273.15
    
    temperature.textContent = `Temperature: ${Math.round(c)} °C`
    humidity.textContent = `Humidity: ${dataApi.main.humidity}`
    weather.textContent = dataApi.weather[0].description
    feels.textContent = `Feels like: ${f.toFixed(1)}`
    
    
    if(dataApi.weather[0].id >= 200 && dataApi.weather[0].id <= 232){
    
        emoji.textContent = '⛈️'
    }else if(dataApi.weather[0].id >= 300 &&dataApi.weather[0].id <= 321){
    
        emoji.textContent = '🌧️' 
    }
    else if(dataApi.weather[0].id >= 500 &&dataApi.weather[0].id <= 531){
        emoji.textContent = '☔' 
    }
    else if(dataApi.weather[0].id >= 600 &&dataApi.weather[0].id <= 622){
        emoji.textContent = '❄️' 
    }
    
    else if(dataApi.weather[0].id >= 701 &&dataApi.weather[0].id <= 781){
        emoji.textContent = '☁️' 
    }
    else if(dataApi.weather[0].id === 800){
        emoji.textContent = '⛅' 
    }else if(dataApi.weather[0].id >= 801){
        emoji.textContent = '🌥️' 
    }
        
    
    console.log(dataApi)
    container2.style.display = 'flex'
    error1.textContent = ""

}

catch(error){
    temperature.textContent = ""
    humidity.textContent = ""
    weather.textContent = ""
    feels.textContent = ""
    emoji.textContent = ""


error1.textContent = 'Invalid input! please type a valid city! ⚠️'
container2.style.display = 'flex'
}
}


