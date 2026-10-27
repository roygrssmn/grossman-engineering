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

Ich integriere KI in Backoffice-Aufgaben, bei denen Vorschläge die Entscheidungen der Mitarbeitenden unterstützen können:

- **Themen-Tags:** DemoLogic schlägt maximal zwei Tags aus einem freigegebenen Katalog vor. Mitarbeitende prüfen Vorschläge vor der Veröffentlichung; die Wiederverwendung für wiederkehrende Veranstaltungen erfordert eine ausdrückliche Freigabe.
- **Tagesberichte:** DemoLogic erstellt deutsche Entwürfe aus ausgewählten Veranstaltungsdaten. Demo Radar übernimmt Prüfung, DeepL-Übersetzung und Veröffentlichung in beiden Sprachen.
- **Schwierige Routen:** Unabhängig von DemoLogic habe ich Werkzeuge für die Routenassistenz entwickelt, die Quelltext, Wegpunkte und Fehlerdetails für Korrekturvorschläge durch ein Sprachmodell aufbereiten. Der manuelle Ablauf erfordert eine Prüfung und einen Dry Run vor dem Import. Anschließend verarbeitet die bestehende Pipeline mit OpenStreetMap und OpenRouteService die geprüften Ankerpunkte.
- **Guardrails:** Modellausgaben werden validiert, Prüfentscheidungen erfasst und angewandte Änderungen protokolliert. Die Routenassistenz darf Adresstext vorschlagen, schreibt aber keine endgültigen Koordinaten.

Die Engineering-Arbeit verbindet Inferenz mit einem bestehenden Produktablauf: klare Zuständigkeiten, ausdrückliche Freigabe und Wiederherstellung, wenn eine externe Anfrage fehlschlägt oder ihr Ausgang unklar bleibt.

## DemoLogic: KI-Service-Engineering

Ich habe DemoLogic als privaten KI-Service entwickelt und in das Backoffice von Demo Radar integriert. Ich verglich Modelle und Anbieter, bewertete die Vorschlagsqualität und maß den Prüfaufwand bis zur freigegebenen Arbeit. Die Ergebnisse prägten einen Arbeitsablauf mit menschlicher Freigabe.

[Die DemoLogic-Case-Study lesen](/de/project/demo-logic)

## Das Produkt betreiben

Ich habe Staff-Authentifizierung mit Argon2id-Passwort-Hashing, verpflichtender TOTP-MFA, Wiederherstellungscodes und widerrufbaren serverseitigen Sessions implementiert. Der KI-Support-Workflow umfasst Provider-Pacing, begrenzte Wiederholungsversuche und ein Audit-Protokoll.

DemoLogic erhält Anfragekennungen, gespeicherte Antworten und den Wiederherstellungszustand über Neustarts hinweg. Demo Radar kann ein bekanntes Ergebnis ohne erneuten Modellaufruf abrufen. Bei unklarem Ausgang pausiert die Verarbeitung zur Prüfung, statt die Anfrage blind zu wiederholen. Das Produkt-Backend verantwortet Berechtigungen und Veröffentlichung; der KI-Service übernimmt Inferenz und Entwurfserstellung.

Außerdem habe ich nur lesende MCP-Tools mit benannten Authentifizierungs-Tokens, Limits pro Agent und Zugriffsprotokollierung implementiert. Der öffentliche Remote-Endpunkt ist durch eine Release-Freigabe gesperrt; die Implementierung unterstützt private und lokale Nutzung. Monitoring-Konfiguration, Backup-/Restore-Verfahren und Rollback-Dokumentation gehören ebenfalls zur Betriebsarbeit.

> ### Status
>
> * **Live:** [demo-radar.com](https://demo-radar.com)
> * **Einordnung:** Unabhängiges Civic-Information-Produkt auf Basis offizieller öffentlicher Daten
> * **Verantwortung:** Produkt, Architektur, Delivery, Qualität und Betrieb
> * **Code und Evaluation:** Architektur- und Code-Walkthroughs auf Anfrage
> * **KI-Service:** [Öffentlicher DemoLogic-Code und Evaluation](https://github.com/demo-radar/demo-radar-logic)
