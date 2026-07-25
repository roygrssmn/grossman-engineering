## The context

At JFrog, I worked as a QA technical lead in a developer-platform environment serving roughly one billion downloads per month and holding about 800,000 packages across 20 formats.

That breadth made QA and automation difficult in a very specific way: a change could behave correctly for one package ecosystem and still break compatibility, metadata, permissions, or client behaviour somewhere else.

## What my work centered on

My role centered on quality strategy and test automation rather than DevOps ownership:

- Set direction for test architecture and automated coverage
- Helped teams reason about risk across package formats and platform changes
- Connected test results with release decisions and production feedback
- Used on-call experience to bring real failure modes back into the test strategy

## What I would change today

With the benefit of hindsight, I would make the feedback system more explicit:

- Define a small set of quality signals—such as escaped regressions, flaky-test ownership, compatibility coverage, and time to diagnose—and review them with Engineering and Product.
- Separate fast contract and compatibility tests from a smaller set of end-to-end journeys, so failures point more clearly to the responsible layer.

The main lesson was not simply “design for reliability.” It was that QA automation at platform scale needs an operating loop: identify risk, choose the right confidence layer, learn from real failures, and deliberately remove tests that no longer earn their cost.

> ### Platform context
>
> * **Scale:** roughly 1B downloads per month
> * **Repository:** about 800K packages
> * **Breadth:** 20 package formats
> * **Focus:** QA strategy, test architecture, and automation
