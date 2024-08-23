# Projekt-Dokumentation

- Spycher Elias
- Sacher Robin
- Hitz Julian
- Müller Damian

| Datum | Version | Zusammenfassung                                                                                                                          |
| ----- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
|       | 0.0.1   | Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in _einem_ Satz, was Sie erreicht haben. |
|       | ...     |                                                                                                                                          |
|       | 1.0.0   |                                                                                                                                          |

## 1 Informieren

### 1.1 Ihr Projekt

In unserem Projekt verwenden Wir 2 APIs, eine Wetter API und eine Map API. Man sollte auf einer Website anhand der Wetterdaten auf einer Map die dazugehörige Stadt erraten.

Wir erhoffen uns in diesem Projekt die Porzesse von DevOps zu vertiefen, weil wir diese gerade in dem Modul 324 behandeln. Ausserdem möchten wir lernen, wie wir eine Webapplikation entwickeln können und wie wir in diese Webapplikation verschiedene API's einbinden können. Dies finden wir sehr interessant und möchten es darum vertiefen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ           | Beschreibung                                                                                                                         |
| ---- | --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | Muss            | Funktional    | Als ein User möchte ich, dass die Temperatur der Stadt angezeigt wird, damit ich einschätzen kann, wo ich bin.                       |
| 2    | Muss            | Funktional    | Als ein User möchte ich, dass die Luftfeuchtigkeit angezeigt wird, damit ich einschätzen kann, wo ich bin.                           |
| 3    | Muss            | Funkitonal    | Als ein User möchte ich, dass der Luftdruck angezeigt wird, damit ich einschätzen kann, wo ich bin.                                  |
| 4    | Muss            | Funktional    | Als ein User möchte ich, dass die Höhe in Meter über Meer angezeigt wird, damit ich einschätzen kann, wo ich bin.                    |
| 5    | Muss            | Funktional    | Als ein User möchte ich, dass die aktuelle Wetterlage angezeigt wird, damit ich einschätzen kann, wo ich bin.                        |
| 6    | Muss            | Funktional    | Als ein User möchte ich, dass die Windgechwindigkeit angezeigt wird, damit ich einschätzen kann, wo ich bin.                         |
| 7    | Muss            | Funktional    | Als ein User möchte ich, dass die Windrichtung angezeigt wird, damit ich einschätzen kann,wo ich bin.                                |
| 8    | Muss            | Funktional    | Als ein User möchte ich, dass die qualität der Luft angezeigt wird, damit ich einschätzen kann, wo ich bin.                          |
| 9    | Kann            | Funktional    | Als ein User möchte ich, dass vergangene Wetterdaten angezeigt werden, damit ich einschätzen kann, wo ich bin.                       |
| 10   | Muss            | Funktional    | Als ein User möchte ich, dass ich auf die Karte clicken kann, damit ich eine Stadt auswählen kann.                                   |
| 11   | Muss            | Funktional    | Als ein User möchte ich, dass wenn mein Tipp mehr als 100 Kilometer von der korrekten Stadt entfernt ist, ich ein Rückmeldung bekomme, damit ich weiss, dass mein Tipp zu ungenau war.                                   |
| 12  |  Muss               | Funktional              | Als ein User möchte ich, dass wenn mein Tipp weniger als 100 Kilometer von der korrekten Stadt entfernt ist, ich eine Rückmeldung bekomme, damit ich weiss, dass mein Tipp genau genug war.                                                                                                                                |
| 13   | Muss            | Qualität      | Als ein User möchte ich, dass die Benutzeroberfläche minimalistisch gestaltet ist, damit die Webapplikation einfach zu bedienen ist. |
| 14   | Muss            | Qualität      | Als ein Entwickler möchte ich, dass die Coderichtlinien eingehalten werden, damit die Codelesbarkeit erhöht wird.                    |
| 15   | Muss            | Qualität      | Als ein Entwickler möchte ich, dass die Coderichtlinien eingehalten werden, damit die Codequalität erhöht wird.                      |
| 16   | Muss            | Randbedingung | Als Auftraggeber möchte ich, dass das Projekt in HTML5, CSS3 und JavaScript entwickelt wird.                                         |
| 17   | Kann            | Randbedinugng | Als Auftraggeber möchte ich, dass Libraries wie HTML Bootstrap verwendet werden, damit die Weiterentwicklung einfacher wird.         |


✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc.), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). Die User Story selber hat folgende Form: _Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️_.

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

✍️Fügen Sie hier ein Use Case-Diagramm mit mindestens 3 Anwendungsfällen ein; und eine Skizze davon, wie Ihre Netzseite aussehen sollte.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |           |              |               |
| ...  |       |           |              |               |

Total:

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Porfoliobeitrag ein.
