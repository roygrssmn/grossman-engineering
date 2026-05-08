import Link from 'next/link';

export default function NotFoundView() {
    return (
        <main className="flex-grow flex flex-col items-center justify-center pt-32 px-6 md:px-12 lg:px-24 pb-16 md:pb-32 max-w-4xl mx-auto w-full text-center">
            <h1 className="font-serif text-8xl md:text-9xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">404</h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-zinc-800 dark:text-zinc-100">
                Oops! The site you are looking for is not available.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-10 max-w-lg leading-relaxed mx-auto">
                It seems you&#39;ve ventured into uncharted territory. Even the best architects sometimes draw a door that leads to nowhere.
            </p>
            <Link href="/" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded-lg hover:opacity-90 transition-opacity shadow-sm gap-2">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                Return to Homepage
            </Link>
        </main>
    );
}
