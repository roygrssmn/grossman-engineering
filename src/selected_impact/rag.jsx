
export const rag = {
    title: 'Agentic RAG Pipeline',
    role: 'AI Architecture',
    tags: ['Python', 'LangChain', 'Vector DB', 'Prompt Engineering'],
    links: [
        { type: 'github', url: 'https://github.com/yourusername/rag-pipeline', label: 'View Repository' },
        { type: 'reference', url: '#', label: 'Architecture Doc' }
    ],
    summary: 'Designed a Retrieval-Augmented Generation system to query complex documentation. Implemented automated evaluation guardrails to ensure high-fidelity outputs.',
    content: (
        <>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Backstory</h2>
            <p className="mb-4">Building an AI system is simple, but building a reliable one is complex. The organization needed a Retrieval-Augmented Generation (RAG) system that could query technical documentation without hallucinating facts or providing outdated data. Previous attempts had failed to establish trust with the end-users.</p>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">My Philosophy in Action</h2>
            <p className="mb-4">I architected a pipeline utilizing LangChain to connect a vector database with a large language model. By treating the AI system like traditional software, I implemented strict guardrails and automated evaluation criteria for the output. Quality cannot be an afterthought in AI; it must be built into the orchestration layer.</p>
            <h2 className="font-serif text-2xl mt-8 mb-4 font-medium text-zinc-900 dark:text-zinc-50">The Hard Truths</h2>
            <p className="mb-4">Initially, we relied too heavily on generic chunking strategies for the vector database, which degraded context retrieval. If I were to rebuild it today, I would implement semantic chunking from day one and spend more time optimizing the embedding models rather than just tweaking the LLM prompts.</p>
        </>
    )
};