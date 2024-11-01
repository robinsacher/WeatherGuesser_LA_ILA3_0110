# Projekt-Dokumentation
- Spycher Elias
- Sacher Robin
- Hitz Julian
- Müller Damian

| Datum | Version | Zusammenfassung                                                                                                                          |
| ----- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
|   23.08.2024    | 0.0.0   | Projekt Idee wurde in der Gruppe ausgesucht, Elias Spycher hat angefangen mit dem Realisieren, hauptsächlich das testen von verschiedenen APIs und erstellen der files. Julian Hitz, Damian Müller und Robin Sacher haben mit dem Planen und Informieren begonnen, Robin hat den Projektantrag mit Julian Hitz und Damian Müller erstellt|
|   30.08.2024    | 0.1.0   | Elias Spycher hat begonnen die Grundstruktur zu erstellen, Robin, Julian und Damian haben weiterhin geplant und dokumentiert |
|   06.09.2024    | 1.0.1   | Elias Spycher hat die Grundstruktur des programms erstellt und die beiden APIs implementiert, somit kann man jetzt raten und Wetterdaten werden generiert. Damian Müller hat die Startseite erstell, Robin Sacher hat mit der DOM Manlipulation begonnen und mit Julian Hitz weiter geplant |
|   13.09.2024    | 1.0.2   | Elias Spycher hat mit dem testen begonnen und dokumentiert, Damian Müller, Robin Sacher und Julian Hitz haben weiterhin die Anforderungen implementiert, Damian hat Text Elemente hinzugefügt, Robin hat DOM Manipulation abgeschlossen. |   
|   20.09.2024    | 1.1.0   | Robin hat die Usablity mit einer stabilieren Version verbessert, Damian hat weiterhin mit Elias und Julian dokumentiert, darunter Testfälle verbessert, Anforderungen verbessert etc.|
|   27.09.2024    | 1.2.0   | Elias hat custom markers hinzugefügt, Dokumentation wurde von allen verbssert.|
|   01.11.2024    | 1.3.0   | Berichte geschrieben von allen, Robin hat Testen abgeschlossen, Don Norman und Usability Verbesserungen von Damian und Julian. Versionierung von Elias überarbeitet.|

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
Wir haben uns entschieden, auf die Implementierung der Höhenangaben in Metern über Meer (M.ü.M.) zu verzichten, da dafür eine zusätzliche, dritte API erforderlich gewesen wäre. Diese zusätzliche API hätte die Komplexität des Systems erhöht und die Wartbarkeit des Projektes schwieriger gemacht.

Ansonsten haben wir uns nicht entschieden, Teile des Projekts wegzulassen oder neue Funktionen hinzuzufügen.

## 4 Realisieren
| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  | 30.08.2024      | Robin Sacher          |   45 min       |  45 min                 |
| 1.B  | 30.08.2024       | Robin Sacher          |  10 min         | 15 min                  |
| 2.A | 30.08.2024       | Julian Hitz  | 45 min | 45 min      |
| 2.B | 30.08.2024       | Julian Hitz  | 10 min     | 20 min      |
| 3.A | 30.08.2024       | Elias Spycher | 45 min   | 60 min      |
| 3.B | 30.08.2024       | Elias Spycher  | 10 min    | 15 min     |
| 4.A |       | Damian Müller  | 45 min |     |
| 4.B  |       | Damian Müller | 10 min |      |
| 5.A | 30.08.2024       | Robin Sacher    | 45 min  | 60 min        |
| 5.B | 30.08.2024       | Robin Sacher  | 10 min    | 15 min      |
| 6.A  | 30.08.2024      | Julian Hitz   | 45 min    | 60 min      |
| 6.B  | 30.08.2024      | Julian Hitz   | 10 min   | 15 min        |
| 7.A  |30.08.2024        | Elias Spycher  | 45 min    | 60 min       |
| 7.B  | 30.08.2024      | Elias Spycher  | 10 min  | 15 min      |
| 8.A  | 30.08.2024      | Damian Müller  | 45 min | 40 min     |
| 8.B  |  30.08.2024      | Damian Müller | 10 min  | 15 min     |
| 9.A  | 06.09.2024      | Robin Sacher   | 45 min  | 50 min      |
| 9.B |  06.09.2024     | Robin Sacher    | 10 min   | 20 min      |
| 10.A  | 06.09.2024    | Julian Hitz    | 45 min   | 50 min      |
| 10.B |  06.09.2024    | Julian Hitz    | 10 min   | 15 min      |
| 11.A | 06.09.2024      | Elias Spycher | 45 min    | 60 min     |
| 11.B | 06.09.2024     | Elias Spycher  | 10 min    | 20 min     |
| 12.A | 06.09.2024     | Damian Müller  | 45 min    | 50 min     |
| 12.B | 06.09.2024     | Damian Müller  | 10 min    | 15 min     |
| 13.A  | 13.09.2024    | Robin Sacher    | 45 min   |  40 min     |
| 13.B  | 13.09.2024    | Robin Sacher   | 10 min     | 20 min    |
| 14.A  | 13.09.2024     | Julian Hitz   | 45 min    | 50 min     |
| 14.B  | 13.09.2024    | Julian Hitz    | 10 min    | 15 min     |
| 15.A  | 13.09.2024| Elias Spycher | 45 min    | 50 min     |
| 15.B  | 13.09.2024     | Elias Spycher | 10 min    | 15 min     |


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
| 9.1  | 27.09.2024      |     OK     |    Robin Sacher    |
| 10.1  | 27.09.2024      |     OK     |   Robin Sacher     |
| 11.1  |  27.09.2024     |     OK     |   Robin Sacher     |
| 12.1  |  27.09.2024     |     OK     |   Robin Sacher     |
| 13.1  | 13.09.2024      |     OK     |   Elias Spycher     |
| 14.1  | 13.09.2024      |     OK     |   Elias Spycher     |
| 15.1  | 13.09.2024      |     OK     |   Elias Spycher     |

Aktuell sind nicht alle Tests erfolgreich, da die Anzeige der Höhe in Metern über dem Meeresspiegel noch nicht implementiert wurde. Um diese Funktionalität zu realisieren, wäre die Anbindung an eine zusätzliche API erforderlich, die die entsprechenden Daten bereitstellt. Abgesehen von diesem Punkt erfüllen alle anderen Tests die festgelegten Anforderungen.

Für zukünftige Entwicklungen des Projekts könnte man folgende Erweiterungen implementieren:
- Höhenangabe über den Meeresspiegel: Die Implementierung einer API, die die Höhe eines bestimmten Standorts über dem Meeresspiegel anzeigt, könnte den Nutzern zusätzliche Informationen bietet.

- Erweiterte Standortinformationen: Neben der Höhe könnten auch weitere relevante Daten über den Ort hinzugefügt werden, wie z. B. das Klima oder die Bevölkerungsdichte.

- Levels und Punktesystem: Um das Spielerlebnis spannender zu gestalten, könnte ein Punkte- und Levelsystem implementiert werden, das es dem Spieler ermöglicht, im Spiel Level aufzusteigen.

## 6 Auswerten
- Elias Spycher: https://portfolio.bbbaden.ch/view/view.php?t=c10013c399a4ae1be37d
- Robin Sacher: https://portfolio.bbbaden.ch/view/view.php?t=b03c0b95ee77390232cf
- Julian Hitz: 
- Damian Müller: https://portfolio.bbbaden.ch/view/view.php?t=27ca37a483a1548a3b3b
