
export default function Modals({ activeModal, setActiveModal, language }) {
    if (!activeModal) return null;

    return (
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
                                <p>When you visit our website, Cloudflare automatically logs server-side connection data as our hosting provider. This is technically necessary to deliver the website and guarantee its security.</p>
                            </>
                        ) : (
                            <>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">1. Datenschutz auf einen Blick</h3>
                                <p>Diese Website erfasst keine personenbezogenen Daten durch Tracker, Analyse-Tools oder Cookies. Sie dient rein der Informationsbereitstellung.</p>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">2. Verantwortliche Stelle</h3>
                                <p>Roey Grossman<br/>[Your Street and Number]<br/>[Your Zip Code] Berlin<br/>hello@thequalityarchitect.io</p>
                                <h3 className="font-medium text-lg mt-6 mb-2 text-zinc-900 dark:text-zinc-50">3. Bereitstellung der Website und Hosting</h3>
                                <p>Wir hosten unsere Website bei Cloudflare Pages. Anbieter ist die Cloudflare, Inc. Wenn Sie unsere Website besuchen, erfasst Cloudflare als unser Hostinganbieter serverseitig Verbindungsdaten.</p>
                            </>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}