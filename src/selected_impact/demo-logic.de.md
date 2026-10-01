## Modelle für Themen-Tag-Vorschläge vergleichen

DemoLogic ist mein KI-Engineering-Capstone an der neue fische × SPICED Academy und mit Demo Radar verbunden. Ich habe einen separaten, notebookbasierten Evaluationsablauf für Themen-Tag-Vorschläge aufgebaut: mit geprüften Beispielen, festem Datensplit und Trennung nach Veranstaltungsgruppen, um Leakage durch wiederkehrende Demonstrationen zu reduzieren.

- **Einfache Baselines:** Keyword- und Regex-Regeln sowie Wort- und Zeichen-TF-IDF mit logistischer Regression.
- **Semantisches Modell:** mehrsprachiges mDeBERTa-v3 NLI (`MoritzLaurer/mDeBERTa-v3-base-mnli-xnli`).
- **Gehostete LLMs:** OpenAI GPT-OSS 20B (`openai/gpt-oss-20b`) über Groq und Qwen3.6 35B A3B FP8 (`Qwen/Qwen3.6-35B-A3B-FP8`) über Hetzner. Groq und Hetzner stellen die Inferenzdienste bereit; die Modellidentitäten werden separat dokumentiert.
- **Evaluation:** Tagging-Qualität, Abdeckung, Inferenzzeit und Kosten. Die Prüfung der Referenzlabels bleibt vom Modell-Tuning getrennt. Produktionsdaten, Einzelvorhersagen und trainierte private Artefakte bleiben außerhalb veröffentlichter Materialien.

Ein nützliches Ergebnis: Das getestete NLI-Setup lieferte in den Entwicklungsprüfungen weniger brauchbare Vorschläge als Regeln oder TF-IDF. Ich dokumentierte seine Fehler und Grenzen und empfahl, dieses Setup nicht in den Dienst zu integrieren. Das ist ein Befund zu einer Konfiguration, kein Final-Test-Ergebnis und kein Urteil über alle semantischen Modelle.

### Integrationsentwurf: die API-Grenze

Mein Integrationsentwurf sieht Modellinferenz hinter einer API vor, die Vorschläge zurückgibt. Authentifizierung, Staff-Prüfung, Freigabe und Datenbank-Schreibzugriffe bleiben bei Demo Radar. Die Modellauswahl hängt von den Evaluationsergebnissen ab; manuelles Tagging bleibt ein gültiges Ergebnis.

### Früheres Demo-Radar-Experiment: wiederkehrende Veranstaltungen erkennen

Bei 2.449 historischen Veranstaltungen erreichte ein ausschließlich titelbasierter Recurrence-Proxy eine **Präzision von 29,2 %**. Mit öffentlichen Orts- und Terminmerkmalen – Venue-Tokens, grober Postleitzahl, Wochentag und Startzeit – stieg die vorläufige Präzision auf **88,8 %**. Diese Merkmale helfen dabei, wiederkehrende öffentliche Veranstaltungsreihen zu erkennen; Ort und Zeit bestimmen niemals eigenständig ein politisches Themen-Tag.

Dies sind explorative Ergebnisse zur **Erkennung wiederkehrender Veranstaltungen**, keine Tagging-Genauigkeit und keine DemoLogic-Modellwerte.

> ### Projektkontext
>
> * **Einordnung:** KI-Engineering-Capstone mit Bezug zu Demo Radar
> * **Code und Evaluation:** Experiment-Walkthrough auf Anfrage
> * **Verwandte Arbeit:** [Demo Radar: Produkt, Architektur und Betrieb](/de/project/demo-radar)
