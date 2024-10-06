import ConteudoSobre from "../components/ConteudoSobre";

export default function sobre() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-blue-700 dark:from-gray-800 dark:to-gray-900 text-black dark:text-white transition-colors duration-300">
                <ConteudoSobre />
            </section>
        </>
    );
}
