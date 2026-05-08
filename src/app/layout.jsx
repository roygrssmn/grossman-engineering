import { AppProvider } from '../context/AppContext';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Modals from '../Modals';
import './globals.css';

export const metadata = {
    metadataBase: new URL('https://agenticarchitect.io'),
    title: 'Roey Grossman | The Agentic Architect',
    description: 'The Quality-First Agentic Architect: Building for Enterprise-Grade AI Reliability. Bridging the gap between Quality Assurance, technical strategy, and AI.',
    authors: [{ name: 'Roey Grossman' }],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        url: 'https://agenticarchitect.io/',
        title: 'Roey Grossman | The Agentic Architect',
        description: 'The Quality-First Agentic Architect: Building for Enterprise-Grade AI Reliability. Bridging the gap between Quality Assurance, technical strategy, and AI.',
        images: [{ url: '/og-image.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Roey Grossman | The Agentic Architect',
        description: 'The Quality-First Agentic Architect: Building for Enterprise-Grade AI Reliability. Bridging the gap between Quality Assurance, technical strategy, and AI.',
        images: ['/og-image.jpg'],
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `try{var s=localStorage.getItem('darkMode');var d=s!==null?JSON.parse(s):true;if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('language');if(l)document.documentElement.lang=l;}catch(e){}`,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Roey Grossman',
                            jobTitle: 'Agentic Architect',
                            url: 'https://agenticarchitect.io/',
                            sameAs: [
                                'https://linkedin.com/in/roygrssmn',
                                'https://github.com/roygrssmn',
                            ],
                        }),
                    }}
                />
            </head>
            <body>
                <AppProvider>
                    <div className="font-sans antialiased min-h-screen flex flex-col bg-[#fcfbf9] text-zinc-900 dark:bg-[#09090b] dark:text-zinc-50 selection:bg-stone-300 selection:text-black dark:selection:bg-stone-700 dark:selection:text-white transition-colors duration-300">
                        <Navigation />
                        {children}
                        <Footer />
                        <Modals />
                    </div>
                </AppProvider>
            </body>
        </html>
    );
}
