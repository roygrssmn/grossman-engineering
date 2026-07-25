## Die Fragestellung

2024 leitete ich einen Proof of Concept, um zu testen, ob Retrieval-Augmented Generation interne technische Dokumentation leichter nutzbar machen kann. Das Ziel war nicht, ein produktives KI-System zu behaupten, sondern vor einer größeren Investition zu verstehen, wo der Ansatz funktioniert und wo er scheitert.

## Der Ansatz

Ich behandelte den Prototyp als Evaluationsproblem statt als polierte Demo. Wir verbanden technische Dokumentation aus Google Workspace über Dify mit OpenAI GPT-4 und untersuchten Retrieval-Qualität, Quellenbindung und Fehlermuster.

Der Blick aus dem Quality Engineering veränderte die Fragen:

- Können wir erkennen, wenn relevanter Kontext fehlt?
- Sind Antworten in den gefundenen Quellen verankert?
- Welche Fehler können Guardrails erkennen und welche bleiben mehrdeutig?
- Welche Nachweise wären vor einem Produktiveinsatz notwendig?

## Das Ergebnis

Der Proof of Concept zeigte nützliches Potenzial, machte aber auch inkonsistentes Retrieval und Halluzinationen sichtbar, die sich mit den damaligen Werkzeugen nicht zuverlässig begrenzen ließen. Genau das war das wertvolle Ergebnis: eine klarere Grenze zwischen einem überzeugenden Prototyp und einem System, dem man im Betrieb vertrauen kann.

Diese frühe Arbeit prägt heute meine vertiefte Beschäftigung mit AI-Evaluation, Datenqualität und Produktions-Guardrails.

> ### Umfang
>
> * **Typ:** Proof of Concept, kein Produktiveinsatz
> * **Modelle:** OpenAI GPT-4
> * **Datenquelle:** interne technische Dokumentation
> * **Orchestrierung:** Dify
