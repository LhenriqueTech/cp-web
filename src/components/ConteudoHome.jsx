export default function ConteudoHome() {
    return (
        <>
            <div className="text-center font-thin text-md md:text-xl mt-10">
                <h1 className="text-3xl md:text-2xl xl:text-6xl mb-8" 
                    style={{
                        background: 'linear-gradient(90deg, #6ee7b7, #3b82f6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        display: 'inline'
                    }}>
                    Olá, sou o Luiz
                </h1>
                <p>Descubra mais sobre minha trajetória no mundo da programação</p>
            </div>
        </>
    );
}
