import React, { useState, useEffect } from 'react';

const projectData = {
    rag: {
        title: 'Agentic RAG Pipeline',
        role: 'AI Architecture',
        tags: ['Python', 'LangChain', 'Vector DB', 'Prompt Engineering'],
        github: 'https://github.com/yourusername/rag-pipeline',
        content: (
            <>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Challenge</h2>
                <p className="mb-4">Building an AI system is simple but building a reliable one is complex. The goal was to create a Retrieval-Augmented Generation system that could query technical documentation without hallucinating facts or providing outdated data.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Solution</h2>
                <p className="mb-4">I architected a pipeline utilizing LangChain to connect a vector database with a large language model. By treating the AI system like traditional software, I implemented guardrails and strict evaluation criteria for the output.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">Business Impact</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Created a verifiable source of truth for technical queries.</li>
                    <li className="mb-2">Implemented automated evaluation tests to score answer accuracy.</li>
                    <li className="mb-2">Demonstrated how QA principles apply directly to modern AI engineering.</li>
                </ul>
            </>
        )
    },
    framework: {
        title: 'Enterprise QA Automation',
        role: 'Leadership & QA',
        tags: ['Playwright', 'TypeScript', 'CI/CD', 'Strategy'],
        github: 'https://github.com/yourusername/qa-framework',
        content: (
            <>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Challenge</h2>
                <p className="mb-4">Manual testing processes were creating bottlenecks in the deployment pipeline. The engineering team needed a scalable way to ensure quality without slowing down feature delivery.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Solution</h2>
                <p className="mb-4">I designed and led the implementation of an end-to-end automation framework. Beyond just writing code, this required mentoring the team and integrating the new tools into our existing CI/CD pipelines.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">Business Impact</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Drastically reduced the time required for regression testing.</li>
                    <li className="mb-2">Fostered a culture of quality ownership among the engineering staff.</li>
                    <li className="mb-2">Provided management with clear metrics on release stability.</li>
                </ul>
            </>
        )
    },
    homelab: {
        title: 'Infrastructure Homelab',
        role: 'DevOps & Systems',
        tags: ['Raspberry Pi', 'Docker', 'Linux', 'Networking'],
        github: 'https://github.com/yourusername/homelab-config',
        content: (
            <>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Challenge</h2>
                <p className="mb-4">To maintain a sharp understanding of infrastructure and operations, I required a hands-on environment to test networking configurations, container orchestration, and automated backups.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Solution</h2>
                <p className="mb-4">I built a highly available homelab utilizing Raspberry Pi clusters and a dedicated NAS. The entire environment is managed via Docker, ensuring consistency and rapid disaster recovery.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">Business Impact</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Automated local media management and critical data backups.</li>
                    <li className="mb-2">Implemented network-wide ad blocking and secure VPN access.</li>
                    <li className="mb-2">Maintained hands-on expertise with Linux system administration and deployment strategies.</li>
                </ul>
            </>
        )
    }
};

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
            {/* Sticky Navigation */}
            <nav className="fixed top-0 w-full z-40 px-6 py-5 md:px-12 lg:px-24 border-b border-stone-200 dark:border-zinc-800 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 flex justify-between items-center">
                <a href="#" onClick={showMainPage} className="font-serif text-xl tracking-tight font-medium hover:opacity-80 transition-opacity">
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

            {/* Main View */}
            {view === 'main' && (
                <main className="flex-grow flex flex-col pt-32 px-6 md:px-12 lg:px-24 pb-16 md:pb-32 max-w-7xl mx-auto w-full">
                    <header className="max-w-4xl mb-32 mt-12">
                        <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-300 uppercase mb-4">Roey Grossman, Berlin</p>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8 text-zinc-900 dark:text-zinc-50">
                            {language === 'en' 
                                ? 'I build reliable AI systems and lead high-performance engineering teams.'
                                : 'Ich baue zuverlässige KI-Systeme und leite hochleistungsfähige Engineering-Teams.'}
                        </h1>
                        <p className="text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-2xl">
                            {language === 'en'
                                ? 'Bridging the gap between Quality Assurance, technical strategy, and Artificial Intelligence to deliver scalable solutions that work in production.'
                                : 'Ich schließe die Lücke zwischen Qualitätssicherung, technischer Strategie und Künstlicher Intelligenz, um skalierbare Lösungen zu liefern, die in der Produktion funktionieren.'}
                        </p>
                    </header>

                    <section id="expertise" className="mb-32">
                        <h2 className="font-serif text-3xl mb-12 border-b border-stone-200 dark:border-zinc-800 pb-4 text-zinc-900 dark:text-zinc-50">Core Competencies</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div>
                                <h3 className="font-medium text-lg mb-3 text-zinc-900 dark:text-zinc-50">AI Engineering</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                    Designing and implementing Agentic workflows and RAG pipelines. Focusing on system reliability, prompt evaluation, and eliminating model hallucinations in production environments.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg mb-3 text-zinc-900 dark:text-zinc-50">Quality Architecture</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                    Establishing comprehensive testing frameworks and CI/CD automation. Shifting quality left to ensure robust software delivery cycles and scalable infrastructure.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg mb-3 text-zinc-900 dark:text-zinc-50">Technical Leadership</h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                    Mentoring engineers, aligning technical initiatives with business goals, and fostering a culture of ownership. Experienced in managing both people and complex projects.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="portfolio" className="mb-32">
                        <h2 className="font-serif text-3xl mb-12 border-b border-stone-200 dark:border-zinc-800 pb-4 text-zinc-900 dark:text-zinc-50">Selected Case Studies</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {Object.entries(projectData).map(([key, project]) => (
                                <div key={key} onClick={() => openProject(key)} className="group bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 md:p-10 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="font-serif text-2xl text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        <span className="text-xs font-medium px-3 py-1 bg-stone-50 dark:bg-zinc-950 border border-stone-200 dark:border-zinc-800 rounded-full text-zinc-900 dark:text-zinc-50 whitespace-nowrap ml-4">{project.role}</span>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed flex-grow">
                                        {key === 'rag' && "Designed a Retrieval-Augmented Generation system to query complex documentation. Implemented automated evaluation guardrails to ensure high-fidelity outputs."}
                                        {key === 'framework' && "Architected an end-to-end testing framework from the ground up. This initiative significantly reduced manual regression time and accelerated the release cycle."}
                                        {key === 'homelab' && "Engineered a personal infrastructure environment utilizing Raspberry Pi and NAS systems. Features automated backups, network blocking, and secure remote tunneling."}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-stone-100 dark:bg-zinc-800 px-2 py-1 rounded">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="contact" className="pb-16">
                        <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-10 md:p-16 rounded-2xl text-center max-w-3xl mx-auto">
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-zinc-900 dark:text-zinc-50">Ready to build something reliable?</h2>
                            <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">
                                I am actively exploring new opportunities in technical leadership and AI engineering. Let us discuss how I can bring structure and quality to your next big initiative.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="mailto:hello@thequalityarchitect.io" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                                    Send an Email
                                </a>
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 border border-stone-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium rounded-lg hover:bg-stone-50 dark:hover:bg-zinc-800 transition-colors">
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
            )}

            {/* Project Detail View */}
            {view === 'project' && activeProject && (
                <main className="flex-grow flex-col pt-32 px-6 md:px-12 lg:px-24 pb-16 md:pb-32 max-w-4xl mx-auto w-full">
                    <button onClick={showMainPage} className="mb-12 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-2 group w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                        Back to Overview
                    </button>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-medium px-3 py-1 bg-stone-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full">{activeProject.role}</span>
                    </div>
                    
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 text-zinc-900 dark:text-zinc-50">{activeProject.title}</h1>
                    
                    <div className="flex flex-wrap gap-2 mb-12 border-b border-stone-200 dark:border-zinc-800 pb-12">
                        {activeProject.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium px-3 py-1 bg-stone-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded">{tag}</span>
                        ))}
                    </div>

                    <article className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-none text-lg">
                        {activeProject.content}
                    </article>

                    <div className="mt-16 pt-8 border-t border-stone-200 dark:border-zinc-800">
                        <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded-lg hover:opacity-90 transition-opacity shadow-sm gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.23 4.08 4.08 0 0 0-.08-3.2s-1.1-.35-3.5 1.25a11.39 11.39 0 0 0-6 0c-2.4-1.6-3.5-1.25-3.5-1.25a4.08 4.08 0 0 0-.08 3.2 4.6 4.6 0 0 0-1.39 3.23c0 5.6 3.36 6.65 6.5 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18h.01"/></svg>
                            View Repository
                        </a>
                    </div>
                </main>
            )}

            {/* Footer */}
            <footer className="px-6 py-8 md:px-12 lg:px-24 border-t border-stone-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 flex flex-col md:flex-row justify-between items-center gap-4 bg-stone-50 dark:bg-zinc-950 mt-auto">
                <div>
                    &copy; {currentYear} Roey Grossman. All rights reserved.
                </div>
                <div className="flex gap-4 items-center">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        GitHub
                    </a>
                    <span className="text-stone-300 dark:text-zinc-700">|</span>
                    <button onClick={() => setActiveModal('impressum')} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Impressum</button>
                    <button onClick={() => setActiveModal('privacy')} className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        {language === 'en' ? 'Privacy Policy' : 'Datenschutz'}
                    </button>
                </div>
            </footer>

            {/* Modals */}
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
                    <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl relative" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-xl hover:text-zinc-500 text-zinc-900 dark:text-zinc-50">&times;</button>
                        <h2 className="font-serif text-3xl mb-6 text-zinc-900 dark:text-zinc-50">
                            {activeModal === 'impressum' 
                                ? 'Impressum' 
                                : (language === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung')}
                        </h2>
                        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {activeModal === 'impressum' ? (
                                language === 'en' ? (
                                    <>
                                        <p><strong className="text-zinc-900 dark:text-zinc-50">Information according to § 5 TMG</strong></p>
                                        <p>Roey Grossman<br/>[Your Street and Number]<br/>[Your Zip Code] Berlin<br/>Germany</p>
                                        <p><strong className="text-zinc-900 dark:text-zinc-50">Contact</strong></p>
                                        <p>Phone: [Your Phone Number]<br/>Email: hello@thequalityarchitect.io</p>
                                    </>
                                ) : (
                                    <>
                                        <p><strong className="text-zinc-900 dark:text-zinc-50">Angaben gemäß § 5 TMG</strong></p>
                                        <p>Roey Grossman<br/>[Your Street and Number]<br/>[Your Zip Code] Berlin<br/>Deutschland</p>
                                        <p><strong className="text-zinc-900 dark:text-zinc-50">Kontakt</strong></p>
                                        <p>Telefon: [Your Phone Number]<br/>E-Mail: hello@thequalityarchitect.io</p>
                                    </>
                                )
                            ) : (
                                language === 'en' ? (
                                    <>
                                        <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">1. Privacy at a Glance</h3>
                                        <p>This website does not collect any personal data through trackers, analytics tools, or cookies. It is purely for the provision of information.</p>
    
                                        <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">2. Data Controller</h3>
                                        <p>Roey Grossman<br/>[Your Street and Number]<br/>[Your Zip Code] Berlin<br/>hello@thequalityarchitect.io</p>
    
                                        <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">3. Website Provision and Hosting</h3>
                                        <p>We host our website on Cloudflare Pages. The provider is Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (hereinafter: Cloudflare).</p>
                                        <p>When you visit our website, Cloudflare automatically logs server-side connection data (e.g., IP address, page visited, date and time, browser used) as our hosting provider. This is technically necessary to deliver the website and guarantee its security (e.g., protection against DDoS attacks).</p>
                                        <p>The collection of this data is based on Art. 6 (1) lit. f GDPR. We have a legitimate interest in presenting and providing our website as reliably and securely as possible.</p>
    
                                        <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">4. Your Rights</h3>
                                        <p>Since we do not use analytics tools or cookies, we do not process any data that directly identifies you, apart from the technically necessary server logs at Cloudflare. Under the GDPR, you generally have the right to access, rectify, delete, and restrict the processing of your personal data, as well as a right to object to its processing.</p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">1. Datenschutz auf einen Blick</h3>
                                        <p>Diese Website erfasst keine personenbezogenen Daten durch Tracker, Analyse-Tools oder Cookies. Sie dient rein der Informationsbereitstellung.</p>
    
                                        <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">2. Verantwortliche Stelle</h3>
                                        <p>Roey Grossman<br/>[Your Street and Number]<br/>[Your Zip Code] Berlin<br/>hello@thequalityarchitect.io</p>
    
                                        <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">3. Bereitstellung der Website und Hosting</h3>
                                        <p>Wir hosten unsere Website bei Cloudflare Pages. Anbieter ist die Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (nachfolgend: Cloudflare).</p>
                                        <p>Wenn Sie unsere Website besuchen, erfasst Cloudflare als unser Hostinganbieter serverseitig Verbindungsdaten (z. B. IP-Adresse, aufgerufene Seite, Datum und Uhrzeit, verwendeter Browser). Dies ist technisch erforderlich, um die Website ausliefern zu können und deren Sicherheit (z. B. Schutz vor DDoS-Angriffen) zu gewährleisten.</p>
                                        <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen und sicheren Darstellung und Bereitstellung unserer Website.</p>
    
                                        <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">4. Ihre Rechte</h3>
                                        <p>Da wir weder Analyse-Tools noch Cookies nutzen, verarbeiten wir keine Daten, die direkt Aufschluss über Ihre Person geben, abgesehen von den technisch notwendigen Server-Logs bei Cloudflare. Nach der DSGVO haben Sie dennoch grundsätzlich das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht gegen die Verarbeitung.</p>
                                    </>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
