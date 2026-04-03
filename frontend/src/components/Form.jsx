import { FaInstagram , FaWhatsapp, FaTiktok, FaRegEnvelope  } from "react-icons/fa";


export default function FormContact() {
    return (
        <div className="relative w-full h-[calc(100vh-84px)] flex flex-col justify-center items-center p-4 md:p-12">
            {/*<img src="assets/food.jpg" className="absolute "/>*/}
            <div className="relative glassmorph flex flex-col md:flex-row w-full h-full">
                <div className="relative w-full h-full md:w-1/2 flex flex-col justify-center items-center p-3">
                    <div className="relative w-full lg:w-[500px] bg-[var(--beige)] rounded-lg p-3">
                    <h1 id="contacto" className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-[var(--lila)] p-3">¿Te gustaría mejorar tu salud?</h1>
                        <form className="relative flex flex-col text-sm md:text-lg p-4 gap-5">
                            <input type="name" placeholder="Nombre" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                            <input type="email" placeholder="ejemplo@gmail" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                            <input type="phone" placeholder="+34 000 000 000" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                            <textarea type="mensaje" placeholder="Escribre un comentario" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></textarea>
                        </form>
                    </div>
                </div>
                <div className="relative w-full h-full md:w-1/2 flex flex-col md:flex-row justify-center items-center p-3">
                    <div className="relative w-full rounded-lg p-3">
                    <h1 id="contacto" className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-[var(--lila)] p-4">Contáctame</h1>
                        <div className="flex justify-center items-center w-full h-full gap-5">
                            <FaWhatsapp className="w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300"/>
                            <FaRegEnvelope className="w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300"/>
                            <FaInstagram  className="w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300"/>
                            <FaTiktok className="w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};