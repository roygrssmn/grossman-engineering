## Das Produkt

[Demo Radar](https://demo-radar.com) ist ein aktives Civic-Information-Produkt, das offizielle Berliner Daten zu Demonstrationen und Versammlungen leichter zugänglich macht. Es verbindet eine durchsuchbare Liste mit einer Karte, Datums- und Statusfiltern sowie Routeninformationen, sofern die Quelldaten diese enthalten.

Ich habe das Produkt gestartet, weil öffentliche Informationen technisch verfügbar und trotzdem schwer nutzbar sein können. Demo Radar organisiert oder unterstützt keine Demonstrationen; es hilft dabei, öffentlich angekündigte Ereignisse zu verstehen.

## Mein Beitrag

Ich verantworte die Arbeit End-to-End: Produktentscheidungen, Architektur, Implementierung, Deployment, Qualität und Betrieb.

- **Frontend:** React und TypeScript
- **Backend:** Python und FastAPI
- **Daten:** PostgreSQL mit PostGIS, Redis und offizielle Daten der Berliner Polizei
- **Geodaten:** Geocoding, Routenverarbeitung und straßengenaue Polylines
- **Delivery:** Docker, CI/CD, automatisierte Tests, Monitoring und ein Admin-Support-Workflow

## Die Engineering-Herausforderung

Öffentliche Daten sind nicht sauber. Orte können unvollständig sein, Routen werden als Text geliefert, Einträge ändern sich und Geocoding kann mehrdeutig sein. Die anspruchsvolle Arbeit besteht nicht darin, Marker zu zeichnen, sondern die Quelle korrekt abzubilden, Unsicherheit sichtbar zu machen und den Dienst nützlich zu halten.

## Wo KI einen echten Beitrag leistet

Ich nutze KI für Support-Aufgaben, bei denen sie wiederholte Recherche reduzieren kann, ohne selbst zur Quelle der Wahrheit zu werden:

- **Themen-Tags:** Eindeutige Fälle werden zuerst durch deterministische Regeln bearbeitet. Für die übrigen Demonstrationen schlägt KI maximal zwei Tags aus einem kleinen, freigegebenen Katalog vor. Nur Vorschläge mit hoher Konfidenz können die automatischen Prüfungen passieren; alle anderen bleiben zur manuellen Prüfung.
- **Schwierige Routen:** Wenn der Parser oder Geocoder am ursprünglichen Routentext der Polizei scheitert, erhält die KI den Quelltext, die aktuellen Wegpunkte und die Fehlerdetails. Sie schlägt eine korrigierte, geordnete Liste von Ankerpunkten vor. Anschließend validiert die normale Pipeline mit OpenStreetMap und OpenRouteService das Ergebnis.
- **Guardrails:** Zuerst kommt der Dry Run, geplante Automatisierung ist standardmäßig deaktiviert, mehrdeutige Fälle erfordern eine Prüfung und jede angewandte Entscheidung wird protokolliert. Die KI darf Adresstext vorschlagen, schreibt aber keine endgültigen Koordinaten.

Das ist die Art von AI Engineering, die ich vertiefen möchte: eine klar begrenzte Aufgabe, explizite Validierung und ein sicherer Weg zurück zum Menschen, wenn die Konfidenz nicht ausreicht.

> ### Status
>
> * **Live:** [demo-radar.com](https://demo-radar.com)
> * **Einordnung:** Unabhängiges Civic-Information-Produkt auf Basis offizieller öffentlicher Daten
> * **Verantwortung:** Produkt, Architektur, Delivery, Qualität und Betrieb
> * **Repository:** Privat; Architektur- und Code-Walkthrough auf Anfrage möglich
