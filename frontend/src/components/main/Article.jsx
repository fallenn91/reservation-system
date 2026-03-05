export default function Article() {
    return (
        <article className="w-full h-screen p-4">
            <div className="w-full h-1/2 mt-4 flex justify-center gap-10 flex-wrap">
                     <div className="w-md h-full shadow-lg flex flex-col items-center">
                    <h2 className="text-3xl text-[var(--color-secundary)]">Entrenamiento</h2>
                    <p className="w-md text-center text-lg p-5">Entrenamiento personalizado, adaptado a tus necesidades y objetivos específicos. Nuestro equipo de expertos diseñará un programa de entrenamiento que se ajuste a tu nivel de condición física, preferencias y metas, asegurando que cada sesión sea efectiva y motivadora
                    </p>
                    </div>
                     <div className="w-md h-full shadow-lg flex flex-col items-center">
                    <h2 className="text-3xl text-[var(--color-secundary)]">Nutrición</h2>
                    <p className="w-md text-center text-lg p-5">Planes enfocados en crear hábitos sostenibles. No se trata de dietas extremas, sino de aprender a alimentarte para potenciar tu rendimiento y transformar tu cuerpo
                    </p>
                    </div>
                     <div className="w-md h-full shadow-lg flex flex-col items-center">
                    <h2 className="text-3xl text-[var(--color-secundary)]">Mentalidad</h2>
                    <p className="w-md text-center text-lg p-5">El cambio real empieza en la mente. Trabajamos la constancia, la perseverancia y la disciplina para que mantengas el compromiso incluso cuando la motivación baja
                    </p>
                    </div>
               </div>
        </article>
    );
};