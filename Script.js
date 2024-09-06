document.addEventListener('DOMContentLoaded', function() {
    let selectedCity = '';
    let map;
    let marker;

    // Menü-Button, um das Spiel zu starten
    document.getElementById('startGame').addEventListener('click', function() {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';
    });

    // Button, um zur Startseite zurückzukehren
    document.getElementById('backToMenu').addEventListener('click', function() {
        document.getElementById('gameContainer').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    });

    // Funktion zur Benachrichtigung
    const notificationArea = document.createElement('div');
    notificationArea.setAttribute('id', 'notification');
    document.body.appendChild(notificationArea);

    function showNotification(message) {
        notificationArea.textContent = message;
        notificationArea.style.display = 'block';
        setTimeout(() => {
            notificationArea.style.display = 'none';
        }, 2000);
    }

    // Funktion, um eine zufällige Stadt auszuwählen
    function getRandomCity() {
        fetch('Countries/Cities.json')
            .then(response => response.json())
            .then(data => {
                selectValidCity(data);
            })
            .catch(error => console.error('Fehler beim Abrufen der Städte:', error));
    }

    // Funktion, um eine gültige Stadt mit Wetterdaten auszuwählen
    function selectValidCity(cities) {
        if (!cities || cities.length === 0) {
            console.error('Keine Städte gefunden.');
            return;
        }

        function tryCity() {
            const randomIndex = Math.floor(Math.random() * cities.length);
            const city = cities[randomIndex].city;

            checkWeatherForCity(city)
                .then(hasWeather => {
                    if (hasWeather) {
                        selectedCity = city;
                        // Zeige die ausgewählte Stadt an
                        document.getElementById('selected-city').textContent = `Ausgewählte Stadt: ${selectedCity}`;
                    } else {
                        // Wenn die Stadt keine Wetterdaten hat, zeige eine Benachrichtigung und versuche es erneut
                        showNotification(`Stadt ${city} übersprungen, da keine Wetterdaten verfügbar.`);
                        tryCity(); // Nächste Stadt versuchen
                    }
                })
                .catch(error => console.error('Fehler bei der Wetterprüfung:', error));
        }

        tryCity(); // Starte den ersten Versuch
    }

    // Funktion, um zu überprüfen, ob eine Stadt Wetterdaten hat
    function checkWeatherForCity(city) {
        const apiKey = '6c57147cf6b448a48df84931242308'; // Dein API-Schlüssel
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    return false; // Stadt hat keine Wetterdaten
                }
                return true; // Stadt hat Wetterdaten
            })
            .catch(error => {
                console.error(`Fehler beim Abrufen der Wetterdaten für ${city}:`, error);
                return false;
            });
    }

    // Funktion, um die Wetterdaten für die ausgewählte Stadt abzurufen und die Karte zu aktualisieren
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

                // Aktualisiere die Karte mit den Koordinaten der Stadt
                updateMap(location.lat, location.lon);
            })
            .catch(error => console.error('Fehler beim Abrufen der Wetterdaten:', error));
    }

    // Google Maps initialisieren
    window.initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 0, lng: 0 }, // Initialer Mittelpunkt
            zoom: 2, // Start-Zoom
        });
    };

    // Karte aktualisieren mit neuer Position
    function updateMap(lat, lon) {
        const position = { lat: lat, lng: lon };

        // Karte zur neuen Position bewegen
        map.setCenter(position);
        map.setZoom(10);

        // Wenn bereits ein Marker vorhanden ist, entferne ihn
        if (marker) {
            marker.setMap(null);
        }

        // Neuen Marker hinzufügen
        marker = new google.maps.Marker({
            position: position,
            map: map,
        });
    }

    // Event-Listener für die Buttons
    document.getElementById('randomCity').addEventListener('click', getRandomCity);
    document.getElementById('fetchWeather').addEventListener('click', fetchWeather);
});
