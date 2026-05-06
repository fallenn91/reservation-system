import Card from './Card';
import { BoltIcon, ScaleIcon, ShieldCheckIcon, CalendarDaysIcon, HeartIcon, ChatBubbleLeftRightIcon, CogIcon, ArrowTrendingUpIcon, PhoneIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import MyButton from './MyButton';
import { useState } from 'react';

export default function Main() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const nutritionPlansFull = {
        basico: `¿Sabes lo que tienes que hacer pero necesitas el mapa para lograrlo? Este plan está diseñado para personas disciplinadas que buscan una estructura profesional sin necesidad de supervisión constante. Recibirás tu programación de entrenamiento y tu plan nutricional 100% adaptados a tus objetivos y contexto actual. Tú pones la disciplina, yo te doy la estrategia ganadora.`,
        esencial: `¿Te surgen dudas sobre si estás haciendo bien un ejercicio o cómo gestionar una cena fuera? No camines sola. Con el Plan Integral, no solo diseñamos tu entrenamiento y nutrición a medida, sino que estoy a tu lado para resolver cada duda que aparezca, garantizando que cada paso que des sea el correcto hacia tu objetivo.`,
        premium: `El nivel de compromiso más alto para quienes no se conforman con menos. Con el Plan Premium, me convierto en tu mentora personal. Tendrás tu estrategia de nutrición y entrenamiento a medida, pero lo más importante: acceso directo a mi WhatsApp y videollamadas individuales. Analizaremos tu progreso cara a cara, ajustaremos cada detalle en tiempo real y superaremos juntas cualquier obstáculo. Es el camino más rápido y seguro hacia tu mejor versión.`
    };

    const trainingPlansFull = {
        autonomo: `¿Sientes que tus entrenamientos se han estancado? Consigue una planificación profesional diseñada específicamente para tus objetivos, material disponible y nivel. Recibirás tu rutina completa con todas las variables (series, repeticiones y descansos) para que solo tengas que llegar y entrenar. Sin soporte, sin rodeos, solo resultados.`,
        pro: `Lleva tu entrenamiento al siguiente nivel con el respaldo de una profesional. No solo te entrego una rutina, sino que te acompaño en el proceso. Podrás consultarme tus dudas sobre ejercicios o progresión para asegurarnos de que cada sesión cuenta. Entrena con la seguridad de que estás haciendo lo correcto en cada repetición.`,
        elite: `Este plan está enfocado en la excelencia técnica y el rendimiento. Además de tu rutina personalizada, analizaremos tus vídeos de ejecución para corregir errores y evitar lesiones. Con contacto directo por WhatsApp y videollamadas para resolver tus dudas y corregir tus ejercicios, buscamos la máxima eficacia y el mayor rendimiento en cada una de las sesiones.`
    };

    return (
        <div className="w-full flex flex-col items-center justify-center px-4 my-9 md:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--gold)]  text-center">Tu transformación comienza aquí</h2>
            <p className="max-w-5xl mx-auto text-center text-base p-4 md:p-10 md:text-lg text-[var(--white)]">No somos solo entrenamiento, somos el punto de partida hacia tu mejor versión. Te damos la base, la guía y la estrategia para que construyas resultados reales, desarrolles disciplina y adoptes un estilo de vida que perdure en el tiempo.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--gold)] text-center m-6">Descubre cómo trabajamos contigo</h2>
            <article className="w-full min-h-[60vh] flex flex-col lg:flex-row justify-between items-center max-w-7xl mw-auto mt-6 mb-4 gap-4">
                <Card
                    Icon={BoltIcon}
                    title="Entrenamiento"
                    description="Entrenamiento personalizado adaptado a tu nivel y objetivos, con rutinas progresivas, seguimiento semanal y ajustes según tu progreso para garantizar resultados efectivos."
                    buttonText="Ver rutinas"
                    buttonHref="#sistemasEntrenamiento"
                />
                <Card
                    Icon={ScaleIcon}
                    title="Nutrición"
                    description="Planes nutricionales centrados en hábitos sostenibles, con guías, listas de compra y consejos personalizados para mejorar tu rendimiento, energía y salud a largo plazo."
                    buttonText="Planes nutricionales"
                    buttonHref="#planesNutricionales"
                />
                <Card
                    Icon={ShieldCheckIcon}
                    title="Mentalidad"
                    description="Coaching enfocado en disciplina y constancia para mantener el compromiso, con motivación diaria y estrategias que te ayuden a superar barreras y crear hábitos duraderos."
                    buttonText="Coaching mental"
                    buttonHref="#form"
                />
            </article>
                                                    {/* PLANES */}

            <article id="planes" className="w-full min-h-screen flex flex-col gap-5 mt-10 max-w-7xl mx-auto">
                {/* PLANES NUTRICIONALES */}
                <section id="planesNutricionales" className="w-full flex flex-col gap-3 mt-6">
                    <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">
                    Nutrición
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-400 dark:text-white mb-6">
                    Planes Nutricionales
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

                        {/* Básico */}
                        <div className="flex flex-col h-full gap-4 border border-gray-200 rounded-2xl p-6 hover:border-[var(--gold)] transition-colors duration-200">
                            <div className='flex flex-col gap-3'>
                                <p className="text-xs font-semibold uppercase text-[var(--gold)]">básico</p>
                                <h3 className="text-xl font-bold text-gray-400 dark:text-white">Plan Básico</h3>

                                <ul className="text-sm text-gray-400 space-y-1">
                                <li>✔ Plan nutricional personalizado</li>
                                <li>✔ Entrenamiento adaptado</li>
                                <li>✔ Sin seguimiento</li>
                                </ul>
                            </div>
                            <div className='flex-1' />

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-2xl font-bold text-gray-400 dark:text-white">
                                    50 <span className="text-sm text-gray-400">€/mes</span>
                                </span>
                                </div>

                                <button
                                onClick={() => setSelectedPlan({ name: "Plan Básico", text: nutritionPlansFull.basico })}
                                className="mt-2 border border-[var(--gold)] text-[var(--gold)] py-2 rounded-lg hover:bg-[var(--gold)] hover:text-white transition"
                                >
                                Ver más
                                </button>
                        </div>

                        {/* Esencial */}
                        <div className="flex flex-col h-full gap-4 border-2 border-[var(--gold)] rounded-2xl p-6">
                            <div className='flex flex-col gap-3'>
                                <p className="text-xs font-semibold uppercase text-[var(--gold)]">esencial</p>
                                <h3 className="text-xl font-bold text-gray-400 dark:text-white">Plan Esencial</h3>

                                <ul className="text-sm text-gray-400 space-y-1">
                                <li>✔ Nutrición + Entrenamiento</li>
                                <li>✔ Soporte continuo</li>
                                <li>✔ Resolución de dudas</li>
                                </ul>
                            </div>
                            <div className='flex-1' />
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-2xl font-bold text-gray-400 dark:text-white">
                                    60 <span className="text-sm text-gray-400">€/mes</span>
                                </span>
                                <span className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
                                    Popular
                                </span>
                                </div>

                                <button
                                onClick={() => setSelectedPlan({ name: "Plan Esencial", text: nutritionPlansFull.esencial })}
                                className="mt-2 bg-[var(--gold)] text-white py-2 rounded-lg hover:opacity-90 transition"
                                >
                                Ver más
                                </button>
                            
                        </div>

                        {/* Premium */}
                        <div className="flex flex-col h-full gap-4 border border-gray-200 rounded-2xl p-6 hover:border-[var(--gold)] transition-colors duration-200">
                            <div className='flex flex-col gap-3'>
                                <p className="text-xs font-semibold uppercase text-[var(--gold)]">premium</p>
                                <h3 className="text-xl font-bold text-gray-400 dark:text-white">Plan Premium</h3>

                                <ul className="text-sm text-gray-400 space-y-1">
                                <li>✔ Mentoría personalizada</li>
                                <li>✔ WhatsApp directo</li>
                                <li>✔ Videollamadas</li>
                                </ul>
                            </div>
                            <div className='flex-1' />
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className="text-2xl font-bold text-gray-400 dark:text-white">
                                        65 <span className="text-sm text-gray-400">€/mes</span>
                                    </span>
                                </div>
                                <button
                                onClick={() => setSelectedPlan({ name: "Plan Premium", text: nutritionPlansFull.premium })}
                                className="mt-2 border border-[var(--gold)] text-[var(--gold)] py-2 rounded-lg hover:bg-[var(--gold)] hover:text-white transition"
                                >
                                Ver más
                                </button>
                        </div>

                    </div>
                </section>

                <hr className="border-gray-100 my-6" />

                {/* SISTEMAS DE ENTRENAMIENTO */}
                <section id="sistemasEntrenamiento" className="w-full flex flex-col gap-3 mt-6">
                    <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)]">
                    Entrenamiento
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-400 dark:text-white mb-6">
                    Sistemas de Entrenamiento
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Autónomo */}
                        <div className="flex flex-col gap-4 border border-gray-200 rounded-2xl p-6 hover:border-[var(--gold)] transition-colors duration-200">
                            <div className='flex flex-col gap-3'>
                                <p className="text-xs font-semibold uppercase text-[var(--gold)]">autónomo</p>
                                <h3 className="text-xl font-bold text-gray-400 dark:text-white">Plan Autónomo</h3>

                                <ul className="text-sm text-gray-400 space-y-1">
                                <li>✔ Rutina personalizada</li>
                                <li>✔ Guía de ejercicios</li>
                                <li>✔ Sin soporte</li>
                                </ul>
                            </div>
                            <div className='flex-1' />

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-2xl font-bold text-gray-400 dark:text-white">
                                30 <span className="text-sm text-gray-400">€/mes</span>
                            </span>
                            </div>

                            <button
                            onClick={() => setSelectedPlan({ name: "Plan Autónomo", text: trainingPlansFull.autonomo })}
                            className="mt-2 border border-[var(--gold)] text-[var(--gold)] py-2 rounded-lg hover:bg-[var(--gold)] hover:text-white transition"
                            >
                            Ver más
                            </button>
                        </div>

                        {/* Training Pro */}
                        <div className="flex flex-col gap-4 border-2 border-[var(--gold)] rounded-2xl p-6">
                            <div className='flex flex-col gap-3'>
                                <p className="text-xs font-semibold uppercase text-[var(--gold)]">training pro</p>
                                <h3 className="text-xl font-bold text-gray-400 dark:text-white">Plan Training Pro</h3>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>✔ Rutina personalizada</li>
                                    <li>✔ Resolución de dudas</li>
                                    <li>✔ Seguimiento básico</li>
                                </ul>
                            </div>
                            <div className='flex-1' />
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-2xl font-bold text-gray-400 dark:text-white">
                                    35 <span className="text-sm text-gray-400">€/mes</span>
                                </span>
                                <span className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
                                    Popular
                                </span>
                            </div>

                            <button
                            onClick={() => setSelectedPlan({ name: "Plan Training Pro", text: trainingPlansFull.pro })}
                            className="mt-2 bg-[var(--gold)] text-white py-2 rounded-lg hover:opacity-90 transition"
                            >
                            Ver más
                            </button>
                        </div>

                        {/* Elite */}
                        <div className="flex flex-col gap-4 border border-gray-200 rounded-2xl p-6 hover:border-[var(--gold)] transition-colors duration-200">
                            <div className='flex flex-col gap-3'>
                                <p className="text-xs font-semibold uppercase text-[var(--gold)]">elite</p>
                                <h3 className="text-xl font-bold text-gray-400 dark:text-white">Plan Elite Performance</h3>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>✔ Corrección técnica</li>
                                    <li>✔ WhatsApp directo</li>
                                    <li>✔ Videollamadas</li>
                                </ul>
                            </div>
                            <div className='flex-1' />
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-2xl font-bold text-gray-400 dark:text-white">
                                    40 <span className="text-sm text-gray-400">€/mes</span>
                                </span>
                            </div>

                            <button
                            onClick={() => setSelectedPlan({ name: "Plan Elite Performance", text: trainingPlansFull.elite })}
                            className="mt-2 border border-[var(--gold)] text-[var(--gold)] py-2 rounded-lg hover:bg-[var(--gold)] hover:text-white transition"
                            >
                            Ver más
                            </button>
                        </div>
                    </div>

                    </section>

                {/* COMPARATIVA DETALLADA */}
                <div className="w-full flex justify-center py-12">
                    <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 px-4">
                        {/* ── COMPARATIVA NUTRICIÓN ── */}
                        <div className="mt-10">
                            <h2 className="text-2xl md:text-3xl font-black text-center text-[var(--gold)] uppercase tracking-tight mb-8">
                                Comparativa · Planes Nutricionales
                            </h2>

                            <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8 mt-4">

                                {/* Plan Básico */}
                                <div className="glassmorph rounded-2xl p-8 flex-1 flex flex-col transition-all duration-500 hover:scale-[1.01] hover:bg-white/50 border border-white/40">
                                <h2 className="text-2xl font-bold text-[var(--gold)] mb-1 text-center uppercase tracking-tighter">Plan Básico</h2>
                                <p className="text-[var(--gray-medium)] text-sm text-center mb-1 opacity-60">Autónomo y con experiencia</p>
                                <div className="h-[1px] bg-gray-300 w-full mb-6 mt-4"></div>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Plan nutricional personalizado</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Sistema de entrenamiento</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Guía de ejecución/ejercicios</span></li>
                                    <li className="flex items-center gap-3 opacity-30"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400/10 flex items-center justify-center text-[var(--gray-medium)] text-xs">✘</span><span className="text-sm text-[var(--gray-medium)]">Soporte y resolución de dudas</span></li>
                                    <li className="flex items-center gap-3 opacity-30"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400/10 flex items-center justify-center text-[var(--gray-medium)] text-xs">✘</span><span className="text-sm text-[var(--gray-medium)]">Contacto por WhatsApp</span></li>
                                    <li className="flex items-center gap-3 opacity-30"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400/10 flex items-center justify-center text-[var(--gray-medium)] text-xs">✘</span><span className="text-sm text-[var(--gray-medium)]">Videollamadas de control</span></li>
                                    <li className="flex items-center gap-3 opacity-30"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400/10 flex items-center justify-center text-[var(--gray-medium)] text-xs">✘</span><span className="text-sm text-[var(--gray-medium)]">Ajustes y seguimiento</span></li>
                                </ul>
                                <div className="mt-6 text-center">
                                    <p className="text-3xl font-black text-[var(--gold)]">50 €<span className="text-sm font-normal text-[var(--gray-medium)]">/mes</span></p>
                                </div>
                                <div className="mt-4">
                                    <a href="/#contacto" className="w-full border-2 border-[var(--gold)] text-[var(--gold)] py-3 rounded-xl font-bold text-center block hover:bg-[var(--gold)] hover:text-white transition-all duration-300">Empezar ahora</a>
                                </div>
                                </div>

                                {/* Plan Esencial — DESTACADO */}
                                <div className="glassmorph-choque rounded-2xl p-8 flex-1 flex flex-col transition-all duration-500 hover:scale-[1.03] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-[var(--gold)] text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg uppercase tracking-wider animate-pulse">
                                    Más Popular
                                </div>
                                <h2 className="text-3xl font-black text-[var(--gold)] mb-2 text-center uppercase tracking-tighter">Plan Esencial</h2>
                                <p className="text-[var(--gray-medium)] text-sm text-center mb-1 opacity-70">Busca guía y apoyo</p>
                                <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mb-6 mt-4 opacity-30"></div>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Plan nutricional personalizado</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Sistema de entrenamiento</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Guía de ejecución/ejercicios</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Soporte y resolución de dudas</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Contacto por WhatsApp</span></li>
                                    <li className="flex items-center gap-3 opacity-40"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-400/20 flex items-center justify-center text-[var(--gray-medium)]">✘</span><span className="text-base">Videollamadas de control</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Ajustes <span className="text-xs text-[var(--gold)] font-semibold">(Mensual)</span></span></li>
                                </ul>
                                <div className="mt-6 text-center">
                                    <p className="text-3xl font-black text-[var(--gold)]">60 €<span className="text-sm font-normal text-[var(--gray-medium)]">/mes</span></p>
                                </div>
                                <div className="mt-4">
                                    <a href="/#contacto">
                                    <button className="w-full bg-[var(--gold)] text-white py-4 px-8 rounded-xl font-bold text-lg uppercase tracking-wide hover:shadow-xl hover:shadow-[var(--gold)]/20 transition-all duration-300 transform active:scale-95 cursor-pointer">Reservar ahora</button>
                                    </a>
                                </div>
                                </div>

                                {/* Plan Premium */}
                                <div className="glassmorph-premium rounded-2xl p-8 flex-1 flex flex-col transition-all duration-500 hover:scale-[1.01] hover:bg-white/30">
                                <h2 className="text-2xl font-bold text-[var(--gold)] mb-1 text-center uppercase tracking-tighter">Plan Premium</h2>
                                <p className="text-[var(--negro)] text-sm text-center mb-1 opacity-60">Compromiso y éxito total</p>
                                <div className="h-[1px] bg-[var(--gold)]/20 w-full mb-6 mt-4"></div>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Plan nutricional personalizado</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Sistema de entrenamiento</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Guía de ejecución/ejercicios</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm font-semibold">Soporte prioritario de dudas</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm font-semibold">Contacto por WhatsApp</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm font-semibold">Videollamadas de control</span></li>
                                    <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm font-semibold">Ajustes en tiempo real</span></li>
                                </ul>
                                <div className="mt-6 text-center">
                                    <p className="text-3xl font-black text-[var(--gold)]">65 €<span className="text-sm font-normal text-[var(--gray-medium)]">/mes</span></p>
                                </div>
                                <div className="mt-4">
                                    <a href="/#contacto" className="w-full bg-white text-[var(--gold)] border border-[var(--gold)]/30 py-3 rounded-xl font-bold text-center block hover:bg-[var(--gold)] hover:text-white transition-all duration-300 shadow-sm">Hablar con TheDiloFitness</a>
                                </div>
                                </div>

                            </div>
                        </div>
                        {/* ── COMPARATIVA ENTRENAMIENTO ── */}
                        <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-black text-center text-[var(--gold)] uppercase tracking-tight mb-8">
                            Comparativa · Sistemas de Entrenamiento
                        </h2>

                        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8 mt-4">

                            {/* Plan Autónomo */}
                            <div className="glassmorph rounded-2xl p-8 flex-1 flex flex-col transition-all duration-500 hover:scale-[1.01] hover:bg-white/50 border border-white/40">
                            <h2 className="text-2xl font-bold text-[var(--gold)] mb-1 text-center uppercase tracking-tighter">Plan Autónomo</h2>
                            <p className="text-[var(--gray-medium)] text-sm text-center mb-6 opacity-60">Solo rutina, tú te encargas</p>
                            <div className="h-[1px] bg-gray-300 w-full mb-6"></div>
                            <ul className="space-y-4 flex-1">
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Rutina personalizada</span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Guía de ejercicios</span></li>
                                <li className="flex items-center gap-3 opacity-30"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400/10 flex items-center justify-center text-[var(--gray-medium)] text-xs">✘</span><span className="text-sm text-[var(--gray-medium)]">Resolución de dudas</span></li>
                                <li className="flex items-center gap-3 opacity-30"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400/10 flex items-center justify-center text-[var(--gray-medium)] text-xs">✘</span><span className="text-sm text-[var(--gray-medium)]">Ajustes del plan</span></li>
                                <li className="flex items-center gap-3 opacity-30"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400/10 flex items-center justify-center text-[var(--gray-medium)] text-xs">✘</span><span className="text-sm text-[var(--gray-medium)]">Corrección técnica por vídeo</span></li>
                                <li className="flex items-center gap-3 opacity-30"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-400/10 flex items-center justify-center text-[var(--gray-medium)] text-xs">✘</span><span className="text-sm text-[var(--gray-medium)]">Videollamada de control</span></li>
                            </ul>
                            <div className="mt-6 text-center">
                                <p className="text-3xl font-black text-[var(--gold)]">30 €<span className="text-sm font-normal text-[var(--gray-medium)]">/mes</span></p>
                            </div>
                            <div className="mt-4">
                                <a href="/#contacto" className="w-full border-2 border-[var(--gold)] text-[var(--gold)] py-3 rounded-xl font-bold text-center block hover:bg-[var(--gold)] hover:text-white transition-all duration-300">Empezar ahora</a>
                            </div>
                            </div>

                            {/* Training Pro — DESTACADO */}
                            <div className="glassmorph-choque rounded-2xl p-8 flex-1 flex flex-col transition-all duration-500 hover:scale-[1.03] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-[var(--gold)] text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-lg uppercase tracking-wider animate-pulse">
                                Más Popular
                            </div>
                            <h2 className="text-3xl font-black text-[var(--gold)] mb-2 text-center uppercase tracking-tighter">Training Pro</h2>
                            <p className="text-[var(--gray-medium)] text-sm text-center mb-6 opacity-70">Con acompañamiento profesional</p>
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mb-6 opacity-30"></div>
                            <ul className="space-y-4 flex-1">
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Rutina personalizada</span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Guía de ejercicios</span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Resolución de dudas <span className="text-xs text-[var(--gold)] font-semibold">(WhatsApp/Email)</span></span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold">✓</span><span className="text-base font-medium">Ajustes del plan <span className="text-xs text-[var(--gold)] font-semibold">(Mensual)</span></span></li>
                                <li className="flex items-center gap-3 opacity-40"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-400/20 flex items-center justify-center text-[var(--gray-medium)]">✘</span><span className="text-base">Corrección técnica por vídeo</span></li>
                                <li className="flex items-center gap-3 opacity-40"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-400/20 flex items-center justify-center text-[var(--gray-medium)]">✘</span><span className="text-base">Videollamada de control</span></li>
                            </ul>
                            <div className="mt-6 text-center">
                                <p className="text-3xl font-black text-[var(--gold)]">35 €<span className="text-sm font-normal text-[var(--gray-medium)]">/mes</span></p>
                            </div>
                            <div className="mt-4">
                                <a href="/#contacto">
                                <button className="w-full bg-[var(--gold)] text-white py-4 px-8 rounded-xl font-bold text-lg uppercase tracking-wide hover:shadow-xl hover:shadow-[var(--gold)]/20 transition-all duration-300 transform active:scale-95 cursor-pointer">Reservar ahora</button>
                                </a>
                            </div>
                            </div>

                            {/* Elite Performance */}
                            <div className="glassmorph-premium rounded-2xl p-8 flex-1 flex flex-col transition-all duration-500 hover:scale-[1.01] hover:bg-white/30">
                            <h2 className="text-2xl font-bold text-[var(--gold)] mb-1 text-center uppercase tracking-tighter">Elite Performance</h2>
                            <p className="text-[var(--negro)] text-sm text-center mb-6 opacity-60">Excelencia técnica y rendimiento</p>
                            <div className="h-[1px] bg-[var(--gold)]/20 w-full mb-6"></div>
                            <ul className="space-y-4 flex-1">
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Rutina personalizada</span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm">Guía de ejercicios</span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm font-semibold">Resolución de dudas <span className="text-xs text-[var(--gold)]">(Prioritario)</span></span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm font-semibold">Ajustes en tiempo real</span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm font-semibold">Corrección técnica por vídeo</span></li>
                                <li className="flex items-center gap-3 text-[var(--negro)]"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 text-xs font-bold">✓</span><span className="text-sm font-semibold">Videollamada de control</span></li>
                            </ul>
                            <div className="mt-6 text-center">
                                <p className="text-3xl font-black text-[var(--gold)]">40 €<span className="text-sm font-normal text-[var(--gray-medium)]">/mes</span></p>
                            </div>
                            <div className="mt-4">
                                <a href="/#contacto" className="w-full bg-white text-[var(--gold)] border border-[var(--gold)]/30 py-3 rounded-xl font-bold text-center block hover:bg-[var(--gold)] hover:text-white transition-all duration-300 shadow-sm">Hablar con TheDiloFitness</a>
                            </div>
                            </div>

                        </div>
                        </div>

                        

                    </div>
                </div>
            </article>
            <h2 id="sobre" className="text-4xl md:text-5xl text-center font-bold text-[var(--gold)] p-12">¿Quién soy?</h2>
            <div className="relative w-full min-h-[50vh] md:min-h-[70vh] flex flex-col-reverse lg:flex-row justify-center items-center py-10 rounded-lg overflow-hidden md:py-20 bg-[url('/assets/foto4.jpg')] bg-cover bg-center bg-fixed gap-8 lg:gap-10 px-4">
            <div className="absolute inset-0 bg-black/40"></div>
                {/* Contenedor del texto */}
                <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] p-6 md:p-8 bg-white/95 rounded-xl shadow-xl flex flex-col justify-center z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--lila)] mb-4 text-center lg:text-left">TheDiloFitness</h3>
                    <p className="text-base md:text-xl leading-relaxed text-justify">
                        Mi camino en el mundo del bienestar no empezó en un aula, sino a los 5 años, cuando mi diagnóstico de diabetes tipo 1 me obligó a entender la nutrición y el deporte como los pilares fundamentales de mi salud. Lo que empezó como una necesidad personal, se convirtió rápidamente en mi mayor pasión. Hoy con 23 años y una formación sólida como dietista y entrenadora personal titulada, mi misión es clara: Ayudarte a alcanzar tu mejor versión sin mitos ni restricciones extremas. Sé lo que significa tener que cuidar cada detalle, por eso mi enfoque es humano, realista y basado en la ciencia.
                    </p>
                </div>

                {/* Contenedor del logo */}
                <div className="w-[180px] md:w-[220px] lg:w-[250px] flex-shrink-0 bg-white/50 p-2 rounded-xl z-10">
                    <img src="/assets/logo-theDiloFitness.png" alt="logo TDF" className="w-full h-auto object-cover rounded-lg shadow-md" />
                </div>
            </div>
        {selectedPlan && (
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6 transition-opacity duration-1000 opacity-100"
                onClick={() => setSelectedPlan(null)}
            >
                <div 
                    className="bg-white max-w-lg w-full p-6 md:p-8 rounded-3xl shadow-2xl relative transform transition-all duration-1000 scale-100 opacity-100"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Botón cerrar X */}
                    <button
                        onClick={() => setSelectedPlan(null)}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors duration-200"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                
                    <h2 className="text-3xl font-bold mb-4 text-[var(--gold)] pr-8">{selectedPlan.name}</h2>
                    
                    <div className="h-1 w-12 bg-gradient-to-r from-[var(--gold)] to-transparent mb-6"></div>
                    
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                        {selectedPlan.text}
                    </p>

                    <button
                        onClick={() => setSelectedPlan(null)}
                        className="w-full bg-[var(--gold)] text-white py-3 rounded-xl font-bold uppercase tracking-wide hover:shadow-lg hover:shadow-[var(--gold)]/30 transition-all duration-300 active:scale-95"
                    >
                        Cerrar
                    </button>

                </div>
            </div>
        )}
        </div>      
    );
};