// Paso 1: Obten la clave API de OpenWeather
const apiKey = '986468df18de2e02c64225076c9ec5d2';

// Paso 2: Obtén la ubicación actual del usuario
navigator.geolocation.getCurrentPosition((position) => {
  const latitud = position.coords.latitude;
  const longitud = position.coords.longitude;

  // Paso 3: Realiza una solicitud a la API de OpenWeather
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperatura = data.main.temp;
      const ciudad = data.name;
      
      // Paso 4: Muestra la temperatura actual en tu sitio web
      const temperaturaActual = document.querySelector('#temperatura-actual');
      temperaturaActual.innerHTML = `${temperatura} °C en ${ciudad}`;
    })
    .catch(error => console.error(error));
}, (error) => {
  console.error(error);
});