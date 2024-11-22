const cityInput = document.querySelector(".city")
const searchBtn = document.querySelector(".search-btn")

searchBtn.addEventListener('click', () => {
  if (cityInput.value. trim()!= '')  {
    updateweatherinfo(cityInput.value)
    cityInput.value = ''
    cityInput.blur()
  }
})
cityInput.addEventListener('keydown', (event) => {
  if(event.key == 'enter' && 
    cityInput.value. trim()!= ""
  ){
    updateweatherinfo(cityInput.value )
    cityInput.value = ""
    cityInput.blur()
  }
})

function getfetchData() {
  
}
function updateweatherinfo(city) {
  const weatherdata = getfetchData()
}