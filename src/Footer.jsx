import React from 'react';

export default function Footer({ currentYear, setActiveModal, language }) {
    return (
        <footer className="px-6 py-8 md:px-12 lg:px-24 border-t border-stone-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 flex flex-col md:flex-row justify-between items-center gap-4 bg-stone-50 dark:bg-zinc-950 mt-auto">
            <div>
                &copy; {currentYear} Roey Grossman. All rights reserved.
            </div>
            <div className="flex gap-4 items-center">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">GitHub</a>
                <span className="text-stone-300 dark:text-zinc-700">|</span>
                <button onClick={() => setActiveModal('impressum')} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Impressum</button>
                <button onClick={() => setActiveModal('privacy')} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                    {language === 'en' ? 'Privacy Policy' : 'Datenschutz'}
                </button>
            </div>
        </footer>
    );
}