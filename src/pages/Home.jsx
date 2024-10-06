import CardContainer from "../components/CardContainer";
import ConteudoHome from "../components/ConteudoHome";
import ProjectCard from "../components/ProjectCard";
import projetos from "../data/projetos.json";

export default function Home() {
    return (
        <>
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-teal-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white p-12 md:p-24 transition-colors duration-500 ease-in-out relative overflow-hidden">
                <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-start z-10">
                    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-xl border-4 border-white">
                        <img
                            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                            src="luiz.png"
                            alt="Luiz"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 z-10 md:w-1/2 md:pl-10">
                    <h1 className="text-5xl md:text-7xl font-black tracking-wider">
                        Bem-vindo ao mundo de <br />
                        <span className="text-yellow-300">Criatividade e Código</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium max-w-lg">
                        Transformando ideias em experiências visuais deslumbrantes com
                        um toque moderno e inovador.
                    </p>
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-yellow-300 text-blue-900 font-bold rounded-md shadow-lg hover:shadow-xl hover:bg-yellow-400 transition transform hover:scale-110"
                    >
                        Explore Meus Projetos
                    </a>
                </div>
            </section>
            <section id="projects" className="py-20 bg-gradient-to-br from-teal-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white transition-colors duration-500 ease-in-out">
                <div className="container mx-auto px-6 md:px-12">
                    <CardContainer titulo="Projetos">
                        {projetos.map(project => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </CardContainer>
                </div>
            </section>
        </>
    );
}
