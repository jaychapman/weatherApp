const getWeatherBtn = document.getElementById('getWeather');

//const API = process.env.API_KEY;
const API = 'b40e641e8611df755f76972c6857696e';

const getCity = (() => {
  getWeatherBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('button clicked');
    const city = document.getElementById('getCity').value;
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let temp = Math.round(data.list[0].main.temp);
      console.log(temp)
      let cityName = data.city.name;

      console.log(cityName);

      document.getElementById('displayCity').innerHTML = `${cityName}`;
      document.getElementById('displayTemp').innerHTML = `${temp} &#8457`;
      
    }
      
    );
  
  })

})

getCity();





  