import { useState, useEffect } from 'react';
import { projectData } from './selected_impact/projects.js';
import Navigation from './Navigation.jsx';
import MainView from './MainView.jsx';
import ArchiveView from './ArchiveView.jsx';
import ProjectView from './ProjectView.jsx';
import Footer from './Footer.jsx';
import Modals from './Modals.jsx';
import NotFoundView from './NotFoundView.jsx';
import { localize } from './selected_impact/projects.js';

const SITE_URL = 'https://grossman.engineering';

function getInitialPath() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    if (parts[0] === 'en' || parts[0] === 'de') return path;

    const preferredLanguage = localStorage.getItem('language') || 'en';
    const localizedPath = `/${preferredLanguage}${path === '/' ? '' : path}`;
    window.history.replaceState({}, '', localizedPath);
    return localizedPath;
}

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved !== null ? JSON.parse(saved) : true;
    });

    const [activeModal, setActiveModal] = useState(null); // 'impressum', 'privacy', or null

    const [currentPath, setCurrentPath] = useState(getInitialPath);

    const [language, setLanguage] = useState(() => {
        const parts = currentPath.split('/').filter(Boolean);
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
        let title = 'Roey Grossman | Engineering & Quality Leader · Applied AI';
        let desc = 'Engineering and quality leader with 15+ years across software delivery, automation, and people leadership, now applying production discipline to AI.';
        let ogType = 'website';
        
        if (language === 'de') {
            title = 'Roey Grossman | Engineering & Quality Leader · Applied AI';
            desc = 'Engineering- und Quality-Leader mit mehr als 15 Jahren Erfahrung in Softwareentwicklung, Automatisierung und Personalführung – heute mit Fokus auf Applied AI.';
        }

        if (routePath === '/archive') {
            title = language === 'en'
                ? 'Impact Archive | Roey Grossman'
                : 'Projektarchiv | Roey Grossman';
            desc = language === 'en'
                ? 'Earlier engineering leadership work and technical experiments by Roey Grossman.'
                : 'Frühere Engineering-Führungsarbeit und technische Experimente von Roey Grossman.';
        } else if (routePath.startsWith('/project/')) {
            const key = routePath.replace('/project/', '');
            if (projectData[key]) {
                title = `${localize(projectData[key].title, language)} | Roey Grossman`;
                desc = localize(projectData[key].summary, language);
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
        setMetaTag('property', 'og:url', `${SITE_URL}${currentPath}`);
        setMetaTag('property', 'og:image', `${SITE_URL}/og-image.png`);

        setMetaTag('name', 'twitter:card', 'summary_large_image');
        setMetaTag('name', 'twitter:url', `${SITE_URL}${currentPath}`);
        setMetaTag('name', 'twitter:title', title);
        setMetaTag('name', 'twitter:description', desc);
        setMetaTag('name', 'twitter:image', `${SITE_URL}/og-image.png`);

        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute("href", `${SITE_URL}${currentPath}`);

        // Add alternate language tags for SEO
        const addAlternateLink = (lang, path) => {
            let link = document.querySelector(`link[hreflang="${lang}"]`);
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "alternate");
                link.setAttribute("hreflang", lang);
                document.head.appendChild(link);
            }
            link.setAttribute("href", `${SITE_URL}${path}`);
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
    } else if (routePath === '/archive') {
        view = 'archive';
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

            {view === 'archive' && <ArchiveView language={language} projectData={projectData} navigate={navigate} />}
            
            {view === 'project' && activeProject && <ProjectView activeProject={activeProject} navigate={navigate} language={language} />}
            
            {view === '404' && <NotFoundView navigate={navigate} language={language} />}
            
            <Footer currentYear={currentYear} setActiveModal={setActiveModal} language={language} navigate={navigate} />
            
            <Modals activeModal={activeModal} setActiveModal={setActiveModal} language={language} />
        </div>
    );
}
