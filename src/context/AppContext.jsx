'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === 'undefined') return true;
        const saved = localStorage.getItem('darkMode');
        return saved !== null ? JSON.parse(saved) : true;
    });
    const [language, setLanguage] = useState(() => {
        if (typeof window === 'undefined') return 'en';
        return localStorage.getItem('language') || 'en';
    });
    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleDarkMode = () => setIsDarkMode((v) => !v);
    const toggleLanguage = () => setLanguage((l) => (l === 'en' ? 'de' : 'en'));

    return (
        <AppContext.Provider value={{ isDarkMode, toggleDarkMode, language, toggleLanguage, activeModal, setActiveModal }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}
