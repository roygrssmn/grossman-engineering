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

The project is also where I am combining my existing strengths in delivery and quality with deeper hands-on work in data systems and AI-assisted operations.

> ### Status
>
> * **Live:** [demo-radar.com](https://demo-radar.com)
> * **Scope:** Independent civic-information product using official public data
> * **Ownership:** Product, architecture, delivery, quality, and operations
