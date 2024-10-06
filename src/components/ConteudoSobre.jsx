export default function ConteudoSobre() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white px-8 py-16 md:px-24">
            <div className="max-w-5xl w-full text-center space-y-12">
                
                {/* Título com destaque visual */}
                <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-md tracking-wide">
                    Sobre Mim
                </h1>

                {/* Introdução rápida */}
                <p className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto">
                    Um desenvolvedor apaixonado por <span className="text-yellow-400">criação</span>, <span className="text-yellow-400">inovação</span>, e experiências digitais únicas.
                </p>
                
                {/* Seção dividida: imagem + texto */}
                <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 items-center">
                    {/* Imagem de perfil com um novo estilo */}
                    <div className="w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-2xl transform transition duration-500 hover:scale-110">
                        <img
                            className="w-full h-full object-cover"
                            src="luiz.png"
                            alt="Luiz"
                        />
                    </div>

                    {/* Texto sobre a jornada */}
                    <div className="text-lg md:text-xl font-light leading-relaxed space-y-6 md:max-w-xl text-left">
                        <p>
                            Desde que comecei minha jornada na programação, descobri uma paixão por transformar ideias em realidade. Minha curiosidade me levou a aprender várias linguagens e frameworks, buscando sempre inovar e aprimorar minhas habilidades.
                        </p>
                        <p>
                            Atualmente, meu foco está em desenvolvimento <span className="font-semibold text-yellow-300">Full Stack</span>, construindo experiências visuais e funcionais tanto no <span className="font-semibold text-yellow-300">Front-End</span> quanto no <span className="font-semibold text-yellow-300">Back-End</span>. Acredito que o desenvolvimento é uma forma de arte que une lógica e criatividade.
                        </p>
                        <p className="text-yellow-300 font-semibold">
                            Vamos criar algo incrível juntos?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
