import { contactInfo } from './contactInfo.js';

export default function Modals({ activeModal, setActiveModal, language }) {
    if (!activeModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
            <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl relative" onClick={e => e.stopPropagation()}>
                <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-xl hover:text-zinc-500 text-zinc-900 dark:text-zinc-50" aria-label={language === 'en' ? 'Close modal' : 'Modal schließen'}>&times;</button>
                <h2 className="font-serif text-3xl mb-6 text-zinc-900 dark:text-zinc-50">
                    {activeModal === 'impressum' 
                        ? 'Impressum' 
                        : (language === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung')}
                </h2>
                <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {activeModal === 'impressum' ? (
                        language === 'en' ? (
                            <>
                                <p><strong className="text-zinc-900 dark:text-zinc-50">Information according to § 5 DDG</strong></p>
                                <p>{contactInfo.legalName}<br/>{contactInfo.street}<br/>{contactInfo.zipCity}<br/>Germany</p>
                                <p><strong className="text-zinc-900 dark:text-zinc-50">Contact</strong></p>
                                <p>Phone: {contactInfo.phone}<br/>Email: {contactInfo.email}</p>
                            </>
                        ) : (
                            <>
                                <p><strong className="text-zinc-900 dark:text-zinc-50">Angaben gemäß § 5 DDG</strong></p>
                                <p>{contactInfo.legalName}<br/>{contactInfo.street}<br/>{contactInfo.zipCity}<br/>Deutschland</p>
                                <p><strong className="text-zinc-900 dark:text-zinc-50">Kontakt</strong></p>
                                <p>Telefon: {contactInfo.phone}<br/>E-Mail: {contactInfo.email}</p>
                            </>
                        )
                    ) : (
                        language === 'en' ? (
                            <>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">1. Privacy at a Glance</h3>
                                <p>This website uses cookie-free Cloudflare Web Analytics to understand aggregated page usage and performance. It does not use cookies or local storage to track individual visitors.</p>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">2. Data Controller</h3>
                                <p>{contactInfo.legalName}<br/>{contactInfo.street}<br/>{contactInfo.zipCity}<br/>{contactInfo.email}</p>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">3. Website Provision and Hosting</h3>
                                <p>We host our website using Cloudflare Workers. The provider is Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (hereinafter: Cloudflare).</p>
                                <p>When you visit our website, Cloudflare automatically logs server-side connection data as our hosting provider. This is technically necessary to deliver the website and guarantee its security.</p>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">4. Cloudflare Web Analytics</h3>
                                <p>Cloudflare Web Analytics uses a JavaScript beacon to collect aggregated page-view and performance metrics. According to Cloudflare, the service does not collect or use visitors’ personal data and does not track individual users across websites.</p>
                                <p>More information is available in <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 dark:hover:text-zinc-50">Cloudflare’s Privacy Policy</a>.</p>
                            </>
                        ) : (
                            <>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">1. Datenschutz auf einen Blick</h3>
                                <p>Diese Website verwendet die cookie-freie Lösung Cloudflare Web Analytics, um aggregierte Seitenaufrufe und Leistungsdaten zu verstehen. Dabei werden weder Cookies noch lokaler Speicher zur Verfolgung einzelner Besucher eingesetzt.</p>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">2. Verantwortliche Stelle</h3>
                                <p>{contactInfo.legalName}<br/>{contactInfo.street}<br/>{contactInfo.zipCity}<br/>{contactInfo.email}</p>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">3. Bereitstellung der Website und Hosting</h3>
                                <p>Wir hosten unsere Website mit Cloudflare Workers. Anbieter ist Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (nachfolgend: Cloudflare). Beim Besuch dieser Website erfasst Cloudflare als Hostinganbieter serverseitig technisch notwendige Verbindungsdaten.</p>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">4. Cloudflare Web Analytics</h3>
                                <p>Cloudflare Web Analytics verwendet ein JavaScript-Beacon, um aggregierte Seitenaufrufe und Leistungsdaten zu erfassen. Laut Cloudflare erhebt oder verwendet der Dienst keine personenbezogenen Daten der Besucher und verfolgt einzelne Nutzer nicht über verschiedene Websites hinweg.</p>
                                <p>Weitere Informationen finden Sie in der <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 dark:hover:text-zinc-50">Datenschutzerklärung von Cloudflare</a>.</p>
                            </>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
