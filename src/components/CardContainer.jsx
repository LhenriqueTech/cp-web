export default function CardContainer({ titulo, children }) {
    return (
        <div className="my-16 px-4 md:px-12">
            <h1 className="text-center mb-12 text-4xl font-bold tracking-widest text-yellow-300">
                {titulo}
            </h1>
            <div className="flex justify-center">
                <section className="grid gap-12 justify-center md:grid-cols-2 lg:grid-cols-3">
                    {children}
                </section>
            </div>
        </div>
    );
}
