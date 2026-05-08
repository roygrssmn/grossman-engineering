
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
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Backstory</h2>
            <p className="mb-4">To maintain a sharp understanding of infrastructure and operations, I needed a hands-on environment to test networking configurations, container orchestration, and automated backups outside of the constraints of my daily enterprise work.</p>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">My Philosophy in Action</h2>
            <p className="mb-4">I built a highly available homelab utilizing Raspberry Pi clusters, Nvidia Spark, and a dedicated NAS. The entire environment is managed via Docker, ensuring consistency and rapid disaster recovery. An architect should never lose touch with the metal; understanding the low-level infrastructure constraints makes for much more resilient high-level designs.</p>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Hard Truths</h2>
            <p className="mb-4">Running enterprise-grade configurations on consumer hardware quickly reveals the limitations of edge compute. I spent weeks fighting network latency and SD card corruption before realizing I needed to shift stateful data entirely to the NAS. It was a humbling reminder that complexity doesn't always equal reliability.</p>
            
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