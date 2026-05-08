import ragContent from './rag.md?raw';
import frameworkContent from './framework.md?raw';
import homelabContent from './homelab.md?raw';
import leadershipContent from './leadership.md?raw';

export const projectData = {
    rag: {
        title: 'Agentic RAG Pipeline',
        role: 'AI Architecture',
        tags: ['Python', 'LangChain', 'Vector DB', 'Prompt Engineering'],
        links: [
            { type: 'github', url: 'https://github.com/yourusername/rag-pipeline', label: 'View Repository' },
            { type: 'reference', url: '#', label: 'Architecture Doc' }
        ],
        summary: 'Designed a Retrieval-Augmented Generation system to query complex documentation. Implemented automated evaluation guardrails to ensure high-fidelity outputs.',
        content: ragContent
    },
    framework: {
        title: 'Enterprise QA Transformation',
        role: 'Leadership & QA',
        tags: ['Playwright', 'TypeScript', 'CI/CD', 'Strategy'],
        links: [
            { type: 'github', url: 'https://github.com/yourusername/qa-framework', label: 'View Repository' }
        ],
        summary: 'Scaled quality operations from manual bottlenecks to a fully automated CI/CD pipeline, reducing release cycles by 40%.',
        content: frameworkContent
    },
    homelab: {
        title: 'Infrastructure Homelab',
        role: 'DevOps & Systems',
        tags: ['Raspberry Pi', 'Docker', 'Linux', 'Networking'],
        links: [
            { type: 'github', url: 'https://github.com/yourusername/homelab-config', label: 'View Repository' },
            { type: 'reference', url: '#', label: 'Live Dashboard' }
        ],
        summary: 'Building my own infrastructure environment utilizing Raspberry Pi, Nvidia Spark, NAS systems, and Cloud providers. Features automated backups, network blocking, and secure remote tunneling.',
        content: homelabContent
    },
    leadership: {
        title: 'Global Engineering Leadership',
        role: 'Strategy & Management',
        tags: ['Team Building', 'Roadmap Execution', 'Agile', 'Scaling'],
        links: [],
        summary: 'Grew and mentored distributed engineering teams. Led the strategic roadmap execution to align technical delivery with enterprise business goals.',
        content: leadershipContent
    }
};