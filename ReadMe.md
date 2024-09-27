# Projekt-Dokumentation

- Spycher Elias
- Sacher Robin
- Hitz Julian
- Müller Damian

| Datum | Version | Zusammenfassung                                                                                                                          |
| ----- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
|   31.08.2024    | 0.0.1   | Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in _einem_ Satz, was Sie erreicht haben. |
|   06.09.2024    | 0.1.1   | Elias Spycher hat direkt mit dem Realisiseren des Projekts begonnen, Julian Hitz und Damian Müller haben weiterhin an der Planung gearbeitet.|
|   13.09.2024    | 1.0.0   | |   
|   13.09.2024    | 0.0.0   | |
|   13.09.2024    | 0.0.0   | |

## 1 Informieren

### 1.1 Ihr Projekt

In unserem Projekt verwenden Wir 2 APIs, eine Wetter API und eine Map API. Man sollte auf einer Website anhand der Wetterdaten auf einer Map die dazugehörige Stadt erraten.

Wir erhoffen uns in diesem Projekt die Porzesse von DevOps zu vertiefen, weil wir diese gerade in dem Modul 324 behandeln. Ausserdem möchten wir lernen, wie wir eine Webapplikation entwickeln können und wie wir in diese Webapplikation verschiedene API's einbinden können. Dies finden wir sehr interessant und möchten es darum vertiefen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ           | Beschreibung                                                                                                                                                                                |
| ---- | --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            | Funktional    | Als ein User möchte ich, dass die Temperatur der Stadt angezeigt wird, damit ich einschätzen kann, wo ich bin.                                                                              |
| 2    | Muss            | Funktional    | Als ein User möchte ich, dass die Luftfeuchtigkeit angezeigt wird, damit ich einschätzen kann, wo ich bin.                                                                                  |
| 3    | Muss            | Funkitonal    | Als ein User möchte ich, dass der Luftdruck angezeigt wird, damit ich einschätzen kann, wo ich bin.                                                                                         |
| 4    | Muss            | Funktional    | Als ein User möchte ich, dass die Höhe in Meter über Meer angezeigt wird, damit ich einschätzen kann, wo ich bin.                                                                           |
| 5    | Muss            | Funktional    | Als ein User möchte ich, dass die aktuelle Wetterlage angezeigt wird, damit ich einschätzen kann, wo ich bin.                                                                               |
| 6    | Muss            | Funktional    | Als ein User möchte ich, dass die Windgechwindigkeit angezeigt wird, damit ich einschätzen kann, wo ich bin.                                                                                |
| 7    | Muss            | Funktional    | Als ein User möchte ich, dass die Windrichtung angezeigt wird, damit ich einschätzen kann,wo ich bin.                                                                                       |
| 8    | Muss            | Funktional    | Als ein User möchte ich, dass die Qualität der Luft angezeigt wird, damit ich einschätzen kann, wo ich bin.                                                                                 |
| 9    | Kann            | Funktional    | Als ein User möchte ich, dass vergangene Wetterdaten angezeigt werden, damit ich einschätzen kann, wo ich bin.                                                                              |
| 10   | Muss            | Funktional    | Als ein User möchte ich, dass ich auf die Karte clicken kann, damit ich eine Stadt auswählen kann.                                                                                          |
| 11   | Muss            | Funktional    | Als ein User möchte ich, dass wenn mein Tipp mehr als 100 Kilometer von der korrekten Stadt entfernt ist, ich ein Rückmeldung bekomme, damit ich weiss, dass mein Tipp zu ungenau war.      |
| 12   | Muss            | Funktional    | Als ein User möchte ich, dass wenn mein Tipp weniger als 100 Kilometer von der korrekten Stadt entfernt ist, ich eine Rückmeldung bekomme, damit ich weiss, dass mein Tipp genau genug war. |
| 13   | Muss            | Funktional    | Als ein User möchte ich, dass ich erfahre, welches die korrekte Stadt war, damit kein Missverständnis entsteht, wenn zwei grosse Städte nahe nebeneinander liegen.                          |
| 14   | Muss            | Qualität      | Als ein Entwickler möchte ich, dass die Don Norman Prinzipien eingehalten werden, damit die Webapplikation einfach zu bedienen ist.                                                        |
| 15   | Muss            | Qualität      | Als ein Entwickler möchte ich, dass die Coderichtlinien eingehalten werden, damit die Codelesbarkeit erhöht wird.                                                                           |


