import CardContainer from "../components/CardContainer"
import ProjectCard from "../components/ProjectCard"
import data from "../data/projetos.json"

export default function Projetos() {
    return (
        <>
            <section className="min-h-screen bg-gradient-to-br from-teal-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white transition-colors duration-500 ease-in-out py-20">
                <div className="text-center text-4xl font-black mb-12">
                    <h1>Projetos</h1>
                </div>
                <CardContainer>
                    {
                        data.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))
                    }
                </CardContainer>
            </section>
            
        </>
    );
}
