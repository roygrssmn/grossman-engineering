
export const homelab = {
    title: 'Infrastructure Homelab',
    role: 'DevOps & Systems',
    tags: ['Raspberry Pi', 'Docker', 'Linux', 'Networking'],
    links: [
        { type: 'github', url: 'https://github.com/yourusername/homelab-config', label: 'View Repository' },
        { type: 'reference', url: '#', label: 'Live Dashboard' }
    ],
    summary: 'Engineered a personal infrastructure environment utilizing Raspberry Pi and NAS systems. Features automated backups, network blocking, and secure remote tunneling.',
    content: (
        <>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Challenge</h2>
            <p className="mb-4">To maintain a sharp understanding of infrastructure and operations, I required a hands-on environment to test networking configurations, container orchestration, and automated backups.</p>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Solution</h2>
            <p className="mb-4">I built a highly available homelab utilizing Raspberry Pi clusters and a dedicated NAS. The entire environment is managed via Docker, ensuring consistency and rapid disaster recovery.</p>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">Business Impact</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Automated local media management and critical data backups.</li>
                <li className="mb-2">Implemented network-wide ad blocking and secure VPN access.</li>
                <li className="mb-2">Maintained hands-on expertise with Linux system administration and deployment strategies.</li>
            </ul>
        </>
    )
};