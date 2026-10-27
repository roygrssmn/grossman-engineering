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

I integrate AI into back-office tasks where suggestions can support staff decisions:

- **Topic tags:** DemoLogic proposes up to two tags from an approved catalog. Staff review suggestions before publication; reuse for recurring events requires explicit approval.
- **Daily briefings:** DemoLogic prepares German drafts from selected event records. Demo Radar handles staff review, DeepL translation, and publication in both languages.
- **Difficult routes:** separate from DemoLogic, I built route-assistance tooling that prepares source text, waypoints, and failure details for a language model to propose corrections. The manual workflow requires review and a dry run before import. The existing OpenStreetMap and OpenRouteService pipeline then processes the reviewed anchors.
- **Guardrails:** model output is validated, staff decisions are recorded, and applied changes have an audit trail. Route assistance may suggest address text, but it does not write final coordinates.

The engineering work connects inference to an existing product workflow: clear responsibilities, explicit review, and recovery when an external request fails or its outcome is uncertain.

## DemoLogic: AI Service Engineering

I designed and deployed DemoLogic as a private AI service integrated with Demo Radar’s back office. I compared models and providers, evaluated suggestion quality, and measured the review effort needed to turn suggestions into approved work. Those findings shaped a workflow that retains staff approval.

[Read the DemoLogic case study](/en/project/demo-logic)

## Operating the product

I built staff authentication with Argon2id password hashing, mandatory TOTP MFA, recovery codes, and revocable server-side sessions. The AI support workflow has provider pacing, bounded retries, and an audit trail.

DemoLogic retains request identities, saved answers, and recovery state across restarts. Demo Radar can retrieve a known result without another model call. An uncertain outcome pauses work for investigation rather than triggering a blind resend. The product backend owns permissions and publication; the AI service owns inference and draft preparation.

I also implemented read-only MCP tools with named-token authentication, per-agent rate limits, and access logging. The public remote endpoint is disabled behind a release gate; the implementation supports private/local use. Monitoring configuration, backup/restore procedures, and rollback documentation form part of the operational work.

> ### Status
>
> * **Live:** [demo-radar.com](https://demo-radar.com)
> * **Scope:** Independent civic-information product using official public data
> * **Ownership:** Product, architecture, delivery, quality, and operations
> * **Code and evaluation:** Architecture and code walkthroughs available on request
> * **AI service:** [Public DemoLogic code and evaluation](https://github.com/demo-radar/demo-radar-logic)
