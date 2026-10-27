## Backoffice-Arbeit unterstützen

Ich habe DemoLogic für das Backoffice meines eigenen Civic-Information-Produkts Demo Radar entwickelt und bereitgestellt. Dabei verglich ich Modelle und Anbieter und maß die Qualität der Vorschläge sowie den Prüfaufwand.

Der Service schlägt Themen-Tags vor und erstellt deutsche Tagesberichtsentwürfe. Demo Radar übernimmt Prüfung, Übersetzung und Veröffentlichung.

## Modelle und Anbieter vergleichen

Ich verglich Keyword- und Regex-Regeln, TF-IDF-Klassifikatoren mit logistischer Regression, mehrsprachige NLI und gehostete Sprachmodelle. Zu den gehosteten Experimenten gehörten GPT-OSS über Groq, Qwen über Hetzner und Gemini über Google. Modell und Anbieter wurden getrennt dokumentiert, zusammen mit Einstellungen, Antwortzeit und geschätzten Kosten.

Wiederkehrende Veranstaltungsgruppen blieben bei der Datenaufteilung zusammen, um Leakage zu reduzieren. Ich maß Präzision, Recall, Vorschlagsabdeckung und die vollständige Übereinstimmung der Tag-Sets. Fehler und Enthaltungen blieben sichtbar. Referenzprüfung und Modell-Tuning fanden in getrennten Phasen statt; ihre Grenzen wurden dokumentiert.

## Wie die Ergebnisse meine Entscheidungen geprägt haben

Im ursprünglichen **Finalvergleich mit 121 Veranstaltungsgruppen** lag der F1-Wert bei **33,7 % für Regex, 39,7 % für TF-IDF und 65,5 % für Qwen**. Kein Kandidat erfüllte gleichzeitig die Projektziele von 80 % Präzision, 80 % Recall und 95 % Abdeckung.

Nach weiterer Entwicklung der Bewertungsrichtlinie erreichte Qwen in einer separaten **Prüfung mit 34 neuen Fällen 87,0 % Präzision und 73,4 % Recall**, Gemini **87,5 % Präzision und 76,6 % Recall**. Beide erreichten 97,1 % Abdeckung, verfehlten aber das Recall-Ziel. Es handelt sich um getrennte Studien, keine durchgehende Verbesserungskurve. Die Referenzen stammen von einer Person und erforderten teilweise Interpretation oder zusätzlichen Kontext.

Ich entschied mich für Vorschläge mit verpflichtender menschlicher Freigabe und setzte Qwen über Hetzner ein. Gemini bleibt für die hier beschriebene produktive Konfiguration ein Forschungsvergleich. Die [Evaluationsberichte](https://github.com/demo-radar/demo-radar-logic/blob/main/docs/results/README.md) erläutern Ergebnisse und Grenzen.

## Produktivität und Qualität messen

Schnelle Inferenz belegt keine Zeitersparnis im Arbeitsablauf. In einem **Praxistest mit 20 Fällen** verglich ich manuelles Tagging mit der Prüfung vorbereiteter KI-Vorschläge. Aktive Prüfzeit, Korrekturen und ungeklärte Fälle wurden getrennt von der Modellantwortzeit erfasst.

Die kleinen, unterschiedlichen Fallgruppen und mögliche Lerneffekte ließen keinen belastbaren Nachweis einer Zeitersparnis zu. Das ist ein relevantes Ergebnis: Der Nutzen eines Services muss sich auch an erledigter Arbeit und Prüfaufwand messen lassen. Der [Testbericht](https://github.com/demo-radar/demo-radar-logic/blob/main/docs/results/practical-trial.md) hält das Ergebnis fest.

## Von Experimenten zum integrierten Service

Ich habe DemoLogic als privaten, authentifizierten Service neben Demo Radar bereitgestellt. Er validiert Anfragen und Antworten, speichert Ergebnisse und Nutzungsdaten und erhält den Wiederherstellungszustand über Neustarts hinweg. Stabile Anfragekennungen ermöglichen den Abruf gespeicherter Antworten ohne erneuten Modellaufruf; bei unklarem Ausgang pausiert die Verarbeitung zur Prüfung.

Demo Radar verantwortet Veranstaltungsauswahl, Berechtigungen, Hintergrundaufgaben und Veröffentlichung. DemoLogic übernimmt Inferenz und Entwurfserstellung. Mitarbeitende geben Vorschläge vor der Veröffentlichung frei. So bleiben Modelländerungen von Anwendungsberechtigungen und redaktionellen Entscheidungen getrennt.

## Öffentlicher Code und Reproduzierbarkeit

Das [öffentliche Repository](https://github.com/demo-radar/demo-radar-logic) enthält Service-Code, Notebooks, Methodik und aggregierte Ergebnisse. Der [synthetische API-Durchlauf](https://github.com/demo-radar/demo-radar-logic/blob/main/docs/reproducibility.md) prüft Authentifizierung, Vorschläge, Berichtsentwürfe, Ergebniswiederverwendung und Wiederherstellung nach Neustarts – ohne Provider-Zugangsdaten oder private Daten.

Der Durchlauf demonstriert Softwareverhalten. Zur Reproduktion der Forschungswerte werden der private Datensatz, Referenzlabels und gespeicherte Modellantworten benötigt.

> ### Projektkontext
>
> * **Hintergrund:** Eigenständiges Projekt, entstanden aus meinem KI-Engineering-Capstone an der neue fische × SPICED Academy (Abschluss im Oktober 2026)
> * **Umsetzung:** Privater KI-Service in Demo Radar; menschliche Freigabe bleibt erhalten
> * **Code und Evaluation:** [Öffentliches Repository und Berichte](https://github.com/demo-radar/demo-radar-logic)
> * **Verwandte Arbeit:** [Demo Radar: Produkt, Architektur und Betrieb](/de/project/demo-radar)
