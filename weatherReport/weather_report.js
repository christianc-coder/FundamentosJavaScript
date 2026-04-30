  function showWeatherDetails (event){
    
    event.preventDefault();
    const cityInput = document.getElementById('city').value;
    const infoEnPantalla = document.getElementById('weatherInfo');
    const ApiKey = 'a44c411dfafb4c1f8e3161251262904';
    const ApiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${cityInput}&days=5`;
  
  
  fetch(ApiUrl)
    .then( response => response.json())
    .then( data => {
        infoEnPantalla.innerHTML = `<h2> clima en ${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c}</p>
        <p>Weather: ${data.current.condition.text}</p>`;
   })
    .catch(error => {
        infoEnPantalla.textContent = "Hubo un error";
        console.error("Hubo un error", error);

   });
};
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);  