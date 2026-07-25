import demoRadarEn from './demo-radar.md?raw';
import demoRadarDe from './demo-radar.de.md?raw';
import frameworkEn from './framework.md?raw';
import frameworkDe from './framework.de.md?raw';
import jfrogEn from './jfrog.md?raw';
import jfrogDe from './jfrog.de.md?raw';
import ragEn from './rag.md?raw';
import ragDe from './rag.de.md?raw';

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
        tags: ['React', 'FastAPI', 'PostGIS', 'Open Data'],
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
            en: 'A live civic-information product that turns official Berlin demonstration data into a searchable map and list. I own the product, architecture, delivery, quality, and operations end to end.',
            de: 'Ein aktives Civic-Information-Produkt, das offizielle Berliner Versammlungsdaten als durchsuchbare Karte und Liste zugänglich macht. Ich verantworte Produkt, Architektur, Delivery, Qualität und Betrieb End-to-End.'
        },
        content: {
            en: demoRadarEn,
            de: demoRadarDe
        },
        readTime: 3
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
        tags: ['Organisation Design', 'Automation', 'CI/CD'],
        links: [],
        summary: {
            en: 'Scaled a QA organisation from 1 to 20 and led a company-wide quality and automation strategy for products reaching 1.5M+ daily users, while helping shorten the release pipeline from four weeks to two.',
            de: 'Aufbau einer QA-Organisation von 1 auf 20 und Leitung einer unternehmensweiten Qualitäts- und Automatisierungsstrategie für Produkte mit mehr als 1,5 Millionen täglichen Nutzern – bei gleichzeitiger Verkürzung der Release-Pipeline von vier auf zwei Wochen.'
        },
        content: {
            en: frameworkEn,
            de: frameworkDe
        },
        readTime: 3
    },
    'developer-platform': {
        title: {
            en: 'Developer Platform Reliability',
            de: 'Zuverlässigkeit einer Developer-Plattform'
        },
        role: {
            en: 'Technical Lead',
            de: 'Technical Lead'
        },
        tags: ['Platform Quality', 'Test Strategy', 'On-call'],
        links: [],
        summary: {
            en: 'Quality and test leadership in a developer-platform environment serving roughly 1B monthly downloads and 800K packages across 20 formats.',
            de: 'Qualitäts- und Testführung in einer Developer-Plattform mit rund einer Milliarde Downloads pro Monat und 800.000 Paketen in 20 Formaten.'
        },
        content: {
            en: jfrogEn,
            de: jfrogDe
        },
        readTime: 2
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
            en: 'A 2024 proof of concept that tested retrieval-augmented generation against internal technical documentation—and made its reliability limits visible before production investment.',
            de: 'Ein Proof of Concept aus dem Jahr 2024, der Retrieval-Augmented Generation mit interner technischer Dokumentation testete und Zuverlässigkeitsgrenzen vor einer Produktionsinvestition sichtbar machte.'
        },
        content: {
            en: ragEn,
            de: ragDe
        },
        readTime: 2
    }
};
