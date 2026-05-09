import { useState, useEffect, useRef } from 'react';
import { competenciesData } from './areas_of_expertise/competencies.js';
import { contactInfo } from './contactInfo.js';
import { Cpu, Layers, Users } from 'lucide-react';

function ProjectCard({ projectKey, project, language, navigate }) {
    return (
        <a href={`/${language}/project/${projectKey}`} onClick={(e) => navigate(`/project/${projectKey}`, e)} className="group bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 md:p-10 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col h-full">
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
    );
}

export default function MainView({ language, projectData, navigate }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const scrollContainerRef = useRef(null);

    const [currentProjectMobile, setCurrentProjectMobile] = useState(0);
    const [currentProjectWeb, setCurrentProjectWeb] = useState(0);
    const [projectScrollCount, setProjectScrollCount] = useState(0);
    const [isProjectAutoPlay, setIsProjectAutoPlay] = useState(true);
    const projectScrollRefMobile = useRef(null);
    const projectScrollRefWeb = useRef(null);

    // Prepare project chunks for pagination
    const projectEntries = Object.entries(projectData);
    const mobileChunks = [];
    for (let i = 0; i < projectEntries.length; i += 2) {
        mobileChunks.push(projectEntries.slice(i, i + 2));
    }
    const webChunks = [];
    for (let i = 0; i < projectEntries.length; i += 4) {
        webChunks.push(projectEntries.slice(i, i + 4));
    }

    useEffect(() => {
        if (!isAutoPlay || scrollCount >= 6) return;

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % competenciesData.length;
                if (nextIndex === 0) {
                    setScrollCount(prev => prev + 1);
                }
                if (scrollContainerRef.current) {
                    const itemWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
                    scrollContainerRef.current.scrollTo({
                        left: itemWidth * nextIndex,
                        behavior: 'smooth'
                    });
                }
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [scrollCount, isAutoPlay]);

    useEffect(() => {
        if (!isProjectAutoPlay || projectScrollCount >= 6 || projectEntries.length === 0) return;

        const interval = setInterval(() => {
            setCurrentProjectMobile(prevIndex => {
                const nextIndex = (prevIndex + 1) % mobileChunks.length;
                if (nextIndex === 0) setProjectScrollCount(prev => prev + 1);
                if (projectScrollRefMobile.current) {
                    const itemWidth = projectScrollRefMobile.current.children[0]?.offsetWidth || 0;
                    projectScrollRefMobile.current.scrollTo({
                        left: itemWidth * nextIndex,
                        behavior: 'smooth'
                    });
                }
                return nextIndex;
            });
            setCurrentProjectWeb(prevIndex => {
                const nextIndex = (prevIndex + 1) % webChunks.length;
                if (projectScrollRefWeb.current) {
                    const itemWidth = projectScrollRefWeb.current.children[0]?.offsetWidth || 0;
                    projectScrollRefWeb.current.scrollTo({
                        left: itemWidth * nextIndex,
                        behavior: 'smooth'
                    });
                }
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [isProjectAutoPlay, projectScrollCount, mobileChunks.length, webChunks.length, projectEntries.length]);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const itemWidth = scrollContainerRef.current.children[0]?.offsetWidth || 1;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setCurrentIndex(newIndex);
        }
    };

    const handleProjectScrollMobile = () => {
        if (projectScrollRefMobile.current) {
            const scrollLeft = projectScrollRefMobile.current.scrollLeft;
            const itemWidth = projectScrollRefMobile.current.children[0]?.offsetWidth || 1;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setCurrentProjectMobile(newIndex);
        }
    };

    const handleProjectScrollWeb = () => {
        if (projectScrollRefWeb.current) {
            const scrollLeft = projectScrollRefWeb.current.scrollLeft;
            const itemWidth = projectScrollRefWeb.current.children[0]?.offsetWidth || 1;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setCurrentProjectWeb(newIndex);
        }
    };

    return (
        <main className="flex-grow flex flex-col pt-32 px-6 md:px-12 lg:px-24 pb-16 md:pb-32 max-w-7xl mx-auto w-full">
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

            <section id="expertise" className="mb-20 md:mb-32">
                <h2 className="font-serif text-3xl mb-8 md:mb-12 border-b border-stone-200 dark:border-zinc-800 pb-4 text-zinc-900 dark:text-zinc-50">
                {language === 'en' ? 'Areas of Expertise' : 'Fachgebiete'}
                </h2>
                
                {/* Mobile: Scrollable carousel */}
                <div className="md:hidden -mx-6 mt-5">
                    <div 
                        ref={scrollContainerRef} 
                        onScroll={handleScroll} 
                        onTouchStart={() => setIsAutoPlay(false)}
                        onMouseDown={() => setIsAutoPlay(false)}
                        className="overflow-x-auto snap-x snap-mandatory scroll-smooth flex pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {competenciesData.map(comp => (
                            <div key={comp.id} className="flex-shrink-0 w-full snap-start px-6">
                                <div className="text-left">
                                    {comp.id === 'ai-engineering' && <Cpu className="w-6 h-6 mb-4 text-zinc-900 dark:text-zinc-50" strokeWidth={1.5} />}
                                    {comp.id === 'quality-architecture' && <Layers className="w-6 h-6 mb-4 text-zinc-900 dark:text-zinc-50" strokeWidth={1.5} />}
                                    {comp.id === 'technical-leadership' && <Users className="w-6 h-6 mb-4 text-zinc-900 dark:text-zinc-50" strokeWidth={1.5} />}
                                    <h3 className="font-medium text-lg mb-3 text-zinc-900 dark:text-zinc-50">{comp.title[language]}</h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                        {comp.description[language]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-2">
                        {competenciesData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setIsAutoPlay(false);
                                    setCurrentIndex(idx);
                                    if (scrollContainerRef.current) {
                                        const itemWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
                                        scrollContainerRef.current.scrollTo({
                                            left: itemWidth * idx,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    currentIndex === idx 
                                        ? 'bg-zinc-800 dark:bg-zinc-200' 
                                        : 'bg-zinc-300 dark:bg-zinc-700'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop: 3-column grid */}
                <div className="hidden md:block">
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
                </div>
            </section>

            <section id="portfolio" className="mb-20 md:mb-32">
                <h2 className="font-serif text-3xl mb-8 md:mb-12 border-b border-stone-200 dark:border-zinc-800 pb-4 text-zinc-900 dark:text-zinc-50">
                {language === 'en' ? 'Selected Impact' : 'Ausgewählte Erfolge'}
                </h2>
                
                {/* Mobile: 2 items per page */}
                <div className="md:hidden -mx-6">
                    <div 
                        ref={projectScrollRefMobile}
                        onScroll={handleProjectScrollMobile}
                        onTouchStart={() => setIsProjectAutoPlay(false)}
                        onMouseDown={() => setIsProjectAutoPlay(false)}
                        className="overflow-x-auto snap-x snap-mandatory scroll-smooth flex pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {mobileChunks.map((chunk, pageIdx) => (
                            <div key={pageIdx} className="flex-shrink-0 w-full snap-start px-6 flex flex-col gap-6">
                                {chunk.map(([key, project]) => (
                                    <ProjectCard key={key} projectKey={key} project={project} language={language} navigate={navigate} />
                                ))}
                            </div>
                        ))}
                    </div>
                    {/* Dots indicator for mobile */}
                    {mobileChunks.length > 1 && (
                        <div className="flex justify-center gap-2 mt-2">
                            {mobileChunks.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsProjectAutoPlay(false);
                                        setCurrentProjectMobile(idx);
                                        if (projectScrollRefMobile.current) {
                                            const itemWidth = projectScrollRefMobile.current.children[0]?.offsetWidth || 0;
                                            projectScrollRefMobile.current.scrollTo({
                                                left: itemWidth * idx,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    aria-label={`Go to page ${idx + 1}`}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        currentProjectMobile === idx 
                                            ? 'bg-zinc-800 dark:bg-zinc-200' 
                                            : 'bg-zinc-300 dark:bg-zinc-700'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Web: 4 items per page */}
                <div className="hidden md:block -mx-6">
                    <div 
                        ref={projectScrollRefWeb}
                        onScroll={handleProjectScrollWeb}
                        onTouchStart={() => setIsProjectAutoPlay(false)}
                        onMouseDown={() => setIsProjectAutoPlay(false)}
                        className="overflow-x-auto snap-x snap-mandatory scroll-smooth flex pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {webChunks.map((chunk, pageIdx) => (
                            <div key={pageIdx} className="flex-shrink-0 w-full snap-start px-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {chunk.map(([key, project]) => (
                                        <ProjectCard key={key} projectKey={key} project={project} language={language} navigate={navigate} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Dots indicator for web */}
                    {webChunks.length > 1 && (
                        <div className="flex justify-center gap-2 mt-4">
                            {webChunks.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsProjectAutoPlay(false);
                                        setCurrentProjectWeb(idx);
                                        if (projectScrollRefWeb.current) {
                                            const itemWidth = projectScrollRefWeb.current.children[0]?.offsetWidth || 0;
                                            projectScrollRefWeb.current.scrollTo({
                                                left: itemWidth * idx,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    aria-label={`Go to page ${idx + 1}`}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        currentProjectWeb === idx 
                                            ? 'bg-zinc-800 dark:bg-zinc-200' 
                                            : 'bg-zinc-300 dark:bg-zinc-700'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
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