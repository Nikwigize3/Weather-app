const cityInput = document.querySelector(".city-input")
const searchBtn = document.querySelector(".search-btn")

const weatherInfoSection = document.querySelector(".weatherinfo")
 const notfoundSection = document.querySelector('.not-found')
 const searchCitySection = document.querySelector(".search-city")

const apiKey = '64dd50eaf59471521b81b03669904637'

searchBtn.addEventListener('click', () => {
  if (cityInput.value.trim() != '')  {
    updateWeatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
  }
})
cityInput.addEventListener('keydown', (event) => {
  if(event.key == 'enter' && 
    cityInput.value.trim() != ''
  ){
    updateWeatherInfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
  }
})

async function getfetchData(endPoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;


const respone = await fetch(apiUrl)
return respone.json()
}
async function updateWeatherInfo(city) {
  const weatherData = getfetchData('weather', city)

  if(weatherData.cod != 200) {
    ShowDisplaySection(notfoundSection)
    return
  }

  ShowDisplaySection(weatherInfoSection)
}

function ShowDisplaySection(section){
  [weatherInfoSection, searchCitySection, notfoundSection]
  .forEach(section => section.style.display = 'none'  )

  section.style.display = 'flex';
}