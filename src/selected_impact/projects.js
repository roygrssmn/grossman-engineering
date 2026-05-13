import ragContent from './rag.md?raw';
import frameworkContent from './framework.md?raw';
import homelabContent from './homelab.md?raw';
import leadershipContent from './leadership.md?raw';

export const projectData = {
    rag: {
        title: 'RAG Pipeline',
        role: 'AI Architecture',
        tags: ['RAG', 'Dify', 'Prompt Engineering'],
        links: [],
        summary: 'Architected an AI Proof of Concept to evaluate RAG reliability for technical documentation. Implemented guardrails to quantify the delta between experimental AI and enterprise-grade stability.',
        content: ragContent
    },
    framework: {
        title: 'QA Automation Transformation',
        role: 'Tech Leadership & QA',
        tags: ['End-to-End Automation', 'CI/CD', 'Shift Left'],
        links: [
          //  { type: 'github', url: 'https://github.com/yourusername/qa-framework', label: 'View Repository' }
        ],
        summary: 'Engineered scalable automation frameworks to replace legacy manual processes. Integrated \'Shift Left\' strategies to identify regressions early, successfully reducing release cycles by 50%.',
        content: frameworkContent
    },
    homelab: {
        title: 'Infrastructure Homelab',
        role: 'DevOps & Systems',
        tags: ['LLMs', 'Docker', 'Linux', 'Networking'],
        links: [
            //{ type: 'github', url: 'https://github.com/yourusername/homelab-config', label: 'View Repository' },
            // { type: 'reference', url: '#', label: 'Live Dashboard' }
        ],
        summary: 'Building a local-first infrastructure to achieve sovereignty over data and AI workflows. Creating a self-hosted environment with Docker, Linux, and LLMs to ensure high-grade reliability.',
        content: homelabContent
    },
    leadership: {
        title: 'Engineering Leadership',
        role: 'Strategy & Management',
        tags: ['Team Building', 'Strategy', 'Agile', 'Scaling'],
        links: [],
        summary: 'Scaled and mentored cross-functional engineering teams through technical ownership. Aligned technical roadmaps with stakeholder objectives to drive measurable delivery impact.',
        content: leadershipContent
    }
};