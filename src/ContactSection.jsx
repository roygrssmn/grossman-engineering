import { contactInfo } from './contactInfo.js';

export default function ContactSection({ language }) {
    return (
        <section id="contact" className="pb-16">
            <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-10 md:p-16 rounded-2xl text-center max-w-3xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl mb-4 text-zinc-900 dark:text-zinc-50">
                    {language === 'en' ? 'Let’s build something that works in the real world.' : 'Lassen Sie uns etwas bauen, das in der Praxis funktioniert.'}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">
                    {language === 'en'
                        ? 'Open to Director or Head of Quality Engineering and Director of Engineering roles, as well as hands-on AI Engineering opportunities where my production, delivery, and quality background is an advantage.'
                        : 'Offen für Positionen als Director oder Head of Quality Engineering und Director of Engineering sowie für praxisnahe AI-Engineering-Aufgaben, in denen meine Erfahrung mit Produktion, Delivery und Qualität einen Vorteil bietet.'}
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
