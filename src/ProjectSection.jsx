import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectSection({ language, projectData, navigate }) {
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
    );
}