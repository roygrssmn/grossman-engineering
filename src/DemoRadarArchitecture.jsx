export default function DemoRadarArchitecture({ language }) {
    const copy = language === 'en' ? {
        title: 'Demo Radar: data and review flow',
        steps: [
            ['Official Berlin data', 'Import, geocode, and validate source records'],
            ['Python / FastAPI', 'PostgreSQL / PostGIS and Redis'],
            ['React / TypeScript', 'Searchable list, map, and routes']
        ],
        review: 'AI support → dry run → validation and confidence gates → staff review for ambiguous cases',
        boundary: 'Applied changes are audited. The backend owns writes; AI does not set final coordinates.'
    } : {
        title: 'Demo Radar: Daten- und Prüfablauf',
        steps: [
            ['Offizielle Berliner Daten', 'Quelldaten importieren, geocodieren und prüfen'],
            ['Python / FastAPI', 'PostgreSQL / PostGIS und Redis'],
            ['React / TypeScript', 'Durchsuchbare Liste, Karte und Routen']
        ],
        review: 'KI-Support → Dry Run → Validierung und Konfidenzprüfungen → Staff-Prüfung bei mehrdeutigen Fällen',
        boundary: 'Änderungen werden protokolliert. Das Backend schreibt Daten; KI setzt keine endgültigen Koordinaten.'
    };

    return (
        <figure className="mb-12 rounded-xl border border-stone-200 dark:border-zinc-800 p-5 sm:p-6 bg-stone-50 dark:bg-zinc-900">
            <figcaption className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-5">{copy.title}</figcaption>
            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {copy.steps.map(([title, description], index) => (
                    <li key={title} className="rounded-lg border border-stone-200 dark:border-zinc-700 p-4 bg-white dark:bg-zinc-950">
                        <span className="block text-xs text-zinc-500 dark:text-zinc-400 mb-2">0{index + 1}</span>
                        <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{title}</span>
                        <span className="block text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</span>
                    </li>
                ))}
            </ol>
            <p className="mt-5 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">{copy.review}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{copy.boundary}</p>
        </figure>
    );
}
