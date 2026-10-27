import { localize } from './selected_impact/projects.js';
import { estimateReadingTime } from './selected_impact/readingTime.js';

export default function ProjectCard({ projectKey, project, language, navigate }) {
    const title = localize(project.cardTitle ?? project.title, language);
    const eyebrow = localize(project.cardEyebrow ?? project.role, language);
    const summary = localize(project.summary, language);
    const readTime = estimateReadingTime(localize(project.content, language));

    return (
        <a href={`/${language}/project/${projectKey}`} onClick={(e) => navigate(`/project/${projectKey}`, e)} className="group bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 md:p-10 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 transition-all cursor-pointer shadow-sm hover:shadow-md grid grid-rows-[auto_auto_1fr_auto] lg:grid-rows-subgrid lg:row-span-4 gap-y-5 h-full">
            <p className="text-xs font-semibold tracking-wide uppercase text-zinc-600 dark:text-zinc-300">{eyebrow}</p>
            <h3 className="font-serif text-2xl leading-snug break-words text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed pb-3">
                {summary}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between pt-4 gap-4">
                <div className="min-w-0 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={localize(tag, 'en')} className="max-w-full text-xs font-semibold text-zinc-800 dark:text-zinc-100 bg-stone-100 dark:bg-zinc-800 px-2 py-1 rounded">{localize(tag, language)}</span>
                    ))}
                </div>
                <div className="shrink-0 flex flex-col items-start sm:items-end gap-1">
                    <span className="text-[13px] font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1 whitespace-nowrap">
                        {language === 'en' ? 'Read case study' : 'Case Study lesen'}
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1 whitespace-nowrap">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {language === 'en' ? `${readTime} min read` : `${readTime} Min. Lesezeit`}
                    </span>
                </div>
            </div>
        </a>
    );
}
