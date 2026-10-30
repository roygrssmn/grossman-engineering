const content = {
    en: {
        heading: 'Engineering projects',
        context: 'Machine Learning Engineering · Course project',
        title: 'From a notebook to a tested application',
        summary: 'I refactored a course house-price notebook into a reusable Python package, a FastAPI service and a Streamlit interface.',
        focus: 'The focus was making the pieces work together: small objects, shared input validation, verified model loading, automated tests and Docker delivery.',
        limitation: 'An educational project using historical data, not a live property valuation service.',
        link: 'Explore the code',
        stack: 'Technologies',
    },
    de: {
        heading: 'Engineering-Projekte',
        context: 'Machine Learning Engineering · Kursprojekt',
        title: 'Vom Notebook zur getesteten Anwendung',
        summary: 'Ich habe ein im Kurs bereitgestelltes Notebook zur Hauspreisvorhersage in ein wiederverwendbares Python-Paket, einen FastAPI-Service und eine Streamlit-Oberfläche überführt.',
        focus: 'Im Mittelpunkt stand das Zusammenspiel: kleine Objekte, gemeinsame Eingabevalidierung, geprüftes Laden des Modells, automatisierte Tests und Bereitstellung mit Docker.',
        limitation: 'Ein Lernprojekt mit historischen Daten, kein Live-Dienst zur Immobilienbewertung.',
        link: 'Code ansehen',
        stack: 'Technologien',
    },
};

const technologies = ['Python', 'scikit-learn', 'Pydantic', 'FastAPI', 'Streamlit', 'pytest', 'Docker'];

export default function EngineeringProjectsSection({ language }) {
    const copy = content[language] ?? content.en;

    return (
        <section id="engineering-projects" aria-labelledby="engineering-projects-heading" className="scroll-mt-28 mb-20 md:mb-32">
            <h2 id="engineering-projects-heading" className="font-serif text-3xl mb-8 md:mb-12 border-b border-stone-200 dark:border-zinc-800 pb-4 text-zinc-900 dark:text-zinc-50">
                {copy.heading}
            </h2>
            <article className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl p-6 md:p-8">
                <p className="text-xs font-semibold tracking-wide uppercase text-zinc-600 dark:text-zinc-300 mb-4">{copy.context}</p>
                <h3 className="font-serif text-2xl leading-snug text-zinc-900 dark:text-zinc-50 mb-4">{copy.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">{copy.summary}</p>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">{copy.focus}</p>
                <ul aria-label={copy.stack} className="flex flex-wrap gap-2 mb-6">
                    {technologies.map(technology => (
                        <li key={technology} className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 bg-stone-100 dark:bg-zinc-800 px-2 py-1 rounded">{technology}</li>
                    ))}
                </ul>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">{copy.limitation}</p>
                <a href="https://github.com/roy-nfisch/king-county-house-price-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400">
                    {copy.link}
                    <span aria-hidden="true">↗</span>
                </a>
            </article>
        </section>
    );
}
