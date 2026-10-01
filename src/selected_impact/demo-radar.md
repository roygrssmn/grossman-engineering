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

## DemoLogic: evaluating the AI options

DemoLogic is my AI Engineering capstone at neue fische × SPICED Academy, connected to Demo Radar. It compares simple rules, classical NLP, semantic models, and hosted LLMs for topic-tag suggestions. The detailed comparison, model identities, and integration design have their own case study.

[Read the DemoLogic model evaluation case study](/en/project/demo-logic)

## Operating the product

I built staff authentication with Argon2id password hashing, mandatory TOTP MFA, recovery codes, and revocable server-side sessions. The AI support workflow has provider pacing, bounded retries, and an audit trail.

I also implemented read-only MCP tools with named-token authentication, per-agent rate limits, and access logging. The public remote endpoint is disabled behind a release gate; the implementation supports private/local use. Monitoring configuration, backup/restore procedures, and rollback documentation form part of the operational work.

> ### Status
>
> * **Live:** [demo-radar.com](https://demo-radar.com)
> * **Scope:** Independent civic-information product using official public data
> * **Ownership:** Product, architecture, delivery, quality, and operations
> * **Code and evaluation:** Architecture and code walkthroughs available on request
