import ProjectCard from './ProjectCard.jsx';

export default function ArchiveView({ language, projectData, navigate }) {
    const archivedProjects = Object.entries(projectData).filter(([, project]) => project.archived);

    return (
        <main className="flex-grow pt-32 px-6 md:px-12 lg:px-24 pb-16 md:pb-32 max-w-7xl mx-auto w-full">
            <a href={`/${language}`} onClick={(event) => navigate('/', event)} className="mb-12 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-2 group w-fit">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                {language === 'en' ? 'Back to overview' : 'Zurück zur Übersicht'}
            </a>

            <header className="mb-10 md:mb-14 max-w-3xl">
                <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-300 uppercase mb-4">
                    {language === 'en' ? 'Earlier work & experiments' : 'Frühere Arbeit & Experimente'}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-5 text-zinc-900 dark:text-zinc-50">
                    {language === 'en' ? 'Impact Archive' : 'Projektarchiv'}
                </h1>
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {language === 'en'
                        ? 'Earlier leadership work and technical experiments that still inform how I build and lead today.'
                        : 'Frühere Führungsarbeit und technische Experimente, die meine heutige Arbeit weiterhin prägen.'}
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {archivedProjects.map(([key, project]) => (
                    <ProjectCard
                        key={key}
                        projectKey={key}
                        project={project}
                        language={language}
                        navigate={navigate}
                    />
                ))}
            </div>
        </main>
    );
}
