## Die Vorgeschichte

2024 war das Potenzial von Retrieval-Augmented Generation bereits deutlich, während die Umsetzungsmuster noch wenig ausgereift waren. Ich leitete einen Proof of Concept, um zu untersuchen, wie KI mit interner technischer Dokumentation arbeiten kann.

Das Ziel war nicht, ein produktives System zu präsentieren. Wir wollten das Potenzial zeigen, Schwachstellen sichtbar machen und verstehen, welche Nachweise vor einer größeren Investition notwendig wären.

## Was ich evaluiert habe

Ich behandelte den Proof of Concept als Stresstest und nicht als polierte Demo. Wir verbanden technische Dokumentation aus Google Workspace über Dify mit OpenAI GPT-4 und untersuchten Retrieval-Qualität, Quellenbindung und Fehlermuster.

Der Blick aus dem Quality Engineering verschob den Fokus von „Kann das System antworten?“ zu besseren Fragen:

- Können wir erkennen, wenn relevanter Kontext fehlt?
- Ist die Antwort in der gefundenen Quelle verankert?
- Welche Fehler können Guardrails erkennen?
- Was müssten wir messen, bevor wir dem System im Produktivbetrieb vertrauen?

Mein Beitrag war die Leitung des PoC sowie die Untersuchung von Retrieval-Qualität, Quellenbindung und Fehlerfällen. Die Arbeit betraf interne technische Dokumentation und die Nachweise, die für eine Produktionsentscheidung erforderlich wären.

## Erkenntnisse und Grenzen

Wir stießen auf inkonsistentes Retrieval und Halluzinationen, die sich mit den verfügbaren Werkzeugen nicht zuverlässig begrenzen ließen. Der Prototyp überzeugte, wenn er funktionierte; seine Fehler waren jedoch schwer vorherzusagen und zu erklären.

Das Ergebnis war eine explorative Bewertung des Potenzials und seiner Zuverlässigkeitsgrenzen. Ich ordne die Arbeit als PoC-Erfahrung ein; sie belegt kein produktiv eingesetztes RAG-System und keine Nutzung im Produktionsbetrieb.

> ### PoC-Spezifikationen
>
> * **Typ:** Proof of Concept
> * **Modell:** OpenAI GPT-4
> * **Datenquelle:** technische Dokumentation aus Google Workspace
> * **Orchestrierung:** Dify
