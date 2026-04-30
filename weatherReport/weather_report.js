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
        infoEnPantalla.textContent = "Hubo un error";
        console.error("Hubo un error", error);

   });
};
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);  