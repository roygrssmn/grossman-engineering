
export const framework = {
    title: 'Enterprise QA Transformation',
    role: 'Leadership & QA',
    tags: ['Playwright', 'TypeScript', 'CI/CD', 'Strategy'],
    links: [
        { type: 'github', url: 'https://github.com/yourusername/qa-framework', label: 'View Repository' }
    ],
    summary: 'Scaled quality operations from manual bottlenecks to a fully automated CI/CD pipeline, reducing release cycles by 40%.',
    content: (
        <>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Backstory</h2>
            <p className="mb-4">Manual testing processes were creating severe bottlenecks in the deployment pipeline. The engineering team needed a scalable way to ensure quality without slowing down feature delivery. Morale was low because releases were constantly delayed by regression testing.</p>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">My Philosophy in Action</h2>
            <p className="mb-4">I designed and led the implementation of an end-to-end automation framework using Playwright and TypeScript. Beyond just writing code, this required shifting the culture. I mentored the team to treat test code with the same rigor as production code and integrated the new tools directly into our CI/CD pipelines to create immediate feedback loops.</p>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Hard Truths</h2>
            <p className="mb-4">We spent too much time trying to automate 100% of the legacy test cases. This led to flaky tests and maintenance overhead. The ultimate lesson was that throwing out bad tests is just as important as writing new ones. Automation should focus on critical user journeys, not exhaustive coverage.</p>
        </>
    )
};