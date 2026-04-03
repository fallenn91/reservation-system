import Card from './Card';
import { FaDumbbell, FaNutritionix, FaBrain   } from "react-icons/fa";
export default function Main() {
    return (
        <div className="w-full flex flex-col items-center justify-center px-4 my-9 md:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--lila)]  text-center">Transformando cada área de tu vida</h2>
            <p className="max-w-7xl mx-auto text-center text-base p-4 md:p-10 md:text-lg">No somos solos entrenamiento, somos el punto de partida hacia tu mejor versión. Te damos la base, la guía y la estrategia para que construyas resultados reales, desarrolles disciplina y adoptes un estilo de vida que perdure en el tiempo.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--lila)] text-center px-4">Descubre cómo trabajamos contigo</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 w-8 h-8 md:w-10 md:h-10 mt-4 animate-bounce text-[var(--lila)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
            </svg>
            <article className="w-full h-full flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-4 mt-8">
                <Card
                    Icon={FaDumbbell}
                    title="Entrenamiento"
                    description="Entrenamiento personalizado, adaptado a tus necesidades y objetivos específicos. Nuestro equipo de expertos diseñará un programa de entrenamiento que se ajuste a tu nivel de condición física, preferencias y metas, asegurando que cada sesión sea efectiva y motivadora."
                />
                <Card
                    Icon={FaNutritionix }
                    title="Nutrición"
                    description="Planes enfocados en crear hábitos sostenibles. No se trata de dietas extremas, sino de aprender a alimentarte correctamente para potenciar tu rendimiento, mantener tu energía y transformar tu cuerpo de manera saludable y duradera."
                />
                <Card
                    Icon={FaBrain }
                    title="Mentalidad"
                    description="El cambio real empieza en la mente. Trabajamos la constancia, la perseverancia y la disciplina para que mantengas el compromiso, incluso cuando la motivación disminuye, ayudándote a desarrollar hábitos que perduren en el tiempo."
                />
            </article>
            <article className="w-full h-full flex flex-col justify-center items-center gap-2 mt-10">
                <h1 id="planes" className="text-4xl md:text-5xl font-bold text-[var(--lila)] m-5 text-center">PLANES</h1>
                <section className='w-full bg-gray-100 p-5 md:p-8 border border-gray-300 shadow-lg flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto rounded-xl'>
                    <div className='w-full lg:w-[400px] h-full flex flex-col justify-center'>
                        <h2 className='text-2xl md:text-3xl text-[var(--lila)] font-semibold mb-3 md:mb-5 text-center lg:text-left'>PLAN ESSENTIAL</h2>
                        <ul className='mt-2 md:mt-5 text-lg md:text-xl lg:text-2xl list-disc list-inside space-y-2'>
                            <li>Plan nutricional personalizado</li>
                            <li>Rutina de Entrenamiento</li>
                            <li>Revisión Mensual</li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-[500px] h-[250px] md:h-[300px] overflow-hidden rounded-lg'>
                        <img src='./assets/foto1.jpg' alt='food breakfast' className='w-full h-full object-cover rounded-lg'></img>
                    </div>
                </section>
            </article>
            <article className="w-full h-full flex flex-col justify-center items-center gap-2 mt-10">
                <section className='w-full bg-gray-100 p-5 md:p-8 border border-gray-300 shadow-lg flex flex-col-reverse lg:flex-row justify-center items-center gap-8 mx-auto rounded-xl'>
                    <div className='w-full lg:w-[500px] h-[250px] md:h-[300px] overflow-hidden rounded-lg'>
                        <img src='./assets/foto2.jpg' alt='food breakfast' className='w-full h-full object-cover rounded-lg'></img>
                    </div>
                    <div className='w-full lg:w-[400px] h-full flex flex-col justify-center'>
                        <h2 className='text-2xl md:text-3xl text-[var(--lila)] font-semibold mb-3 md:mb-5 text-center lg:text-left'>PLAN PREMIUM</h2>
                        <ul className='mt-2 md:mt-5 text-lg md:text-xl lg:text-2xl list-disc list-inside space-y-2'>
                            <li>Plan Essential</li>
                            <li>Chat Prioritario (Whatsapp)</li>
                            <li>Ajustes Semanales</li>
                            <li>Llamada Mensual</li>
                        </ul>
                    </div>
                </section>
            </article>
            <article className="w-full h-full flex flex-col justify-center items-center gap-2 mt-10">
                <section className='w-full bg-gray-100 p-5 md:p-8 border border-gray-300 shadow-lg flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto rounded-xl'>
                    <div className='w-full lg:w-[400px] h-full flex flex-col justify-center'>
                        <h2 className='text-2xl md:text-3xl text-[var(--lila)] font-semibold mb-3 md:mb-5 text-center lg:text-left'>PLAN CHOQUE</h2>
                        <ul className='mt-2 md:mt-5 text-lg md:text-xl lg:text-2xl list-disc list-inside space-y-2'>
                            <li>Pago único</li>
                            <li>Seguimiento Intensivo</li>
                            <li>Resultados en 3 meses</li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-[500px] h-[250px] md:h-[300px] overflow-hidden rounded-lg'>
                        <img src='./assets/foto3.jpg' alt='food breakfast' className='w-full h-full object-cover rounded-lg'></img>
                    </div>
                </section>
            </article>
            <h2 id="sobre" className="text-4xl md:text-5xl text-center font-bold text-[var(--lila)] mt-10 mb-10 p-3">SOBRE MÍ</h2>
            <div className="relative w-full min-h-[50vh] md:min-h-[70vh] flex flex-col-reverse lg:flex-row justify-center items-center py-10 rounded-lg overflow-hidden md:py-20 bg-[url('/assets/foto4.jpg')] bg-cover bg-center bg-fixed gap-8 lg:gap-10 px-4">
            <div className="absolute inset-0 bg-black/40"></div>
                {/* Contenedor del texto */}
                <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] p-6 md:p-8 bg-white/80 rounded-xl shadow-xl flex flex-col justify-center z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--lila)] mb-4 text-center lg:text-left">CLAUDIA DÍAZ</h3>
                    <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-gray-800 text-justify">
                        Mi camino en el mundo del bienestar no empezó en un aula, sino a los 5 años, cuando mi diagnóstico de diabetes tipo 1 me obligó a entender la nutrición y el deporte como los pilares fundamentales de mi salud. Lo que empezó como una necesidad personal, se convirtió rápidamente en mi mayor pasión. Hoy con 23 años y una formación sólida como dietista y entrenadora personal titulada, mi misión es clara: Ayudarte a alcanzar tu mejor versión sin mitos ni restricciones extremas. Sé lo que significa tener que cuidar cada detalle, por eso mi enfoque es humano, realista y basado en la ciencia.
                    </p>
                </div>

                {/* Contenedor del logo */}
                <div className="w-[180px] md:w-[220px] lg:w-[250px] flex-shrink-0 bg-white/50 p-2 rounded-xl z-10">
                    <img src="/assets/logo-completo.png" alt="logo TDF" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div>      
    );
};