
export default function Navigation({ view, navigate, language, toggleLanguage, isDarkMode, toggleDarkMode }) {
    return (
        <nav className="fixed top-0 w-full z-40 px-6 py-5 md:px-12 lg:px-24 border-b border-stone-200 dark:border-zinc-800 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 flex justify-between items-center">
            <a href="/" onClick={(e) => navigate('/', e)} className="font-serif text-xl tracking-tight font-medium hover:opacity-80 transition-opacity">
                TheQualityArchitect.io
            </a>
            <div className="flex items-center gap-6">
                {view === 'main' && (
                    <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                        <a href="#expertise" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Expertise</a>
                        <a href="#portfolio" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Portfolio</a>
                        <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
                    </div>
                )}
                <button onClick={toggleLanguage} className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" aria-label="Toggle Language">
                    {language === 'en' ? 'DE' : 'EN'}
                </button>
                <button onClick={toggleDarkMode} className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" aria-label="Toggle Dark Mode">
                    {isDarkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    )}
                </button>
            </div>
        </nav>
    );
}