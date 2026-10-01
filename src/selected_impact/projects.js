import demoRadarEn from './demo-radar.md?raw';
import demoRadarDe from './demo-radar.de.md?raw';
import demoLogicEn from './demo-logic.md?raw';
import demoLogicDe from './demo-logic.de.md?raw';
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
        architecture: 'demo-radar',
        title: {
            en: 'Demo Radar',
            de: 'Demo Radar'
        },
        role: {
            en: 'Founder & Technical Architect',
            de: 'Gründer & Technical Architect'
        },
        tags: [
            { en: 'Product Architecture', de: 'Produktarchitektur' },
            { en: 'Applied AI', de: 'Angewandte KI' },
            { en: 'Reliable Operations', de: 'Zuverlässiger Betrieb' }
        ],
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
            en: 'A live civic-information product built with React, TypeScript, and Python. I own its product decisions, architecture, delivery, and operations, with guarded AI support for tagging and route repair.',
            de: 'Ein aktives Civic-Information-Produkt mit React, TypeScript und Python. Ich verantworte Produktentscheidungen, Architektur, Delivery und Betrieb, mit kontrolliertem KI-Support für Tagging und Routenreparatur.'
        },
        content: {
            en: demoRadarEn,
            de: demoRadarDe
        }
    },
    'demo-logic': {
        detailOnly: true,
        title: { en: 'DemoLogic: Model Evaluation', de: 'DemoLogic: Modellevaluation' },
        role: { en: 'AI Engineering Capstone', de: 'KI-Engineering-Capstone' },
        tags: ['Model Evaluation', 'NLP', 'Hosted LLMs', 'Python'],
        links: [],
        summary: {
            en: 'Comparing rules, TF-IDF, multilingual semantic models, and hosted LLMs for Demo Radar topic-tag suggestions, with explicit evaluation and review boundaries.',
            de: 'Vergleich von Regeln, TF-IDF, mehrsprachigen semantischen Modellen und gehosteten LLMs für Demo-Radar-Themen-Tags, mit klaren Grenzen für Evaluation und Prüfung.'
        },
        content: { en: demoLogicEn, de: demoLogicDe }
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
        }
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
        }
    },
    rag: {
        title: {
            en: 'RAG Reliability Proof of Concept',
            de: 'RAG-Reliability Proof of Concept'
        },
        role: {
            en: 'AI Evaluation & Quality',
            de: 'KI-Evaluation & Qualität'
        },
        tags: ['RAG', 'Evaluation', 'Guardrails'],
        links: [],
        summary: {
            en: 'A 2024 GPT-4/Dify proof of concept for internal documentation, examining retrieval, source grounding, and failure cases before considering production use.',
            de: 'Ein GPT-4/Dify-PoC aus dem Jahr 2024 für interne Dokumentation: Prüfung von Retrieval, Quellenbindung und Fehlerfällen vor einem möglichen Produktiveinsatz.'
        },
        content: {
            en: ragEn,
            de: ragDe
        }
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
        }
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
        tags: [{ en: 'Local AI', de: 'Lokale KI' }, 'Docker', 'Self-hosting'],
        links: [],
        summary: {
            en: 'A private environment for experimenting with self-hosting, automation, local AI, and the operational trade-offs of owning the full stack.',
            de: 'Eine private Umgebung für Experimente mit Self-Hosting, Automatisierung, lokaler KI und den operativen Konsequenzen vollständiger technischer Verantwortung.'
        },
        content: {
            en: homelabEn,
            de: homelabDe
        }
    }
};
