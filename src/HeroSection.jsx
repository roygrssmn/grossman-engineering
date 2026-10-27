export default function HeroSection({ language }) {
    const copy = language === 'en' ? {
        eyebrow: 'Roy Grossman · Berlin · Engineering & Quality Leader · Applied AI',
        headline: 'I build reliable software, grow engineering teams, and integrate AI people can trust.',
        introduction: 'Engineering and quality leader with 15+ years of experience growing teams and improving software delivery. Today I also build and operate AI-enabled products. Through Demo Radar and DemoLogic, I connect model evaluation, software architecture, and production delivery—with the same attention to evidence, ownership, and failure handling that shapes my leadership work.',
        work: 'View selected work',
        contact: 'Get in touch',
        focus: 'AI Engineering capstone completed in October 2026. Now studying Machine Learning Engineering at neue fische × SPICED Academy while continuing to develop Demo Radar and DemoLogic.',
        proofHeading: 'Experience across previous roles',
        proof: [
            ['QA organisation', '1 → 20'],
            ['Product reach', '1.5M+ daily users'],
            ['Release pipeline', '4 weeks → 2'],
            ['Developer platform scale', '1B monthly downloads']
        ]
    } : {
        eyebrow: 'Roy Grossman · Berlin · Engineering- & Quality-Leader · Angewandte KI',
        headline: [
            'Ich entwickle zuverlässige Software,',
            'stärke Engineering-Teams',
            'und mache KI vertrauenswürdig.'
        ],
        introduction: 'Engineering- und Quality-Leader mit mehr als 15 Jahren Erfahrung im Teamaufbau und in der Softwareentwicklung. Heute entwickle und betreibe ich auch Produkte mit KI-Funktionen. Mit Demo Radar und DemoLogic verbinde ich Modellevaluation, Softwarearchitektur und Produktivbetrieb – mit demselben Blick auf belastbare Ergebnisse, klare Verantwortung und den Umgang mit Fehlern wie in meiner Führungsarbeit.',
        work: 'Ausgewählte Projekte',
        contact: 'Kontakt aufnehmen',
        focus: 'KI-Engineering-Capstone im Oktober 2026 abgeschlossen. Jetzt Weiterbildung in Machine Learning Engineering an der neue fische × SPICED Academy und Weiterentwicklung von Demo Radar und DemoLogic.',
        proofHeading: 'Erfahrung aus früheren Rollen',
        proof: [
            ['QA-Organisation', '1 → 20'],
            ['Produktreichweite', '1,5 Mio.+ tägliche Nutzer'],
            ['Release-Pipeline', '4 Wochen → 2'],
            ['Developer-Plattform', '1 Mrd. Downloads pro Monat']
        ]
    };

    return (
        <header className="max-w-5xl mb-20 md:mb-32 mt-12">
            <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-300 uppercase mb-4">
                {copy.eyebrow}
            </p>
            <h1 className={`font-serif text-5xl ${language === 'de' ? 'md:text-[clamp(2.5rem,5vw,4.25rem)]' : 'md:text-6xl lg:text-7xl'} leading-[1.08] tracking-tight mb-8 text-zinc-900 dark:text-zinc-50 break-words hyphens-auto`}>
                {Array.isArray(copy.headline)
                    ? copy.headline.map((line) => (
                        <span key={line} className="md:block">
                            {line}{' '}
                        </span>
                    ))
                    : copy.headline}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl">
                {copy.introduction}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href="#portfolio" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                    {copy.work}
                </a>
                <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 border border-stone-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium rounded-lg hover:bg-stone-100 dark:hover:bg-zinc-900 transition-colors">
                    {copy.contact}
                </a>
            </div>
            <div className="mt-12 py-7 border-y border-stone-200 dark:border-zinc-800">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300 mb-5">{copy.proofHeading}</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
                    {copy.proof.map(([label, value]) => (
                        <div key={label}>
                            <p className="font-serif text-2xl text-zinc-900 dark:text-zinc-50 mb-1">{value}</p>
                            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-7 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{language === 'en' ? 'Current focus:' : 'Aktueller Fokus:'}</span>{' '}
                {copy.focus}
            </p>
        </header>
    );
}
