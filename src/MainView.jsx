import { competenciesData } from './core_competencies/competencies.jsx';
import { contactInfo } from './contactInfo.jsx';
import { Cpu, Layers, Users } from 'lucide-react';

export default function MainView({ language, projectData, navigate }) {
    return (
        <main className="flex-grow flex flex-col pt-32 px-6 md:px-12 lg:px-24 pb-16 md:pb-32 max-w-7xl mx-auto w-full">
            <header className="max-w-4xl mb-32 mt-12">
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

            <section id="expertise" className="mb-32">
                <h2 className="font-serif text-3xl mb-12 border-b border-stone-200 dark:border-zinc-800 pb-4 text-zinc-900 dark:text-zinc-50">
                {language === 'en' ? 'Areas of Expertise' : 'Fachgebiete'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {competenciesData.map(comp => (
                        <div key={comp.id}>
                            {comp.id === 'ai-engineering' && <Cpu className="w-6 h-6 mb-4 text-zinc-900 dark:text-zinc-50" strokeWidth={1.5} />}
                            {comp.id === 'quality-architecture' && <Layers className="w-6 h-6 mb-4 text-zinc-900 dark:text-zinc-50" strokeWidth={1.5} />}
                            {comp.id === 'technical-leadership' && <Users className="w-6 h-6 mb-4 text-zinc-900 dark:text-zinc-50" strokeWidth={1.5} />}
                            <h3 className="font-medium text-lg mb-3 text-zinc-900 dark:text-zinc-50">{comp.title[language]}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                {comp.description[language]}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="portfolio" className="mb-32">
                <h2 className="font-serif text-3xl mb-12 border-b border-stone-200 dark:border-zinc-800 pb-4 text-zinc-900 dark:text-zinc-50">
                {language === 'en' ? 'Selected Impact' : 'Ausgewählte Erfolge'}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {Object.entries(projectData).map(([key, project]) => (
                        <a key={key} href={`/project/${key}`} onClick={(e) => navigate(`/project/${key}`, e)} className="group bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 md:p-10 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="font-serif text-2xl text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <span className="text-xs font-semibold px-3 py-1 bg-stone-50 dark:bg-zinc-950 border border-stone-200 dark:border-zinc-800 rounded-full text-zinc-900 dark:text-zinc-50 whitespace-nowrap ml-4">{project.role}</span>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed flex-grow">
                                {project.summary}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 bg-stone-100 dark:bg-zinc-800 px-2 py-1 rounded">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1 whitespace-nowrap">
                                        Story
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </span>
                                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1 whitespace-nowrap">
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                        {language === 'en' ? '3 min read' : '3 Min. Lesezeit'}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section id="contact" className="pb-16">
                <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-10 md:p-16 rounded-2xl text-center max-w-3xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl mb-4 text-zinc-900 dark:text-zinc-50">
                        {language === 'en' ? 'Ready to build something reliable?' : 'Bereit, etwas Zuverlässiges zu bauen?'}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        {language === 'en'
                            ? 'I am actively exploring new opportunities in technical leadership and AI engineering. Let us discuss how I can bring structure and quality to your next big initiative.'
                            : 'Ich bin aktiv auf der Suche nach neuen Möglichkeiten in der technischen Führung und im KI-Engineering. Lassen Sie uns besprechen, wie ich Struktur und Qualität in Ihre nächste große Initiative bringen kann.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                            {language === 'en' ? 'Connect on LinkedIn' : 'Auf LinkedIn vernetzen'}
                        </a>
                        <a href={`mailto:${contactInfo.email}`} className="inline-flex justify-center items-center px-6 py-3 border border-stone-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium rounded-lg hover:bg-stone-50 dark:hover:bg-zinc-800 transition-colors">
                            {language === 'en' ? 'Send an Email' : 'E-Mail senden'}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}