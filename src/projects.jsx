import React from 'react';

export const projectData = {
    rag: {
        title: 'Agentic RAG Pipeline',
        role: 'AI Architecture',
        tags: ['Python', 'LangChain', 'Vector DB', 'Prompt Engineering'],
        github: 'https://github.com/yourusername/rag-pipeline',
        content: (
            <>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Challenge</h2>
                <p className="mb-4">Building an AI system is simple but building a reliable one is complex. The goal was to create a Retrieval-Augmented Generation system that could query technical documentation without hallucinating facts or providing outdated data.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Solution</h2>
                <p className="mb-4">I architected a pipeline utilizing LangChain to connect a vector database with a large language model. By treating the AI system like traditional software, I implemented guardrails and strict evaluation criteria for the output.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">Business Impact</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Created a verifiable source of truth for technical queries.</li>
                    <li className="mb-2">Implemented automated evaluation tests to score answer accuracy.</li>
                    <li className="mb-2">Demonstrated how QA principles apply directly to modern AI engineering.</li>
                </ul>
            </>
        )
    },
    framework: {
        title: 'Enterprise QA Automation',
        role: 'Leadership & QA',
        tags: ['Playwright', 'TypeScript', 'CI/CD', 'Strategy'],
        github: 'https://github.com/yourusername/qa-framework',
        content: (
            <>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Challenge</h2>
                <p className="mb-4">Manual testing processes were creating bottlenecks in the deployment pipeline. The engineering team needed a scalable way to ensure quality without slowing down feature delivery.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Solution</h2>
                <p className="mb-4">I designed and led the implementation of an end-to-end automation framework. Beyond just writing code, this required mentoring the team and integrating the new tools into our existing CI/CD pipelines.</p>
                <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">Business Impact</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Drastically reduced the time required for regression testing.</li>
                    <li className="mb-2">Fostered a culture of quality ownership among the engineering staff.</li>
                    <li className="mb-2">Provided management with clear metrics on release stability.</li>
                </ul>
            </>
        )
    },
    homelab: {
        title: 'Infrastructure Homelab',
        role: 'DevOps & Systems',
        tags: ['Raspberry Pi', 'Docker', 'Linux', 'Networking'],
        github: 'https://github.com/yourusername/homelab-config',
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
    }
};