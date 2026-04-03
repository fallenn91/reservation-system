export default function FormContact() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center px-[50px]">
            {/*<img src="assets/food.jpg" className="absolute "/>*/}
            <div className="glassmorph w-full h[90vh] p-5">
                <div className="w-1/2">
                    <div className="w-full flex flex-col justify-center items-left p-3">
                        <div className="w-full bg-[var(--beige)] rounded-lg shadow-lg p-3">
                        <h1 id="contacto" className="text-4xl md:text-5xl text-center font-bold text-[var(--lila)] mt-10 p-3">¿TE GUSTARÍA MEJORAR TU SALUD? CONTÁCTAME</h1>
                            <form className="flex flex-col text-lg p-4 gap-5">
                                <input type="name" placeholder="Nombre" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                                <input type="email" placeholder="ejemplo@gmail" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                                <input type="phone" placeholder="+34 000 000 000" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                                <textarea type="mensaje" placeholder="Escribre un comentario" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
            </div>
        </div>
    );
};