import ragContent from './rag.md?raw';
import frameworkContent from './framework.md?raw';
import homelabContent from './homelab.md?raw';
import leadershipContent from './leadership.md?raw';

export const projectData = {
    rag: {
        title: 'RAG Pipeline',
        role: 'AI Architecture',
        tags: ['RAG', 'Dify', 'Prompt Engineering'],
        links: [
            { type: 'github', url: 'https://github.com/yourusername/rag-pipeline', label: 'View Repository' },
            { type: 'reference', url: '#', label: 'Architecture Doc' }
        ],
        summary: 'Architected an experimental AI Proof of Concept to evaluate the reliability of RAG for technical documentation. Implemented quality guardrails to identify the gap between experimental results and production-grade stability.',
        content: ragContent
    },
    framework: {
        title: 'QA Automation Transformation',
        role: 'Tech Leadership & QA',
        tags: ['End-to-End Automation', 'CI/CD', 'Shift Left'],
        links: [
            { type: 'github', url: 'https://github.com/yourusername/qa-framework', label: 'View Repository' }
        ],
        summary: 'Architected scalable automation frameworks for high-traffic platforms to replace legacy manual processes. Catch bugs and regressions early and cut release cycles by 50%.',
        content: frameworkContent
    },
    homelab: {
        title: 'Infrastructure Homelab',
        role: 'DevOps & Systems',
        tags: ['LLMs', 'Docker', 'Linux', 'Networking'],
        links: [
            { type: 'github', url: 'https://github.com/yourusername/homelab-config', label: 'View Repository' },
            { type: 'reference', url: '#', label: 'Live Dashboard' }
        ],
        summary: 'Building my own infrastructure environment to achieve total sovereignty over data and AI. Managed a Raspberry Pi cluster and NAS via Docker to automate home operations.',
        content: homelabContent
    },
    leadership: {
        title: 'Engineering Leadership',
        role: 'Strategy & Management',
        tags: ['Team Building', 'Strategy', 'Agile', 'Scaling'],
        links: [],
        summary: 'Grew and mentored cross-functional engineering teams. Led the strategic roadmap execution to align technical delivery with business goals.',
        content: leadershipContent
    }
};