  function showWeatherDetails (event){
    
    event.preventDefault();
    const cityInput = document.getElementById('city').value;
    const infoEnPantalla = document.getElementById('weatherInfo');
    const apiKey = 'a44c411dfafb4c1f8e3161251262904';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput}&days=5&lang=es`;
  
  
  fetch(apiUrl)
    .then( response => response.json())
    .then( data => {
        infoEnPantalla.innerHTML = `<h2> Clima en ${data.location.name}</h2>
        <p>Temperatura: ${data.current.temp_c} °C</p>
        <p>Clima: ${data.current.condition.text}</p>`;
   })
    .catch(error => {
        infoEnPantalla.textContent = "Surgio un error";
        console.error("Hubo un error", error);

   });
};
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);  

function addLanLon(event){

    event.preventDefault();
    const latInput = document.getElementById('lat').value;
    const lonInput = document.getElementById('lon').value;
    const lat_lonInfo = document.getElementById('lan&lonInfo');

    apiKey2 = 'a44c411dfafb4c1f8e3161251262904';
    apiUrl2 = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey2}&q=${latInput},${lonInput}&days=5&lang=es`;

    fetch(apiUrl2)
    .then( response => response.json())
    .then( data => {
        lat_lonInfo.innerHTML = `
        <h2>Ubicacion: ${data.location.name}</h2>
        <p>Salida de luna: ${data.forecast.forecastday[0].astro.moonrise}</p>
        <p>Fase lunar: ${data.forecast.forecastday[0].astro.moon_phase}</p>`;

    })
    .catch( error => {
        console.error('hubo un error', error);
        lat_lonInfo.textContent = 'Surgio un error'
    });

}
document.getElementById('lan&lonForm').addEventListener('submit',addLanLon);