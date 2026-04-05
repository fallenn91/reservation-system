import Card from './Card';
import { FaDumbbell, FaNutritionix, FaBrain, FaCalendarCheck, FaHeartbeat   } from 'react-icons/fa';
import { GiForkKnifeSpoon, GiRunningShoe } from "react-icons/gi";
import { IoIosChatbubbles, IoMdSettings, IoMdTrendingUp  } from "react-icons/io";
import { MdPhoneInTalk, MdOutlinePayments  } from "react-icons/md";
import MyButton from './MyButton';

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
                                                    {/* PLANES */}

            <article id="planes" className="w-full flex flex-col gap-5 mt-10">
                <h1 className='text-4xl md:text-5xl text-center font-bold text-[var(--lila)] p-12'>PLANES</h1>
                                        {/* PLAN ESSENTIAL */}
                <h2 id="essential "className='text-2xl md:text-3xl text-left font-bold text-[var(--lila)]'>PLAN ESSENTIAL</h2>
                <div className='w-full flex flex-col lg:flex-row justify-center mt-5 gap-6'>
                    <div className='w-full lg:w-[60%] flex flex-col justify-center gap-6'>
                        <div className='w-full flex flex-col justify-center bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-9'>
                            <ul className='space-y-5'>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><GiForkKnifeSpoon className="plan-icon" />Plan nutricional personalizado</h3>
                                <p className="text-base md:text-lg">Recibirás una dieta diseñada específicamente para ti, tomando en cuenta tus metas, preferencias alimenticias y necesidades nutricionales.</p>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><GiRunningShoe className="plan-icon" />Rutina de entrenamiento</h3>
                                <p className="text-base md:text-lg">Una rutina personalizada adaptada a tu nivel de condición física, que te ayudará a progresar de manera gradual.</p>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><FaCalendarCheck className="plan-icon"/>Revisión mensual</h3>
                                <p className="text-base md:text-lg">Un chequeo mensual de tu progreso para ajustar la dieta y la rutina según sea necesario, asegurando que te mantengas en el camino hacia tus objetivos.</p>
                            </ul>
                        </div>
                        {/* PLAN PREMIUM */}
                        <h2 id="premium" className='text-2xl md:text-3xl text-left font-bold text-[var(--lila)] mt-3'>PLAN PREMIUM</h2>

                        <div className='w-full flex flex-col justify-center bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-9'>
                            <ul className='space-y-2'>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><IoIosChatbubbles className="plan-icon"/>Chat Prioritario (Whatsapp)</h3>
                                <p className="text-base md:text-lg">Tendrás acceso directo a través de un chat exclusivo donde podrás hacer preguntas y recibir soporte inmediato para resolver cualquier duda que tengas en tu camino de entrenamiento y nutrición.</p>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><IoMdSettings className="plan-icon"/>Ajustes Semanales</h3>
                                <p className="text-base md:text-lg">Cada semana recibirás una actualización o ajuste en tu plan, ya sea en tu rutina de entrenamiento o en tu dieta, para optimizar tus resultados y mantener el desafío.</p>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><MdPhoneInTalk className="plan-icon"/>Llamada Mensual</h3>
                                <p className="text-base md:text-lg">Una llamada mensual con tu entrenador para revisar tu progreso, discutir tus logros y desafíos, y ajustar tu plan según sea necesario.</p>
                            </ul>
                        </div>
                                                {/* PLAN CHOQUE */}

                        <h2 id="choque" className='text-2xl md:text-3xl text-left font-bold text-[var(--lila)] mt-3'>PLAN CHOQUE</h2>

                        <div className='w-full flex flex-col justify-center bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-9'>
                            <ul className='space-y-2'>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><MdOutlinePayments className="plan-icon"/>Pago único</h3>
                                <p className="text-base md:text-lg">Este plan requiere un pago único, lo que te asegura acceso completo a todo el seguimiento intensivo durante 3 meses. No habrá cargos adicionales durante ese tiempo.</p>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><FaHeartbeat className="plan-icon"/>Seguimiento Intensivo</h3>
                                <p className="text-base md:text-lg">Tendrás un acompañamiento cercano con actualizaciones diarias o semanales según tus necesidades, para asegurarte de que estés siempre en el camino correcto.</p>
                                <h3 className='flex items-center gap-2 text-xl md:text-2xl text-left font-bold text-[var(--lila)]'><IoMdTrendingUp className="plan-icon"/>Resultados en 3 meses</h3>
                                <p className="text-base md:text-lg">Este plan está diseñado para garantizar resultados visibles en un corto periodo, con el objetivo de lograr una transformación notable en tan solo tres meses.</p>
                            </ul>
                        </div>
                    </div>
                    <div className='relative w-full lg:w-[40%] flex flex-col justify-start gap-5'>
                        <div className="relative sticky top-[25vh] w-full h-[450px] rounded-lg overflow-hidden">
                            <img src='/assets/foto1.jpg' className='w-full h-full object-cover' alt="Imagen" />
                            <div className='absolute inset-0 bg-black/40'></div>
                            <MyButton title="Comienza hoy mismo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !text-sm md:!text-lg lg:!text-xl z-10"/>
                        </div>
                    </div>
                </div>
            </article>
            <h2 id="sobre" className="text-4xl md:text-5xl text-center font-bold text-[var(--lila)] p-12">SOBRE MÍ</h2>
            <div className="relative w-full min-h-[50vh] md:min-h-[70vh] flex flex-col-reverse lg:flex-row justify-center items-center py-10 rounded-lg overflow-hidden md:py-20 bg-[url('/assets/foto4.jpg')] bg-cover bg-center bg-fixed gap-8 lg:gap-10 px-4">
            <div className="absolute inset-0 bg-black/40"></div>
                {/* Contenedor del texto */}
                <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] p-6 md:p-8 bg-white/80 rounded-xl shadow-xl flex flex-col justify-center z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--lila)] mb-4 text-center lg:text-left">CLAUDIA DÍAZ</h3>
                    <p className="text-base md:text-xl leading-relaxed text-gray-800 text-justify">
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