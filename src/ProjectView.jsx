import ReactMarkdown from 'react-markdown';
import { localize } from './selected_impact/projects.js';

export default function ProjectView({ activeProject, navigate, language }) {
    const title = localize(activeProject.title, language);
    const role = localize(activeProject.role, language);
    const content = localize(activeProject.content, language);

    return (
        <main className="flex-grow flex-col pt-32 px-6 md:px-12 lg:px-24 pb-16 md:pb-32 max-w-4xl mx-auto w-full">
            <a href={`/${language}`} onClick={(e) => navigate('/', e)} className="mb-12 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-2 group w-fit">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                {language === 'en' ? 'Back to overview' : 'Zurück zur Übersicht'}
            </a>
            
            <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-semibold px-3 py-1 bg-stone-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-full">{role}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 text-zinc-900 dark:text-zinc-50">{title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-12 border-b border-stone-200 dark:border-zinc-800 pb-12">
                {activeProject.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-stone-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded">{tag}</span>
                ))}
            </div>
            <article className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-none text-lg">
                <ReactMarkdown
                    components={{
                        h2: ({ node, ...props }) => {
                            void node;
                            return <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50" {...props} />;
                        },
                        p: ({ node, ...props }) => {
                            void node;
                            return <p className="mb-4" {...props} />;
                        },
                        h3: ({ node, ...props }) => {
                            void node;
                            return <h3 className="font-mono text-lg font-medium mb-4 text-zinc-900 dark:text-zinc-50 border-b border-stone-200 dark:border-zinc-800 pb-2" {...props} />;
                        },
                        ul: ({ node, ...props }) => {
                            void node;
                            return <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-zinc-600 dark:text-zinc-400" {...props} />;
                        },
                        strong: ({ node, ...props }) => {
                            void node;
                            return <strong className="text-zinc-900 dark:text-zinc-100" {...props} />;
                        },
                        blockquote: ({ node, ...props }) => {
                            void node;
                            return <div className="mt-12 p-6 bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl" {...props} />;
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>
            {activeProject.links && activeProject.links.length > 0 && (
                <div className="mt-16 pt-8 border-t border-stone-200 dark:border-zinc-800 flex flex-wrap gap-4">
                    {activeProject.links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded-lg hover:opacity-90 transition-opacity shadow-sm gap-2">
                            {link.type === 'github' ? (
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.23 4.08 4.08 0 0 0-.08-3.2s-1.1-.35-3.5 1.25a11.39 11.39 0 0 0-6 0c-2.4-1.6-3.5-1.25-3.5-1.25a4.08 4.08 0 0 0-.08 3.2 4.6 4.6 0 0 0-1.39 3.23c0 5.6 3.36 6.65 6.5 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18h.01"/></svg>
                            ) : (
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            )}
                            {localize(link.label, language)}
                        </a>
                    ))}
                </div>
            )}
        </main>
    );
}