### 1.3 Testfälle

| TC-№ | Ausgangslage              | Eingabe                                            | Erwartete Ausgabe                                                                                         |
| ---- | ------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1.1  | Programm gestartet        | Playbutton wurde gedrückt                          | Temperatur wird in der Liste mit den Informationen angezeigt.              |
| 2.1  | Programm gestartet        | Playbutton wurde gedrückt                          | Luftfeuchtigkeit wird in der Liste mit den Informationen angezeigt.        |
| 3.1  | Programm gestartet        | Playbutton wurde gedrückt                          | Luftdruck wird in der Liste mit den Informationen angezeigt.               |
| 4.1  | Programm gestartet        | Playbutton wurde gedrückt                          | Höhe in Meter über Meer wird in der Liste mit den Informationen angezeigt. |
| 5.1  | Programm gestartet        | Playbutton wurde gedrückt                          | aktuelle Wetterlage wird in der Liste mit den Informationen angezeigt.     |
| 6.1  | Programm gestartet        | Playbutton wurde gedrückt                          |  Windgechwindigkeit wird in der Liste mit den Informationen angezeigt.      |
| 7.1  | Programm gestartet        | Playbutton wurde gedrückt                          | Windrichtung wird in der Liste mit den Informationen angezeigt.            |
| 8.1  | Programm gestartet        | Playbutton wurde gedrückt                          | Qualität der Luft wird in der Liste mit den Informationen angezeigt.       |
| 9.1  | Programm gestartet        | Playbutton wurde gedrückt                          |  vergangene Wetterdaten wird in der Liste mit den Informationen angezeigt.  |
| 10.1 | Spiel gestartet           | Stadt auswählen                                    | richtig oder falsch Meldung                                                           |
| 11.1 | Daten werden angezeigt    | Stadt auswählen                                    | deine Stadt ist weiter als 100 km entfernt                                                                |
| 12.1 | Daten werden angezeigt    | Stadt auswählen                                    | deine Stadt ist näher als 100 km entfernt                                                                 |
| 13.1 | Stadt wurde ausgewählt    | weiter anklicken                                   | die richtige Stadt war ...                                                                                |
| 14.1 | Applikation ist gestartet | -                                                | Don Norman Prinzipien wurden eingehalten                                                                    |
| 15.1 | Programm ist geöffnet     | Code wird auf Richtlinien überprüft                | Coderichtlinien werden eingehalten                                                                        |


### 1.4 Diagramme

