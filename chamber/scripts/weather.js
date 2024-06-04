

const myTown = document.querySelector('#town');
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const myDescription= document.querySelector('#description');


const apiKey = '5d2488514d29801194a35eb825e8b284';
const lat = -12.040; // Latitude for Trier, Germany
const lon = -77.039; // Longitude for Trier, Germany
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
    
      displayResults(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayResults(data) {
  
    myTown.innerHTML=data.name
    myDescription.innerHTML = data.weather[0].description
    currentTemp.innerHTML= `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
    // captionDesc.textContent = `${desc}`;
   
  

}

apiFetch();
