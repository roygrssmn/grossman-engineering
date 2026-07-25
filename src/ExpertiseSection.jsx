import { useState, useEffect, useRef } from 'react';
import { competenciesData } from './areas_of_expertise/competencies.js';
import { BrainCircuit, Layers, Users } from 'lucide-react';

function CompetencyIcon({ id }) {
    const props = { className: 'w-6 h-6 mb-4 text-zinc-900 dark:text-zinc-50', strokeWidth: 1.5 };
    if (id === 'engineering-leadership') return <Users {...props} />;
    if (id === 'quality-architecture') return <Layers {...props} />;
    return <BrainCircuit {...props} />;
}

export default function ExpertiseSection({ language }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const scrollContainerRef = useRef(null);

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

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const itemWidth = scrollContainerRef.current.children[0]?.offsetWidth || 1;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setCurrentIndex(newIndex);
        }
    };

    return (
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
                    className="overflow-x-auto snap-x snap-mandatory flex pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {competenciesData.map(comp => (
                        <div key={comp.id} className="flex-shrink-0 w-full snap-start snap-always px-6">
                            <div className="text-left">
                                <CompetencyIcon id={comp.id} />
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
                            <CompetencyIcon id={comp.id} />
                            <h3 className="font-medium text-lg mb-3 text-zinc-900 dark:text-zinc-50">{comp.title[language]}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                {comp.description[language]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
