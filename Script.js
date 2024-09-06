document.addEventListener('DOMContentLoaded', function() {
    let map;
    let marker;
    let userMarker;
    let selectedLatLng;
    let actualLatLng;
    let actualCity; // Speichert die aktuelle Stadt
    const apiKey = '6c57147cf6b448a48df84931242308'; // Dein Wetter API-Schlüssel

    // Google Maps initialisieren
    window.initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 0, lng: 0 }, // Initialer Mittelpunkt
            zoom: 2, // Start-Zoom
        });

        // Ereignis-Listener für das Klicken auf die Karte
        map.addListener('click', function(event) {
            selectedLatLng = event.latLng;
            if (marker) {
                marker.setMap(null);
            }
            marker = new google.maps.Marker({
                position: selectedLatLng,
                map: map,
            });
            document.getElementById('confirmLocation').style.display = 'inline-block';
        });

        document.getElementById('confirmLocation').addEventListener('click', function() {
            if (selectedLatLng) {
                calculateDistance(selectedLatLng.lat(), selectedLatLng.lng(), actualLatLng.lat, actualLatLng.lng);
                document.getElementById('confirmLocation').style.display = 'none';
                document.getElementById('nextRound').style.display = 'inline-block';
            }
        });

        document.getElementById('nextRound').addEventListener('click', function() {
            document.getElementById('nextRound').style.display = 'none';
            fetchRandomCity();
        });
    };

    // Menü-Button, um das Spiel zu starten
    document.getElementById('startGame').addEventListener('click', function() {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';
        fetchRandomCity();
    });

    // Button zum Zurückkehren zur Startseite
    document.getElementById('backToMenu').addEventListener('click', function() {
        document.getElementById('gameContainer').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    });

    // Funktion, um eine zufällige Stadt auszuwählen
    function fetchRandomCity() {
        fetch('Countries/Cities.json')
            .then(response => response.json())
            .then(data => {
                let foundCity = false;
                while (!foundCity) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const city = data[randomIndex].city;
                    actualCity = city;
                    fetchWeather(city)
                        .then(() => foundCity = true)
                        .catch(() => console.log('Keine Wetterdaten für diese Stadt vorhanden, versuche eine andere Stadt.'));
                }
            })
            .catch(error => console.error('Fehler beim Abrufen der Städte:', error));
    }

    // Funktion, um die Wetterdaten abzurufen
    function fetchWeather(city) {
        return new Promise((resolve, reject) => {
            const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=yes`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const current = data.current;
                    const location = data.location;
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

                    // Setze die tatsächliche Position und zeige sie auf der Karte an
                    actualLatLng = { lat: location.lat, lng: location.lon };
                    map.setCenter(actualLatLng);
                    map.setZoom(10);
                    new google.maps.Marker({
                        position: actualLatLng,
                        map: map,
                        title: 'Tatsächlicher Ort'
                    });

                    resolve();
                })
                .catch(error => reject(error));
        });
    }

    // Funktion zur Berechnung der Distanz
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius der Erde in km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        // Zeige die Distanz an
        document.getElementById('distance').textContent = `Entfernung: ${distance.toFixed(2)} km`;
        document.getElementById('distance-info').style.display = 'block';
    }

    // Hilfsfunktion zur Umwandlung von Grad in Bogenmaß
    function toRad(deg) {
        return deg * (Math.PI / 180);
    }
});
