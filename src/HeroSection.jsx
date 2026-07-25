export default function HeroSection({ language }) {
    const copy = language === 'en' ? {
        eyebrow: 'Roey Grossman · Berlin · Engineering & Quality Leader · Applied AI',
        headline: 'I build reliable software, grow engineering teams, and integrate AI people can trust.',
        introduction: 'Engineering and quality leader with 15+ years across software delivery, automation, and people leadership. I’ve scaled teams, shortened release cycles, and supported products used at significant scale. Now I’m deepening my AI engineering practice through formal study and hands-on product work, including Demo Radar.',
        work: 'View selected work',
        contact: 'Get in touch',
        focus: 'Building Demo Radar end to end and completing the AI Engineering programme at School of Data & AI — neue fische × SPICED Academy, expected February 2027.',
        proof: [
            ['QA organisation', '1 → 20'],
            ['Product reach', '1.5M+ daily users'],
            ['Release pipeline', '4 weeks → 2'],
            ['Developer platform scale', '1B monthly downloads']
        ]
    } : {
        eyebrow: 'Roey Grossman · Berlin · Engineering- & Quality-Leader · Applied AI',
        headline: [
            'Ich entwickle zuverlässige Software,',
            'stärke Engineering-Teams',
            'und mache KI vertrauenswürdig.'
        ],
        introduction: 'Engineering- und Quality-Leader mit mehr als 15 Jahren Erfahrung in Softwareentwicklung, Automatisierung und Personalführung. Ich habe Teams skaliert, Release-Zyklen verkürzt und Produkte mit großer Reichweite unterstützt. Heute vertiefe ich meine AI-Engineering-Praxis durch eine fundierte Weiterbildung und eigene Produktarbeit, darunter Demo Radar.',
        work: 'Ausgewählte Projekte',
        contact: 'Kontakt aufnehmen',
        focus: 'Demo Radar End-to-End entwickeln und das AI-Engineering-Programm an der School of Data & AI — neue fische × SPICED Academy absolvieren, voraussichtlich bis Februar 2027.',
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
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8 text-zinc-900 dark:text-zinc-50 break-words hyphens-auto">
                {Array.isArray(copy.headline)
                    ? copy.headline.map((line) => (
                        <span key={line} className="md:block md:whitespace-nowrap">
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-12 py-7 border-y border-stone-200 dark:border-zinc-800">
                {copy.proof.map(([label, value]) => (
                    <div key={label}>
                        <p className="font-serif text-2xl text-zinc-900 dark:text-zinc-50 mb-1">{value}</p>
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{label}</p>
                    </div>
                ))}
            </div>
            <p className="mt-7 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{language === 'en' ? 'Current focus:' : 'Aktueller Fokus:'}</span>{' '}
                {copy.focus}
            </p>
        </header>
    );
}
