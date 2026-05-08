
export const homelab = {
    title: 'Infrastructure Homelab',
    role: 'DevOps & Systems',
    tags: ['Raspberry Pi', 'Docker', 'Linux', 'Networking'],
    links: [
        { type: 'github', url: 'https://github.com/yourusername/homelab-config', label: 'View Repository' },
        { type: 'reference', url: '#', label: 'Live Dashboard' }
    ],
    summary: 'Building my own infrastructure environment utilizing Raspberry Pi, Nvidia Spark, NAS systems, and Cloud providers. Features automated backups, network blocking, and secure remote tunneling.',
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
            
            <div className="mt-12 p-6 bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-xl">
                <h3 className="font-mono text-lg font-medium mb-4 text-zinc-900 dark:text-zinc-50 border-b border-stone-200 dark:border-zinc-800 pb-2">Lab Specifications</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <li><strong className="text-zinc-900 dark:text-zinc-100">Compute:</strong> Raspberry Pi, Nvidia Spark, and Cloud providers</li>
                    <li><strong className="text-zinc-900 dark:text-zinc-100">Storage:</strong> Synology NAS (16TB RAID 1)</li>
                    <li><strong className="text-zinc-900 dark:text-zinc-100">Orchestration:</strong> Docker Swarm & Portainer</li>
                    <li><strong className="text-zinc-900 dark:text-zinc-100">Networking:</strong> Pi-hole, WireGuard VPN, Nginx</li>
                </ul>
            </div>
        </>
    )
};