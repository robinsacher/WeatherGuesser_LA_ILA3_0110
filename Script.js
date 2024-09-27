document.addEventListener('DOMContentLoaded', function() {
    let selectedCity = '';
    let map;
    let marker;
    let guessMarker = null;
    let mapReady = false;

    // Menü-Button, um das Spiel zu starten
    document.getElementById('startGame').addEventListener('click', function() {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('gameContainer').style.display = 'block';
        document.getElementById('startGame').style.display = 'none';
        document.getElementById('zeigeAnleitung').style.display = 'none';
        document.getElementById('selected-city').style.display = `none`;

        generateLocation();
    });
    
    // Menu-Button, um die Anleitung aufzurufen
    document.getElementById('zeigeAnleitung').addEventListener('click', function() {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('Anleitung').style.display = 'block';
        document.getElementById('startGame').style.display = 'none';
        document.getElementById('zeigeAnleitung').style.display = 'none';
    });

    // Button, um von dem Spiel zur Startseite zurückzukehren
    document.getElementById('backToMenu').addEventListener('click', function() {
        document.getElementById('gameContainer').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('startGame').style.display = 'block';
        document.getElementById('zeigeAnleitung').style.display = 'block';
    });
    
    // Button, um von der Anleitung zur Startseite zurückzukehren
    document.getElementById('backToMenu2').addEventListener('click', function() {
        document.getElementById('Anleitung').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('startGame').style.display = 'block';
        document.getElementById('zeigeAnleitung').style.display = 'block';
    });

    // Funktion zur Benachrichtigung
    const notificationArea = document.createElement('div');
    notificationArea.setAttribute('id', 'notification');
    document.body.appendChild(notificationArea);

    const customCityIcon = {
        url: 'Marker/SolutionmarkerScale1.png', // URL zum benutzerdefinierten Icon für die ausgewählte Stadt
    };

    const customGuessIcon = {
        url: 'Marker/GuessmarkerScale1.png', // URL zum benutzerdefinierten Icon für den geschätzten Ort
    };

    function showNotification(message) {
        notificationArea.textContent = message;
        notificationArea.style.display = 'block';
        setTimeout(() => {
            notificationArea.style.display = 'none';
        }, 2000);
    }

    // Funktion, um eine zufällige Stadt auszuwählen und Wetterdaten abzurufen
    function generateLocation() {
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
                        fetchWeather();
                    } else {
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
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=yes`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data && data.location && data.current;
            })
            .catch(() => false); // Rückgabewert bei Fehler
    }
    
    // Funktion, um das Wetter für die ausgewählte Stadt abzurufen
    function fetchWeather() {
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
                const windDir = current.wind_dir;
                const visibility = current.vis_km;
                const uv = current.uv;
                const rain = current.precip_mm;
                const airQuality = current.air_quality;
                const co = airQuality.co.toFixed(2); 
                const o3 = airQuality.o3.toFixed(2); 
                const pm25 = airQuality.pm2_5.toFixed(2); 
                const pm10 = airQuality.pm10.toFixed(2); 

                // Wetterdaten in den HTML-Elementen anzeigen
                document.getElementById('condition').textContent = `Bedingung: ${condition}`;
                document.getElementById('temperature').textContent = `Temperatur: ${temperature} °C`;
                document.getElementById('humidity').textContent = `Luftfeuchtigkeit: ${humidity} %`;
                document.getElementById('pressure').textContent = `Luftdruck: ${pressure} hPa`;
                document.getElementById('wind').textContent = `Windgeschwindigkeit: ${wind} km/h`;
                document.getElementById('direction').textContent = `Windrichtung: ${windDir}`;
                document.getElementById('visibility').textContent = `Sichtweite: ${visibility} km`;
                document.getElementById('uv').textContent = `UV-Index: ${uv}`;
                document.getElementById('rain').textContent = `Niederschlag: ${rain} mm`;
                document.getElementById('co').textContent = `Kohlenmonoxid: ${co} µg/m³`;
                document.getElementById('o3').textContent = `Ozon: ${o3} µg/m³`;
                document.getElementById('pm25').textContent = `Feinstaub (PM2.5): ${pm25} µg/m³`;
                document.getElementById('pm10').textContent = `Grober Feinstaub (PM10): ${pm10} µg/m³`;

                // Karte aktualisieren
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
        mapReady = true;

        // Event-Listener für das Setzen des Markers
        map.addListener('click', function(event) {
            if (!guessMarker) {
                guessMarker = new google.maps.Marker({
                    position: event.latLng,
                    map: map,
                    icon: customGuessIcon,
                    title: "Markierter Ort"
                });
            } else {
                guessMarker.setPosition(event.latLng);
            }
        });
    };

    // Karte aktualisieren mit neuer Position
    function updateMap(lat, lon) {
        const position = { lat: lat, lng: lon };

        // Karte zur neuen Position bewegen
        map.setCenter(0, 0);
        map.setZoom(4);

        // Wenn bereits ein Marker vorhanden ist, entferne ihn
        if (marker) {
            marker.setMap(null);
        }

        // Neuen Marker hinzufügen
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: customCityIcon,
            visible: false
        });
    }

    // Berechne die Distanz zwischen zwei Punkten
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius der Erde in Kilometern
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    // Event-Listener für die Buttons
    document.getElementById('guess').addEventListener('click', function() {
        if (!mapReady || !guessMarker) {
            alert('Bitte markieren Sie zuerst Ihren Ort.');
            return;
        }

        // Koordinaten des Markers und des generierten Ortes
        const guessLat = guessMarker.getPosition().lat();
        const guessLng = guessMarker.getPosition().lng();

        // Fetch the generated city data to get its coordinates
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=6c57147cf6b448a48df84931242308&q=${selectedCity}&days=1`)
            .then(response => response.json())
            .then(data => {
                const generatedLat = data.location.lat;
                const generatedLng = data.location.lon;
                const distance = calculateDistance(guessLat, guessLng, generatedLat, generatedLng);

                if (distance > 100) {
                    document.getElementById('distance').innerHTML = `Distanz zwischen Ihrem Ort und der Stadt: <span style="color: red;">${distance.toFixed(2)} km</span> - Ihr Tipp ist zu ungenau.`;
                } else {
                    document.getElementById('distance').innerHTML = `Distanz zwischen Ihrem Ort und der Stadt: <span style="color: green;">${distance.toFixed(2)} km</span> - Gut geraten!`;
                }
                
                // Anzeige der ausgewählten Stadt
                document.getElementById('selected-city').style.display = 'block';
                document.getElementById('selected-city').textContent = `Ausgewählte Stadt: ${selectedCity}`;

                // Karte aktualisieren, um die Stadt anzuzeigen
                if (!marker) {
                    marker = new google.maps.Marker({
                        position: { lat: generatedLat, lng: generatedLng },
                        icon: customCityIcon,
                        map: map,
                        visible: true // Stelle sicher, dass der Marker sichtbar ist
                    });
                } else {
                    marker.setPosition({ lat: generatedLat, lng: generatedLng });
                    marker.setVisible(true); // Mache den Marker sichtbar
                }

                // Karte zentrieren und zoomen
                map.setCenter({ lat: generatedLat, lng: generatedLng });
                map.setZoom(10);

                // Deaktiviere die Möglichkeit, den Marker zu ändern
                google.maps.event.clearListeners(map, 'click');
                document.getElementById('nextRound').style.display = 'block';
            })
            .catch(error => console.error('Fehler beim Abrufen der Koordinaten der Stadt:', error));
    });


    // Event-Listener für den Button zur nächsten Runde
    document.getElementById('nextRound').addEventListener('click', function() {
        // Reset der Variablen und UI
        selectedCity = '';
        document.getElementById('selected-city').textContent = 'Ausgewählte Stadt: ';

        document.getElementById('condition').textContent = 'Bedingung: ';
        document.getElementById('temperature').textContent = 'Temperatur: ';
        document.getElementById('humidity').textContent = 'Luftfeuchtigkeit: ';
        document.getElementById('pressure').textContent = 'Luftdruck: ';
        document.getElementById('wind').textContent = 'Windgeschwindigkeit: ';
        document.getElementById('direction').textContent = 'Windrichtung: ';
        document.getElementById('visibility').textContent = 'Sichtweite: ';
        document.getElementById('uv').textContent = 'UV-Index: ';
        document.getElementById('rain').textContent = 'Niederschlag: ';
        document.getElementById('co').textContent = 'Kohlenmonoxid: ';
        document.getElementById('o3').textContent = 'Ozon: ';
        document.getElementById('pm25').textContent = 'Feinstaub (PM2.5): ';
        document.getElementById('pm10').textContent = 'Grober Feinstaub (PM10): ';
        
        document.getElementById('distance').textContent = '';

        document.getElementById('selected-city').style.display = `none`;
        
        if (guessMarker) {
            guessMarker.setMap(null);
            guessMarker = null;
        }

        document.getElementById('nextRound').style.display = 'none';

        generateLocation();

        // Re-enable map clicks
        map.addListener('click', function(event) {
            if (!guessMarker) {
                guessMarker = new google.maps.Marker({
                    position: event.latLng,
                    map: map,
                    icon: customGuessIcon,
                    title: "Markierter Ort"
                });
            } else {
                guessMarker.setPosition(event.latLng);
            }
        });
    });
});