![WeatherGuesser_LA_ILA3_0110_UseCase drawio](https://github.com/user-attachments/assets/314fefdb-ab93-4f4a-a924-878a20f1aee1)

## 2 Planen

| AP-№ | Frist      | Zuständig     | Beschreibung                                                                                      | geplante Zeit |
| ---- | ---------- | ------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| 1.A  | 27.09.2024 | Robin Sacher  | Integration der Wetter-API zur Abrufung der Temperaturdaten und Implementierung der Anzeige.      | 45 min        |
| 1.B  | 27.09.2024 | Robin Sacher  | Testen und Debuggen der Temperaturanzeige inklusive API-Verbindungen.                             | 10 min        |
| 2.A  | 27.09.2024 | Julian Hitz   | Integration der Wetter-API zur Abrufung der Luftfeuchtigkeit und Implementierung der Anzeige.     | 45 min        |
| 2.B  | 27.09.2024 | Julian Hitz   | Testen und Debuggen der Luftfeuchtigkeitsanzeige inklusive API-Verbindungen.                      | 10 min        |
| 3.A  | 27.09.2024 | Elias Spycher | Integration der Wetter-API zur Abrufung des Luftdrucks und Implementierung der Anzeige.           | 45 min        |
| 3.B  | 27.09.2024 | Elias Spycher | Testen und Debuggen der Luftdruckanzeige inklusive API-Verbindungen.                              | 10 min        |
| 4.A  | 27.09.2024 | Damian Müller | Integration der Wetter-API zur Abrufung der Höhe über Meer und Implementierung der Anzeige.       | 45 min        |
| 4.B  | 27.09.2024 | Damian Müller | Testen und Debuggen der Höhenanzeige inklusive API-Verbindungen.                                  | 10 min        |
| 5.A  | 27.09.2024 | Robin Sacher  | Integration der Wetter-API zur Abrufung der aktuellen Wetterlage und Implementierung der Anzeige. | 45 min        |
| 5.B  | 27.09.2024 | Robin Sacher  | Testen und Debuggen der Anzeige der aktuellen Wetterlage inklusive API-Verbindungen.              | 10 min        |
| 6.A  | 27.09.2024 | Julian Hitz   | Integration der Wetter-API zur Abrufung der Windgeschwindigkeit und Implementierung der Anzeige.  | 45 min        |
| 6.B  | 27.09.2024 | Julian Hitz   | Testen und Debuggen der Windgeschwindigkeitsanzeige inklusive API-Verbindungen.                   | 10 min        |
| 7.A  | 27.09.2024 | Elias Spycher | Integration der Wetter-API zur Abrufung der Windrichtung und Implementierung der Anzeige.         | 45 min        |
| 7.B  | 27.09.2024 | Elias Spycher | Testen und Debuggen der Windrichtungsanzeige inklusive API-Verbindungen.                          | 10 min        |
| 8.A  | 27.09.2024 | Damian Müller | Integration der Wetter-API zur Abrufung der Luftqualität und Implementierung der Anzeige.         | 45 min        |
| 8.B  | 27.09.2024 | Damian Müller | Testen und Debuggen der Luftqualitätsanzeige inklusive API-Verbindungen.                          | 10 min        |
| 9.A  | 27.09.2024 | Robin Sacher  | Integration der Wetter-API zur Abrufung vergangener Wetterdaten und Implementierung der Anzeige.  | 45 min        |
| 9.B  | 27.09.2024 | Robin Sacher  | Testen und Debuggen der Anzeige vergangener Wetterdaten inklusive API-Verbindungen.               | 10 min        |
| 10.A | 27.09.2024 | Julian Hitz   | Implementierung der Spiel-Logik zur Stadtwahl und Ausgabe der richtigen oder falschen Meldung.    | 45 min        |
| 10.B | 27.09.2024 | Julian Hitz   | Testen und Debuggen der Stadtwahl-Logik.                                                          | 10 min        |
| 11.A | 27.09.2024 | Elias Spycher | Implementierung der Logik zur Berechnung der Entfernung zur ausgewählten Stadt (über 100 km).     | 45 min        |
| 11.B | 27.09.2024 | Elias Spycher | Testen und Debuggen der Entfernungsberechnung (über 100 km).                                      | 10 min        |
| 12.A | 27.09.2024 | Damian Müller | Implementierung der Logik zur Berechnung der Entfernung zur ausgewählten Stadt (unter 100 km).    | 45 min        |
| 12.B | 27.09.2024 | Damian Müller | Testen und Debuggen der Entfernungsberechnung (unter 100 km).                                     | 10 min        |
| 13.A | 27.09.2024 | Robin Sacher  | Implementierung der Funktion zur Anzeige der richtigen Stadt nach der Auswahl.                    | 45 min        |
| 13.B | 27.09.2024 | Robin Sacher  | Testen und Debuggen der Anzeige der richtigen Stadt.                                              | 10 min        |
| 14.A | 27.09.2024 | Julian Hitz   | Implementierung von Don Norman Prinzipien in der Webapplikation.                                  | 45 min        |
| 14.B | 27.09.2024 | Julian Hitz   | Durchführung von Test für Don Norman Prinzipien.                                                  | 10 min        |
| 15.A | 27.09.2024 | Elias Spycher | Überprüfung des Codes auf Einhaltung der Coderichtlinien.                                         | 45 min        |
| 15.B | 27.09.2024 | Elias Spycher | Testen und Debuggen basierend auf den Ergebnissen der Coderichtlinienüberprüfung.                 | 10 min        |


### Total:

Insgesamt sind es 36 Arbeitspakete.

## 3 Entscheiden

Wir haben keine Entscheidungen getroffen.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  | 30.08.2024      | Robin Sacher          |   45 min       |                   |
| 1.B  | 30.08.2024       | Robin Sacher          |  10 min         |                   |
| 2.A |       | Julian Hitz  | 45 min |       |
| 2.B |       | Julian Hitz  | 10 min     |       |
| 3.A |       | Elias Spycher | 45 min   |       |
| 3.B |       | Elias Spycher  | 10 min    |      |
| 4.A |       | Damian Müller  | 45 min |     |
| 4.B  |       | Damian Müller | 10 min |      |
| 5.A |       | Robin Sacher    | 45 min  |         |
| 5.B |       | Robin Sacher  | 10 min    |       |
| 6.A  |      | Julian Hitz   | 45 min    |        |
| 6.B  |      | Julian Hitz   | 10 min   |         |
| 7.A  |       | Elias Spycher  | 45 min    |        |
| 7.B  |      | Elias Spycher  | 10 min  |       |
| 8.A  |      | Damian Müller  | 45 min |      |
| 8.B  |       | Damian Müller | 10 min  |      |
| 9.A  |       | Robin Sacher   | 45 min  |       |
| 9.B |       | Robin Sacher    | 10 min   |       |
| 10.A  |     | Julian Hitz    | 45 min   |       |
| 10.B |      | Julian Hitz    | 10 min   |       |
| 11.A |       | Elias Spycher | 45 min    |      |
| 11.B |      | Elias Spycher  | 10 min    |      |
| 12.A |      | Damian Müller  | 45 min    |      |
| 12.B |      | Damian Müller  | 10 min    |      |
| 13.A  |     | Robin Sacher    | 45 min   |       |
| 13.B  |     | Robin Sacher   | 10 min     |     |
| 14.A  |      | Julian Hitz   | 45 min    |      |
| 14.B  |     | Julian Hitz    | 10 min    |      |
| 15.A  |      | Elias Spycher | 45 min    |      |
| 15.B  |      | Elias Spycher | 10 min    |      |
| 16.A  |      | Damian Müller  | 45 min   |      |
| 16.B  |      | Damian Müller | 10 min    |      |
| 17.A  |      | Robin Sacher   | 45 min    |      |
| 17.B  |      | Robin Sacher   | 10 min    |     |
| 18.A  |      | Julian Hitz    | 45 min    |      |
| 18.B   |     | Julian Hitz    | 10 min    |      |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |  13.09.2024     |     OK     |    Elias Spycher    |
| 2.1  |  13.09.2024     |     OK     |    Elias Spycher    |
| 3.1  |  13.09.2024     |     OK     |    Elias Spycher    |
| 4.1  |  13.09.2024     |     NOK     |    Elias Spycher    |
| 5.1  |  13.09.2024     |     OK     |    Elias Spycher    |
| 6.1  |  13.09.2024     |     OK     |    Elias Spycher    |
| 7.1  |  13.09.2024     |     OK     |    Elias Spycher    |
| 8.1  |  13.09.2024     |     OK     |    Elias Spycher    |
| 9.1  | 27.09.2024      |          |    Elias Spycher    |
| 10.1  | 27.09.2024      |          |   Elias Spycher     |
| 11.1  |  27.09.2024     |          |   Elias Spycher     |
| 12.1  |  27.09.2024     |          |   Elias Spycher     |
| 13.1  | 13.09.2024      |     OK     |   Elias Spycher     |
| 14.1  | 13.09.2024      |     OK     |   Elias Spycher     |
| 15.1  | 13.09.2024      |     OK     |   Elias Spycher     |
| 16.1  | 13.09.2024      |     OK     |   Elias Spycher     |
| 17.1  | 13.09.2024      |     OK     |   Elias Spycher     |
| 18.1  | 13.09.2024      |     NOK     |   Elias Spycher     |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Porfoliobeitrag ein.
