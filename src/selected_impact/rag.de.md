## Die Vorgeschichte

2024 war das Potenzial von Retrieval-Augmented Generation bereits deutlich, während die Umsetzungsmuster noch wenig ausgereift waren. Ich leitete einen Proof of Concept, um zu untersuchen, wie KI mit interner technischer Dokumentation arbeiten kann.

Das Ziel war nicht, ein produktives System zu präsentieren. Wir wollten das Potenzial zeigen, Schwachstellen sichtbar machen und verstehen, welche Nachweise vor einer größeren Investition notwendig wären.

## Meine Arbeitsweise

Ich behandelte den Proof of Concept als Stresstest und nicht als polierte Demo. Wir verbanden technische Dokumentation aus Google Workspace über Dify mit OpenAI GPT-4 und untersuchten Retrieval-Qualität, Quellenbindung und Fehlermuster.

Der Blick aus dem Quality Engineering verschob den Fokus von „Kann das System antworten?“ zu besseren Fragen:

- Können wir erkennen, wenn relevanter Kontext fehlt?
- Ist die Antwort in der gefundenen Quelle verankert?
- Welche Fehler können Guardrails erkennen?
- Was müssten wir messen, bevor wir dem System im Produktivbetrieb vertrauen?

Ziel war, die Lücke zwischen experimenteller KI und operativer Sicherheit sichtbar zu machen.

## Die unbequemen Erkenntnisse

Wir stießen auf inkonsistentes Retrieval und Halluzinationen, die sich mit den verfügbaren Werkzeugen nicht zuverlässig begrenzen ließen. Der Prototyp überzeugte, wenn er funktionierte; seine Fehler waren jedoch schwer vorherzusagen und zu erklären.

Genau das war das wertvolle Ergebnis. Der Proof of Concept zeigte sowohl die Chance als auch die Grenzen und bestätigte einen Grundsatz, den ich weiterhin nutze: Eine KI-Demo verdient Aufmerksamkeit; ein produktives System muss sich Vertrauen erarbeiten.

> ### PoC-Spezifikationen
>
> * **Typ:** Proof of Concept
> * **Modell:** OpenAI GPT-4
> * **Datenquelle:** technische Dokumentation aus Google Workspace
> * **Orchestrierung:** Dify
