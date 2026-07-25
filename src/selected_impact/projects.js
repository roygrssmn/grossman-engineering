import demoRadarEn from './demo-radar.md?raw';
import demoRadarDe from './demo-radar.de.md?raw';
import frameworkEn from './framework.md?raw';
import frameworkDe from './framework.de.md?raw';
import jfrogEn from './jfrog.md?raw';
import jfrogDe from './jfrog.de.md?raw';
import ragEn from './rag.md?raw';
import ragDe from './rag.de.md?raw';
import homelabEn from '../archived_impact/homelab.md?raw';
import homelabDe from '../archived_impact/homelab.de.md?raw';
import leadershipEn from '../archived_impact/leadership.md?raw';
import leadershipDe from '../archived_impact/leadership.de.md?raw';

export const localize = (value, language) => {
    if (typeof value === 'string') return value;
    return value?.[language] ?? value?.en ?? '';
};

export const projectData = {
    'demo-radar': {
        title: {
            en: 'Demo Radar',
            de: 'Demo Radar'
        },
        role: {
            en: 'Founder & Technical Architect',
            de: 'Gründer & Technical Architect'
        },
        tags: ['AI-assisted Ops', 'React', 'Postgres', 'Python'],
        links: [
            {
                type: 'live',
                url: 'https://demo-radar.com',
                label: {
                    en: 'Open Demo Radar',
                    de: 'Demo Radar öffnen'
                }
            }
        ],
        summary: {
            en: 'A live civic-information product using AI to propose governed topic tags and help repair difficult routes—while deterministic checks and human review remain in control.',
            de: 'Ein aktives Civic-Information-Produkt, das KI für kontrollierte Themen-Tags und schwierige Routen nutzt – während deterministische Prüfungen und menschliche Kontrolle entscheidend bleiben.'
        },
        content: {
            en: demoRadarEn,
            de: demoRadarDe
        },
        readTime: 7
    },
    framework: {
        title: {
            en: 'Quality Engineering at Scale',
            de: 'Quality Engineering in großem Maßstab'
        },
        role: {
            en: 'Director, QA Engineering',
            de: 'Director, QA Engineering'
        },
        tags: ['Shift Left', 'Automation', 'SDLC'],
        links: [],
        summary: {
            en: 'Scaled a QA organisation from 1 to 20 and advanced Shift Left through a company-wide quality and automation strategy, helping shorten the release pipeline from four weeks to two.',
            de: 'Aufbau einer QA-Organisation von 1 auf 20 und Verankerung von Shift Left durch eine unternehmensweite Qualitäts- und Automatisierungsstrategie – mit einer Verkürzung der Release-Pipeline von vier auf zwei Wochen.'
        },
        content: {
            en: frameworkEn,
            de: frameworkDe
        },
        readTime: 4
    },
    'developer-platform': {
        title: {
            en: 'QA Automation at Platform Scale',
            de: 'QA-Automatisierung im Plattform-Maßstab'
        },
        role: {
            en: 'QA Technical Lead',
            de: 'QA Technical Lead'
        },
        tags: ['Test Automation', 'DevOps', 'Quality at Scale'],
        links: [],
        summary: {
            en: 'QA technical leadership, test strategy, and automation in a developer-platform environment serving roughly 1B monthly downloads across 20 package formats.',
            de: 'Technische QA-Führung, Teststrategie und Automatisierung in einer Developer-Plattform mit rund einer Milliarde Downloads pro Monat über 20 Paketformate.'
        },
        content: {
            en: jfrogEn,
            de: jfrogDe
        },
        readTime: 5
    },
    rag: {
        title: {
            en: 'RAG Reliability Proof of Concept',
            de: 'RAG-Reliability Proof of Concept'
        },
        role: {
            en: 'AI Evaluation & Quality',
            de: 'AI-Evaluation & Qualität'
        },
        tags: ['RAG', 'Evaluation', 'Guardrails'],
        links: [],
        summary: {
            en: 'A 2024 RAG proof of concept treated as a stress test—using a QA mindset to expose the gap between a convincing AI demo and operational trust.',
            de: 'Ein RAG Proof of Concept aus dem Jahr 2024 als Stresstest – mit einem QA-Blick auf die Lücke zwischen überzeugender KI-Demo und operativem Vertrauen.'
        },
        content: {
            en: ragEn,
            de: ragDe
        },
        readTime: 5
    },
    leadership: {
        archived: true,
        title: {
            en: 'Engineering Leadership',
            de: 'Engineering Leadership'
        },
        role: {
            en: 'Engineering Manager',
            de: 'Engineering Manager'
        },
        tags: ['Team Leadership', 'Product Delivery', 'Mentoring'],
        links: [],
        summary: {
            en: 'Earlier leadership work across two multidisciplinary product teams, with lessons in ownership, communication, and organizational change.',
            de: 'Frühere Führungsarbeit mit zwei multidisziplinären Produktteams – mit Erkenntnissen zu Verantwortung, Kommunikation und organisatorischem Wandel.'
        },
        content: {
            en: leadershipEn,
            de: leadershipDe
        },
        readTime: 4
    },
    homelab: {
        archived: true,
        title: {
            en: 'Private Infrastructure Lab',
            de: 'Privates Infrastruktur-Lab'
        },
        role: {
            en: 'Systems & AI Experimentation',
            de: 'System- & KI-Experimente'
        },
        tags: ['Local AI', 'Docker', 'Self-hosting'],
        links: [],
        summary: {
            en: 'A private environment for experimenting with self-hosting, automation, local AI, and the operational trade-offs of owning the full stack.',
            de: 'Eine private Umgebung für Experimente mit Self-Hosting, Automatisierung, lokaler KI und den operativen Konsequenzen vollständiger technischer Verantwortung.'
        },
        content: {
            en: homelabEn,
            de: homelabDe
        },
        readTime: 4
    }
};
