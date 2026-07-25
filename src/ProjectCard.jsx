import { localize } from './selected_impact/projects.js';

export default function ProjectCard({ projectKey, project, language, navigate }) {
    const title = localize(project.title, language);
    const role = localize(project.role, language);
    const summary = localize(project.summary, language);

    return (
        <a href={`/${language}/project/${projectKey}`} onClick={(e) => navigate(`/project/${projectKey}`, e)} className="group bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 md:p-10 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <h3 className="font-serif text-2xl text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-stone-50 dark:bg-zinc-950 border border-stone-200 dark:border-zinc-800 rounded-full text-zinc-900 dark:text-zinc-50 whitespace-nowrap ml-4">{role}</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed flex-grow">
                {summary}
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 gap-4">
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 bg-stone-100 dark:bg-zinc-800 px-2 py-1 rounded">{tag}</span>
                    ))}
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1 whitespace-nowrap">
                        {language === 'en' ? 'Read case study' : 'Case Study lesen'}
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1 whitespace-nowrap">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {language === 'en' ? `${project.readTime} min read` : `${project.readTime} Min. Lesezeit`}
                    </span>
                </div>
            </div>
        </a>
    );
}
