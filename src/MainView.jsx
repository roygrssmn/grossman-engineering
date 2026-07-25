import HeroSection from './HeroSection.jsx';
import ExpertiseSection from './ExpertiseSection.jsx';
import ProjectSection from './ProjectSection.jsx';
import ContactSection from './ContactSection.jsx';

export default function MainView({ language, projectData, navigate }) {
    return (
        <main className="flex-grow flex flex-col pt-32 px-6 md:px-12 lg:px-24 pb-16 md:pb-32 max-w-7xl mx-auto w-full">
            <HeroSection language={language} />
            <ExpertiseSection language={language} />
            <ProjectSection language={language} projectData={projectData} navigate={navigate} />
            <ContactSection language={language} />
        </main>
    );
}
