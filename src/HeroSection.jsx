export default function HeroSection({ language }) {
    return (
        <header className="max-w-4xl mb-20 md:mb-32 mt-12">
            <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-300 uppercase mb-4">
                Roey Grossman, Berlin
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 text-zinc-900 dark:text-zinc-50">
                {language === 'en' 
                    ? 'I build reliable AI systems and lead high-performance engineering teams'
                    : 'Ich baue zuverlässige KI-Systeme und leite hochleistungsfähige Engineering-Teams'}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-2xl">
                {language === 'en'
                    ? 'Bridging the gap between Quality Assurance, technical strategy, and Artificial Intelligence to deliver scalable solutions that work in production.'
                    : 'Ich schließe die Lücke zwischen Qualitätssicherung, technischer Strategie und Künstlicher Intelligenz, um skalierbare Lösungen zu liefern, die in der Produktion funktionieren.'}
            </p>
        </header>
    );
}