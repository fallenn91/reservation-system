

const Main = () => {
    return (
        <main className="w-full h-screen p-4">
            <div className="w-full h-1/2 mb-4 relative bg-gray-200 rounded-lg">
                <img src="/assets/food.jpg" alt="food" className="w-full h-full object-cover rounded-lg" />
                
                <h2 className="absolute inset-0 text-5xl font-bold text-[var(--color-primary)] flex items-center justify-center">
                    Sin excusas<br />
                    Sin Atajos<br /> 
                    Solo constancia, trabajo y <br />
                    resultados reales</h2>
            </div>
            <div className="w-full h-1/2 bg-[var(--color-primary)] rounded-lg flex  flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-[var(--color-secundary)]">Transformando cada área de tu vida</h2>
                <p className="w-6/12 text-center p-10 text-lg">No somos solos entrenamiento, somos el punto de partida hacia tu mejor versión. Te damos la base, la guía y la estrategia para que construyas resultados reales, desarrolles disciplina y adoptes un estilo de vida que perdure en el tiempo.</p>
                <h2 className="text-3xl font-bold text-[var(--color-secundary)]">Descubre cómo trabajamos contigo</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 w-10 h-10 mt-4 animate-bounce text-[var(--color-secundary)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                </svg>
                
               

            </div>
        </main>
        
    );
};

export default Main;