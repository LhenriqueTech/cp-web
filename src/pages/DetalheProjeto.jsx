import { useParams } from "react-router-dom";
import data from "../data/projetos.json";

export default function DetalheProjeto() {
    const { id } = useParams();
    const project = data.find((project) => project.id == id);

    return (
        <>
            <div className="flex flex-col items-center min-h-screen pb-20">
                <div className="font-normal text-center mt-10 text-3xl">
                    <h1>{project.titulo}</h1>
                </div>
                <div className="mt-10 mb-10">
                    <a href={project.github} target="_blank">
                        <img src={`/${project.img}`} alt={project.titulo} />
                    </a>
                </div>
                <div className="text-xl m-5 font-normal">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, officia ducimus explicabo nobis iste incidunt in, odio, inventore voluptas dolor officiis illum harum eligendi animi rem fuga. Blanditiis, natus at!</h2>
                </div>
            </div>
            <footer className="fixed bottom-0 left-0 right-0"></footer>
        </>
    );
}
