import { useState, useEffect } from 'react';
import { projectData } from './selected_impact/projects.js';
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

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const [language, setLanguage] = useState(() => {
        const parts = window.location.pathname.split('/').filter(Boolean);
        if (parts[0] === 'en' || parts[0] === 'de') {
            return parts[0];
        }
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        const onLocationChange = () => {
            const path = window.location.pathname;
            setCurrentPath(path);
            const parts = path.split('/').filter(Boolean);
            if (parts[0] === 'en' || parts[0] === 'de') {
                setLanguage(parts[0]);
            }
        };
        window.addEventListener('popstate', onLocationChange);
        return () => window.removeEventListener('popstate', onLocationChange);
    }, []);

    // Redirect to language-prefixed URL if missing
    useEffect(() => {
        const parts = currentPath.split('/').filter(Boolean);
        if (parts[0] !== 'en' && parts[0] !== 'de') {
            const newPath = `/${language}${currentPath === '/' ? '' : currentPath}`;
            window.history.replaceState({}, '', newPath);
            setCurrentPath(newPath);
        }
    }, [currentPath, language]);

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

    // Compute route path without language prefix
    let routePath = currentPath;
    const parts = currentPath.split('/').filter(Boolean);
    if (parts[0] === 'en' || parts[0] === 'de') {
        routePath = '/' + parts.slice(1).join('/');
    }

    // SEO: Dynamic Title, Meta Description & Canonical URL
    useEffect(() => {
        let title = 'Roey Grossman | The Agentic Architect';
        let desc = 'The Quality-First Agentic Architect: Building for Enterprise-Grade AI Reliability. Bridging the gap between Quality Assurance, technical strategy, and AI.';
        let ogType = 'website';
        
        if (language === 'de') {
            title = 'Roey Grossman | Der Agentic Architect';
            desc = 'Der qualitätsorientierte Agentic Architect: Aufbau von auf Unternehmensniveau zuverlässiger KI. Ich schließe die Lücke zwischen Qualitätssicherung, technischer Strategie und KI.';
        }

        if (routePath.startsWith('/project/')) {
            const key = routePath.replace('/project/', '');
            if (projectData[key]) {
                title = `${projectData[key].title} | Roey Grossman`;
                desc = projectData[key].summary;
                    ogType = 'article';
            }
        } else if (routePath !== '/') {
            title = 'Page Not Found | Roey Grossman';
        }
        
        document.title = title;
        
        // Helper to safely update or create meta tags
        const setMetaTag = (attr, key, content) => {
            let tag = document.querySelector(`meta[${attr}="${key}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute(attr, key);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };
        
        setMetaTag('name', 'description', desc);
        setMetaTag('property', 'og:title', title);
        setMetaTag('property', 'og:description', desc);
        setMetaTag('property', 'og:type', ogType);
        setMetaTag('property', 'og:url', `https://agenticarchitect.io${currentPath}`);
        setMetaTag('property', 'og:image', 'https://agenticarchitect.io/og-image.jpg'); // Ensure you upload an og-image.jpg to your public folder

        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:title', title);
        setMetaTag('name', 'twitter:description', desc);
        setMetaTag('name', 'twitter:image', 'https://agenticarchitect.io/og-image.jpg');

        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute("href", `https://agenticarchitect.io${currentPath}`);

        // Add alternate language tags for SEO
        const addAlternateLink = (lang, path) => {
            let link = document.querySelector(`link[hreflang="${lang}"]`);
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "alternate");
                link.setAttribute("hreflang", lang);
                document.head.appendChild(link);
            }
            link.setAttribute("href", `https://agenticarchitect.io${path}`);
        };
        addAlternateLink('en', `/en${routePath === '/' ? '' : routePath}`);
        addAlternateLink('de', `/de${routePath === '/' ? '' : routePath}`);
        addAlternateLink('x-default', `/en${routePath === '/' ? '' : routePath}`);

    }, [currentPath, language, routePath]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    
    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'de' : 'en';
        setLanguage(newLang);
        
        let path = currentPath;
        const currentParts = path.split('/').filter(Boolean);
        if (currentParts[0] === 'en' || currentParts[0] === 'de') {
            currentParts[0] = newLang;
            path = '/' + currentParts.join('/');
        } else {
            path = `/${newLang}${path === '/' ? '' : path}`;
        }
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    };
    
    const navigate = (path, e) => {
        if (e) e.preventDefault();
        const newPath = `/${language}${path === '/' ? '' : path}`;
        window.history.pushState({}, '', newPath);
        setCurrentPath(newPath);
        window.scrollTo(0, 0);
    };

    const currentYear = new Date().getFullYear();
    
    let view;
    let activeProject = null;

    if (routePath === '/') {
        view = 'main';
    } else if (routePath.startsWith('/project/')) {
        const key = routePath.replace('/project/', '');
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
            
            {view === 'project' && activeProject && <ProjectView activeProject={activeProject} navigate={navigate} language={language} />}
            
            {view === '404' && <NotFoundView navigate={navigate} language={language} />}
            
            <Footer currentYear={currentYear} setActiveModal={setActiveModal} language={language} />
            
            <Modals activeModal={activeModal} setActiveModal={setActiveModal} language={language} />
        </div>
    );
}
