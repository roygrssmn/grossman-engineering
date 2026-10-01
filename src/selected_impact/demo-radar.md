## The product

[Demo Radar](https://demo-radar.com) is a live civic-information product that makes official Berlin demonstration and assembly data easier to explore. It combines a searchable list with a map, date and status filters, and route information where the source data allows it.

I started it because public information can be technically available and still be difficult to use. The product does not organise or endorse demonstrations; it helps people understand what is publicly announced.

## My contribution

I own the work end to end: product decisions, architecture, implementation, deployment, quality, and operations.

- **Frontend:** React and TypeScript
- **Backend:** Python and FastAPI
- **Data:** PostgreSQL with PostGIS, Redis, and official Berlin Police data
- **Geospatial work:** geocoding, route parsing, and road-following polylines
- **Delivery:** Docker, CI/CD, automated testing, monitoring, and an admin support workflow

## The engineering challenge

Public data is messy. Locations may be incomplete, routes arrive as text, records change, and geocoding can be ambiguous. The difficult work is not drawing markers; it is preserving source fidelity while making uncertainty visible and keeping the service useful.

## Where AI earns its place

I use AI for support tasks where it can reduce repetitive investigation without becoming the source of truth:

- **Topic tags:** deterministic rules handle clear cases first. AI proposes up to two tags from a small, approved catalog for the remaining demonstrations. Only high-confidence suggestions can pass the automated gates; everything else stays review-only.
- **Difficult routes:** when raw police route text breaks the parser or geocoder, AI receives the source text, current waypoints, and failure details. It proposes a corrected, ordered anchor list. The normal OpenStreetMap and OpenRouteService pipeline then validates the result.
- **Guardrails:** dry-run comes first, scheduled automation is disabled by default, ambiguous cases require review, and every applied decision has an audit trail. AI may suggest address text, but it does not write final coordinates.

This is the kind of AI engineering I want to practise: a narrow job, explicit validation, and a safe path back to a human when confidence is not enough.

## DemoLogic: compare models before choosing a service

DemoLogic is my AI Engineering capstone at neue fische × SPICED Academy, connected to Demo Radar. I built a separate notebook-based evaluation workflow to compare ways of suggesting topic tags, using reviewed examples, a fixed split, and event-group separation to reduce leakage from recurring demonstrations.

- **Simple baselines:** keyword and regex rules, plus word and character TF-IDF with logistic regression.
- **Semantic model:** multilingual mDeBERTa-v3 NLI (`MoritzLaurer/mDeBERTa-v3-base-mnli-xnli`).
- **Hosted LLMs:** OpenAI GPT-OSS 20B (`openai/gpt-oss-20b`) through Groq, and Qwen3.6 35B A3B FP8 (`Qwen/Qwen3.6-35B-A3B-FP8`) through Hetzner. Groq and Hetzner provide the inference services; the model identities are recorded separately.
- **Evaluation:** tagging quality, coverage, inference time, and cost, with reference-label review kept separate from model tuning. Production records, row-level predictions, and fitted private artifacts stay out of published material.

One useful result: the tested NLI setup gave less useful suggestions than rules or TF-IDF on the development checks. I retained its errors and limitations and recommended withholding that setup from service integration. This is evidence about one configuration, not a final-test result or a verdict on all semantic models.

### Integration design: the API boundary

My integration design puts model inference behind an API that returns suggestions. Demo Radar retains authentication, staff review, approval, and database writes. Model selection depends on evaluation evidence; manual tagging remains a valid outcome.

### Earlier experiment: recognising recurring events

Across 2,449 historical events, a title-only recurrence proxy achieved **29.2% precision**. Adding public location and schedule evidence—venue tokens, coarse postcode, weekday, and start time—increased provisional precision to **88.8%**. These features help identify recurring public event series; location and time never determine a political topic tag by themselves.

These are exploratory **event-recurrence matching results**, not topic-tagging accuracy or DemoLogic model scores.

## Security and operational ownership

I built staff authentication with Argon2id password hashing, mandatory TOTP MFA, recovery codes, and revocable server-side sessions. The AI support workflow has provider pacing, bounded retries, and an audit trail.

I also implemented read-only MCP tools with named-token authentication, per-agent rate limits, and access logging. The public remote endpoint is disabled behind a release gate; the implementation supports private/local use. Monitoring configuration, backup/restore procedures, and rollback documentation form part of the operational work.

> ### Status
>
> * **Live:** [demo-radar.com](https://demo-radar.com)
> * **Scope:** Independent civic-information product using official public data
> * **Ownership:** Product, architecture, delivery, quality, and operations
> * **Code and evaluation:** Architecture, code, and DemoLogic experiment walkthroughs available on request
