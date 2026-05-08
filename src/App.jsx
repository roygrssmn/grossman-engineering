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
        document.documentElement.lang = language;
    }, [language]);

    // SEO: Dynamic Title, Meta Description & Canonical URL
    useEffect(() => {
        let title = 'Roey Grossman | The Quality Architect';
        let desc = 'I build reliable AI systems and lead high-performance engineering teams. Bridging the gap between Quality Assurance, technical strategy, and AI.';
        
        if (language === 'de') {
            title = 'Roey Grossman | Der Qualitätsarchitekt';
            desc = 'Ich baue zuverlässige KI-Systeme und leite hochleistungsfähige Engineering-Teams. Ich schließe die Lücke zwischen Qualitätssicherung, technischer Strategie und KI.';
        }

        if (currentPath.startsWith('/project/')) {
            const key = currentPath.replace('/project/', '');
            if (projectData[key]) {
                title = `${projectData[key].title} | Roey Grossman`;
                desc = projectData[key].summary;
            }
        } else if (currentPath !== '/') {
            title = 'Page Not Found | Roey Grossman';
        }
        
        document.title = title;
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', desc);
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', desc);

        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute("href", `https://agenticarchitect.io${currentPath}`);
    }, [currentPath, language]);

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
