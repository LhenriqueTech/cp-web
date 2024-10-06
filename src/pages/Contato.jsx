import { useState } from "react";

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [enviado, setEnviado] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            nome,
            email,
            mensagem,
        });

        setEnviado(true);
        setNome("");
        setEmail("");
        setMensagem("");
    };

    return (
        <>
            <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white p-12 md:p-24 transition-colors duration-500 ease-in-out relative overflow-hidden">
                <div className="max-w-2xl w-full space-y-8 z-10">
                    <h1 className="text-5xl md:text-6xl font-black tracking-wider text-center">
                        Entre em <span className="text-yellow-300">Contato</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-center">
                        Gostaria de falar sobre um projeto ou só dar um olá? Deixe sua mensagem!
                    </p>

                    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg space-y-6">
                        <div>
                            <label htmlFor="nome" className="block text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="w-full mt-2 p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black dark:text-white dark:border-gray-600 dark:bg-gray-900"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 dark:text-gray-200">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black dark:text-white dark:border-gray-600 dark:bg-gray-900"
                                placeholder="seuemail@exemplo.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="mensagem" className="block text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Mensagem
                            </label>
                            <textarea
                                id="mensagem"
                                rows="5"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                className="w-full mt-2 p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black dark:text-white dark:border-gray-600 dark:bg-gray-900"
                                placeholder="Sua mensagem..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-4 bg-yellow-300 text-blue-900 font-bold rounded-md shadow-lg hover:shadow-xl hover:bg-yellow-400 transition transform hover:scale-105"
                        >
                            Enviar Mensagem
                        </button>
                    </form>

                    {enviado && (
                        <div className="text-center mt-4 p-4 bg-green-500 text-white rounded-md">
                            Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.
                        </div>
                    )}
                </div>
            </section>
        </>
    );
} 

