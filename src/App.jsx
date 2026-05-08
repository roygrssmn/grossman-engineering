import { useState, useEffect } from 'react';
import { projectData } from './case_studies/projects.jsx';
import Navigation from './Navigation.jsx';
import MainView from './MainView.jsx';
import ProjectView from './ProjectView.jsx';
import Footer from './Footer.jsx';
import Modals from './Modals.jsx';
import NotFoundView from './NotFoundView.jsx';

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved !== null ? JSON.parse(saved) : true;
    });

    const [activeModal, setActiveModal] = useState(null); // 'impressum', 'privacy', or null
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', onLocationChange);
        return () => window.removeEventListener('popstate', onLocationChange);
    }, []);

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
    
    const navigate = (path, e) => {
        if (e) e.preventDefault();
        window.history.pushState({}, '', path);
        setCurrentPath(path);
        window.scrollTo(0, 0);
    };

    const currentYear = new Date().getFullYear();
    
    let view;
    let activeProject = null;

    if (currentPath === '/') {
        view = 'main';
    } else if (currentPath.startsWith('/project/')) {
        const key = currentPath.replace('/project/', '');
        if (projectData[key]) {
            activeProject = projectData[key];
            view = 'project';
        } else {
            view = '404';
        }
    } else {
        view = '404';
    }

    return (
        <div className="font-sans antialiased min-h-screen flex flex-col bg-[#fcfbf9] text-zinc-900 dark:bg-[#09090b] dark:text-zinc-50 selection:bg-stone-300 selection:text-black dark:selection:bg-stone-700 dark:selection:text-white transition-colors duration-300">
            <Navigation 
                view={view} 
                navigate={navigate} 
                language={language} 
                toggleLanguage={toggleLanguage} 
                isDarkMode={isDarkMode} 
                toggleDarkMode={toggleDarkMode} 
            />
            
            {view === 'main' && <MainView language={language} projectData={projectData} navigate={navigate} />}
            
            {view === 'project' && activeProject && <ProjectView activeProject={activeProject} navigate={navigate} />}
            
            {view === '404' && <NotFoundView navigate={navigate} />}
            
            <Footer currentYear={currentYear} setActiveModal={setActiveModal} language={language} />
            
            <Modals activeModal={activeModal} setActiveModal={setActiveModal} language={language} />
        </div>
    );
}
