import { FaInstagram , FaWhatsapp, FaTiktok, FaRegEnvelope  } from "react-icons/fa";


export default function FormContact() {
    return (
        <div className="relative w-full h-full lg:h-[calc(100vh-84px)] flex flex-col justify-center items-center p-4 md:p-12">
            {/*<img src="assets/food.jpg" className="absolute "/>*/}
            <div className="relative glassmorph flex flex-col lg:flex-row w-full h-full">
                <div className="relative w-full h-full lg:w-[60%] flex flex-col justify-center items-center p-[20px] md:p-[40px] lg:p-[50px]">
                    <div className="relative w-full bg-[var(--beige)] rounded-lg p-3">
                    <h1 id="contacto" className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-[var(--lila)] p-3">¿Te gustaría mejorar tu salud?</h1>
                        <form className="relative w-full flex flex-col text-sm md:text-lg p-4 gap-5">
                            <input type="name" placeholder="Nombre" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                            <input type="email" placeholder="ejemplo@gmail" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                            <input type="phone" placeholder="+34 000 000 000" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></input>
                            <textarea type="mensaje" placeholder="Escribre un comentario" className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg"></textarea>
                        </form>
                    </div>
                </div>
                <div className="relative w-full h-full lg:w-[40%] flex flex-col lg:flex-row justify-center items-center p-3">
                    <div className="relative w-full rounded-lg p-3">
                    <h1 id="contacto" className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-[var(--lila)] p-4">Contáctame</h1>
                        <div className="flex justify-center items-center w-full h-full gap-5">
                            <FaWhatsapp className="w-[50px] md:w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300"/>
                            <FaRegEnvelope className="w-[50px] md:w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300" />
                            {/*FOOTER
                            <FaInstagram  className="w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300"/>
                            <FaTiktok className="w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300"/>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};