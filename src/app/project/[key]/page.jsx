import { notFound } from 'next/navigation';
import { projectData } from '../../../case_studies/projects.jsx';
import ProjectView from '../../../ProjectView.jsx';

export async function generateStaticParams() {
    return Object.keys(projectData).map((key) => ({ key }));
}

export async function generateMetadata({ params }) {
    const { key } = await params;
    const project = projectData[key];
    if (!project) return {};
    return {
        title: `${project.title} | Roey Grossman`,
        description: project.summary,
        openGraph: {
            title: `${project.title} | Roey Grossman`,
            description: project.summary,
            url: `https://agenticarchitect.io/project/${key}`,
        },
        twitter: {
            title: `${project.title} | Roey Grossman`,
            description: project.summary,
        },
        alternates: {
            canonical: `/project/${key}`,
        },
    };
}

export default async function ProjectPage({ params }) {
    const { key } = await params;
    const project = projectData[key];
    if (!project) notFound();
    return <ProjectView activeProject={project} />;
}
