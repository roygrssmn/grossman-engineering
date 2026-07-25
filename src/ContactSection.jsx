import { contactInfo } from './contactInfo.js';

export default function ContactSection({ language }) {
    return (
        <section id="contact" className="scroll-mt-28 pb-16">
            <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-10 md:p-16 rounded-2xl text-center max-w-3xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl mb-4 text-zinc-900 dark:text-zinc-50">
                    {language === 'en' ? 'Let us build software people can trust.' : 'Lassen Sie uns Software entwickeln, der Menschen vertrauen können.'}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">
                    {language === 'en'
                        ? 'My focus is engineering leadership roles where quality, delivery, and people leadership matter — as well as hands-on AI Engineering opportunities where that same production mindset creates an edge.'
                        : 'Mein Fokus liegt auf Führungsrollen im Engineering, in denen Qualität, Delivery und Personalführung zählen – ebenso wie auf praxisnahen AI-Engineering-Aufgaben, bei denen dieselbe Ausrichtung auf den Produktionsbetrieb einen Vorteil schafft.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                        {language === 'en' ? 'Connect on LinkedIn' : 'Auf LinkedIn vernetzen'}
                    </a>
                    <a href={`mailto:${contactInfo.email}`} className="inline-flex justify-center items-center px-6 py-3 border border-stone-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-medium rounded-lg hover:bg-stone-50 dark:hover:bg-zinc-800 transition-colors">
                        {language === 'en' ? 'Send an Email' : 'E-Mail senden'}
                    </a>
                </div>
            </div>
        </section>
    );
}
