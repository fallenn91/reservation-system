export default function FormContact() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl text-center font-bold text-[var(--lila)] mt-10 p-3">CONTACTO</h1>
            <div className="w-1/2 p-3">
                <form className="flex flex-col text-lg rounded-lg shadow-lg p-4 gap-5">
                    <input type="name" placeholder="Nombre" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                    <input type="email" placeholder="ejemplo@gmail" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                    <input type="phone" placeholder="+34 000 000 000" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                    <textarea type="mensaje" placeholder="Escribre un comentario" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></textarea>
                </form>
            </div>
        </div>
    );
};