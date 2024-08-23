document.addEventListener('DOMContentLoaded', function() {
    let selectedCity = '';

    // Funktion, um eine zufällige Stadt auszuwählen
    function getRandomCity() {
        fetch('Countries/Cities.json')
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const city = data[randomIndex].city;
                selectedCity = city;

                // Zeige die ausgewählte Stadt an
                document.getElementById('selected-city').textContent = `Ausgewählte Stadt: ${selectedCity}`;
            })
            .catch(error => console.error('Fehler beim Abrufen der Städte:', error));
    }

    // Funktion, um die Wetterdaten abzurufen
    function fetchWeather() {
        if (!selectedCity) {
            alert('Bitte wähle zuerst eine Stadt aus.');
            return;
        }

        const apiKey = '6c57147cf6b448a48df84931242308'; // Dein API-Schlüssel
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${selectedCity}&days=1&aqi=yes&alerts=yes`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const current = data.current;
                const condition = current.condition.text;
                const temperature = current.temp_c;
                const humidity = current.humidity;
                const pressure = current.pressure_mb;
                const wind = current.wind_kph;

                // Zeige die Wetterdaten an
                document.getElementById('condition').textContent = `Bedingung: ${condition}`;
                document.getElementById('temperature').textContent = `Temperatur: ${temperature} °C`;
                document.getElementById('humidity').textContent = `Luftfeuchtigkeit: ${humidity} %`;
                document.getElementById('pressure').textContent = `Luftdruck: ${pressure} hPa`;
                document.getElementById('wind').textContent = `Windgeschwindigkeit: ${wind} km/h`;
            })
            .catch(error => console.error('Fehler beim Abrufen der Wetterdaten:', error));
    }

    document.getElementById('randomCity').addEventListener('click', getRandomCity);
    document.getElementById('fetchWeather').addEventListener('click', fetchWeather);
});
