import React from 'react';

export const rag = {
    title: 'Agentic RAG Pipeline',
    role: 'AI Architecture',
    tags: ['Python', 'LangChain', 'Vector DB', 'Prompt Engineering'],
    github: 'https://github.com/yourusername/rag-pipeline',
    summary: 'Designed a Retrieval-Augmented Generation system to query complex documentation. Implemented automated evaluation guardrails to ensure high-fidelity outputs.',
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
};