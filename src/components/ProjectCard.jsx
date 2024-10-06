import { Link } from "react-router-dom";

export default function ProjectCard(project) {
    return (
        <div
            id={`card-${project.id}`}
            className="max-w-sm p-4 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-teal-400 to-blue-500 dark:from-gray-700 dark:to-gray-900 transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-2xl"
            style={{
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Link to={`/projetos/${project.id}`}>
                <img className="w-full rounded-lg h-[200px] object-cover" src={project.img} alt={project.titulo} />
            </Link>
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-white mb-2">{project.titulo}</div>
                <p className="text-gray-100 dark:text-gray-300 text-base">
                    {project.descricao}
                </p>
            </div>
            <div className="px-6 py-4">
                <Link 
                    to={`/projetos/${project.id}`} 
                    className="text-white dark:text-yellow-400 hover:text-gray-200 dark:hover:text-yellow-500"
                >
                    Ver Projeto
                </Link>
            </div>
        </div>
    );
}
