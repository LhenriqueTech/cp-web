import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark";
        }
        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.remove("light");
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
            document.querySelector("html").classList.add("light");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    function btnf() {
        const menu = document.getElementById("menu");
        if (menu) {
            menu.classList.toggle("hidden");
        }
    }

    return (
        <>
            <header className="transition duration-500 ease-in-out bg-gradient-to-br from-teal-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white font-bold w-full h-auto flex-col md:flex-row justify-between items-center p-4 md:px-16 md:py-6 sticky top-0 z-50 shadow-md border-b-4 border-blue-800 dark:border-gray-700">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                        Portfólio
                    </h1>

                    <nav>
                        <ul id="menu" className="md:flex gap-8 hidden">
                            <li className="relative group">
                                <NavLink to="/" className="hover:text-yellow-300 transition duration-300">
                                    Home
                                </NavLink>
                                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-300 scale-0 transition-transform duration-300 origin-left group-hover:scale-100"></span>
                            </li>
                            <li className="relative group">
                                <NavLink to="/sobre" className="hover:text-yellow-300 transition duration-300">
                                    Sobre mim
                                </NavLink>
                                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-300 scale-0 transition-transform duration-300 origin-left group-hover:scale-100"></span>
                            </li>
                            <li className="relative group">
                                <NavLink to="/projetos" className="hover:text-yellow-300 transition duration-300">
                                    Projetos
                                </NavLink>
                                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-300 scale-0 transition-transform duration-300 origin-left group-hover:scale-100"></span>
                            </li>
                            <li className="relative group">
                                <NavLink to="/contato" className="hover:text-yellow-300 transition duration-300">
                                    Contato
                                </NavLink>
                                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-300 scale-0 transition-transform duration-300 origin-left group-hover:scale-100"></span>
                            </li>
                        </ul>
                    </nav>

                    <button
                        className="dark:fill-white transition duration-500 hover:scale-[1.1] p-2 rounded-full hover:bg-yellow-300 dark:hover:bg-gray-700"
                        onClick={handleChangeTheme}
                    >
                        {theme === "dark" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.36 5.36l-.7-.7m-10.62 0l-.7.7M16.95 7.05l-.7-.7m-7.07 0l-.7.7M12 5a7 7 0 100 14 7 7 0 000-14z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657A8 8 0 018.343 7.343m4.242 4.242l1.415 1.415m-6.364 0l1.415-1.415m1.415 4.243l1.415 1.414m-6.364 0l1.415-1.415m4.243-4.243l1.414 1.414m0 0l1.415-1.415M6.343 6.343l1.415 1.414m0 0l1.415-1.415" />
                            </svg>
                        )}
                    </button>

                    <button onClick={btnf} type="button" className="md:hidden transition duration-300 hover:scale-110 inline-flex items-center justify-center p-2 dark:hover:text-white">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}
