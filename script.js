const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = `5849f1341b66d44560492954b13badc1`
const diffKelvin = 273.15

const fetchWeather=async(city)=>{
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(res => res.json())
        .then(data => displayWeatherData(data))
}

const handleSearch =()=>{
    const city = document.getElementById('cityInput').value.trim()

    if (city) {
        fetchWeather(city)
    } else alert('Ingrese una ciudad válida') 
}

document.getElementById('searchButton').addEventListener('click', handleSearch)

function displayWeatherData(data) {
    const responseDataHTML = document.getElementById('responseContainer')
    responseDataHTML.innerHTML = ''

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`
    cityInfo.classList = 'cityInfo'

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es ${Math.round(temp-diffKelvin)}ºC`
    tempInfo.classList = 'responseContainer__regularParagraph'

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es de ${humidity}%`
    humidityInfo.classList = 'responseContainer__regularParagraph'

    const icoInfo = document.createElement('img')
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    icoInfo.classList = ''

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripción meteorológica es ${description}`
    descriptionInfo.classList = 'responseContainer__regularParagraph'

    responseDataHTML.appendChild(cityInfo)
    responseDataHTML.appendChild(tempInfo)
    responseDataHTML.appendChild(humidityInfo)
    responseDataHTML.appendChild(icoInfo)
    responseDataHTML.appendChild(descriptionInfo)
}