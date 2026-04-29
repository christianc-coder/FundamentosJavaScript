function showweatherDetails (event){
    event.preventDefault();
  const cityInput = document.getElementById('city').value;
  const ApiKey = 'a44c411dfafb4c1f8e3161251262904';
  const ApiUrl = 'http://api.weatherapi.com/v1'
  
  fetch(ApiUrl)
    .then( reponse => reponse.json())
    .then( data => {
        const infoDeClima = document.getElementById('weatherInfo');
        infoDeClima.innerHTML = `<h2> clima en ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>`;
   });
}
    