import Card from './Card';

export default function Main() {
    return (
        <div className="w-full h-full mt-5 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-[var(--lila)] mt-5">Transformando cada área de tu vida</h2>
            <p className="w-6/12 text-center p-10 text-lg">No somos solos entrenamiento, somos el punto de partida hacia tu mejor versión. Te damos la base, la guía y la estrategia para que construyas resultados reales, desarrolles disciplina y adoptes un estilo de vida que perdure en el tiempo.</p>
            <h2 className="text-3xl font-bold text-[var(--lila)]">Descubre cómo trabajamos contigo</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 w-10 h-10 mt-4 animate-bounce text-[var(--lila)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
            </svg>
            <article className="w-full h-full p-4 flex justify-center items-center gap-2">
                <Card
                    title="Entrenamiento"
                    description="Entrenamiento personalizado, adaptado a tus necesidades y objetivos específicos. Nuestro equipo de expertos diseñará un programa de entrenamiento que se ajuste a tu nivel de condición física, preferencias y metas, asegurando que cada sesión sea efectiva y motivadora"
                />
                <Card
                    title="Nutrición"
                    description="Planes enfocados en crear hábitos sostenibles. No se trata de dietas extremas, sino de aprender a alimentarte para potenciar tu rendimiento y transformar tu cuerpo"
                />
                <Card
                    title="Mentalidad"
                    description="El cambio real empieza en la mente. Trabajamos la constancia, la perseverancia y la disciplina para que mantengas el compromiso incluso cuando la motivación baja"
                />
            </article>
            <article className="w-full h-full p-4 flex flex-col justify-center items-center gap-2">
                <h1 id="planes" className="text-5xl font-bold text-[var(--lila)] m-5">PLANES</h1>
                <section className='bg-gray-100 p-5 border border-gray-300 shadow-lg flex justify-center items-center gap-5'>
                    <div className='w-[400px] h-full'>
                    <h2 className='text-3xl text-[var(--lila)] font-semibold mb-5'>PLAN ESSENTIAL</h2>

                    <ul className='mt-5 text-2xl list-disc list-inside'>
                        <li>Plan nutricional personalizado</li>
                        <li>Rutina de Entrenamiento</li>
                        <li>Revisión Mensual</li>
                    </ul>
                    </div>
                    <div className='w-[500px] h-[300px]'>
                        <img src='./assets/foto1.jpg' alt='food breakfast' className='w-full h-full object-cover rounded-lg'></img>
                    </div>
                </section>
            </article>
            <article id="planes" className="w-full h-full p-4 flex flex-col justify-center items-center gap-2">
                <section className='bg-gray-100 p-5 border border-gray-300 shadow-lg flex justify-center items-center gap-5'>
                    <div className='w-[500px] h-[300px]'>
                        <img src='./assets/foto2.jpg' alt='food breakfast' className='w-full h-full object-cover rounded-lg'></img>
                    </div>
                    <div className='w-[400px] h-full'>
                        <h2 className='text-3xl text-[var(--lila)] font-semibold mb-5'>PLAN PREMIUM</h2>

                        <ul className='mt-5 text-2xl list-disc list-inside'>
                            <li>Plan Essential</li>
                            <li>Chat Prioritario (Whatsapp)</li>
                            <li>Ajustes Semanales</li>
                            <li>Llamada Mensual</li>
                        </ul>
                    </div>
                </section>
            </article>
            <article id="planes" className="w-full h-full p-4 flex flex-col justify-center items-center mb-5 gap-2">
                <section className='bg-gray-100 p-5 border border-gray-300 shadow-lg flex justify-center items-center gap-5'>
                    <div className='w-[400px] h-full'>
                    <h2 className='text-3xl text-[var(--lila)] font-semibold mb-5'>PLAN CHOQUE</h2>

                    <ul className='mt-5 text-2xl list-disc list-inside'>
                        <li>Pago único</li>
                        <li>Seguimiento Intensivo</li>
                        <li>Resultados en 3 meses</li>
                    </ul>
                    </div>
                    <div className='w-[500px] h-[300px]'>
                        <img src='./assets/foto3.jpg' alt='food breakfast' className='w-full h-full object-cover rounded-lg'></img>
                    </div>
                </section>
            </article>
            <h2 id="sobre" className="text-5xl text-center font-bold text-[var(--lila)] mt-5 p-3">SOBRE MÍ</h2>
            <div className="w-full h-screen flex justify-center items-center mt-5 bg-[url('/assets/foto4.jpg')] bg-cover bg-center">
                
                {/* Contenedor del texto */}
                <div className="w-[50%] mt-5 p-5 bg-white/80 rounded-lg">
                    <h3 className="text-3xl font-bold text-[var(--lila)] mt-5 p-3">CLAUDIA DÍAZ</h3>
                    <p className="text-2xl mt-5 p-3">
                    Mi camino en el mundo del bienestar no empezó en un aula, sino a los 5 años, cuando mi diagnóstico de diabetes tipo 1 me obligó a entender la nutrición y el deporte como los pilares fundamentales de mi salud. Lo que empezó como una necesidad personal, se convirtió rápidamente en mi mayor pasión. Hoy con 23 años y una formación sólida como dietista y entrenadora personal titulada, mi misión es clara: Ayudarte a alcanzar tu mejor versión sin mitos ni restricciones extremas. Sé lo que significa tener que cuidar cada detalle, por eso mi enfoque es humano, realista y basado en la ciencia.
                    </p>
                </div>

                {/* Contenedor del logo */}
                <div className="w-[250px] ml-5">
                    <img src="/assets/logo.jpeg" alt="logo TDF" className="w-[500px] object-cover rounded-lg" />
                </div>
            </div>
        </div>      
    );
};