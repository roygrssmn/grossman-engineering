import { useState, useEffect } from 'react';
import { projectData } from './case_studies/projects.jsx';
import Navigation from './Navigation.jsx';
import MainView from './MainView.jsx';
import ProjectView from './ProjectView.jsx';
import Footer from './Footer.jsx';
import Modals from './Modals.jsx';

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved !== null ? JSON.parse(saved) : true;
    });
    const [view, setView] = useState('main'); // 'main' or 'project'

    const [activeProjectKey, setActiveProjectKey] = useState(null);
    const [activeModal, setActiveModal] = useState(null); // 'impressum', 'privacy', or null
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });
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
    }, [language]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const toggleLanguage = () => setLanguage(lang => lang === 'en' ? 'de' : 'en');
    
    const openProject = (key) => {
        setActiveProjectKey(key);
        setView('project');
        window.scrollTo(0, 0);
    };

    const showMainPage = (e) => {
        if (e) e.preventDefault();
        setView('main');
        setActiveProjectKey(null);
        window.scrollTo(0, 0);
    };

    const currentYear = new Date().getFullYear();
    const activeProject = activeProjectKey ? projectData[activeProjectKey] : null;

    return (
        <div className="font-sans antialiased min-h-screen flex flex-col bg-[#fcfbf9] text-zinc-900 dark:bg-[#09090b] dark:text-zinc-50 selection:bg-stone-300 selection:text-black dark:selection:bg-stone-700 dark:selection:text-white transition-colors duration-300">
            <Navigation 
                view={view} 
                showMainPage={showMainPage} 
                language={language} 
                toggleLanguage={toggleLanguage} 
                isDarkMode={isDarkMode} 
                toggleDarkMode={toggleDarkMode} 
            />
            
            {view === 'main' && <MainView language={language} projectData={projectData} openProject={openProject} />}
            
            {view === 'project' && activeProject && <ProjectView activeProject={activeProject} showMainPage={showMainPage} />}
            
            <Footer currentYear={currentYear} setActiveModal={setActiveModal} language={language} />
            
            <Modals activeModal={activeModal} setActiveModal={setActiveModal} language={language} />
        </div>
    );
}
