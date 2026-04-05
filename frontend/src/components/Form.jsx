import { FaWhatsapp, FaRegEnvelope  } from "react-icons/fa";
import React, { useState } from 'react';
import axios from "axios";

export default function FormContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://system-delta-lyart.vercel.app/api/contacto', {
                name,
                email,
                phone,
                msg
            });
            console.log("Formulario enviado correctamente.", response.data);
        } catch (error) {
            console.error("Ha habido un error al enviar el formulario.", error);
        }
    };
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-4 md:p-12">
            {/*<img src="assets/food.jpg" className="absolute "/>*/}
            <div className="relative glassmorph flex flex-col lg:flex-row w-full h-full">
                <div className="relative w-full lg:w-[60%] flex flex-col justify-center items-center p-[20px] md:p-[40px] lg:p-[50px]">
                    <div className="relative w-full bg-[var(--beige)] rounded-lg p-3">
                    <h1 id="contacto" className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-[var(--lila)] p-3">¿Te gustaría mejorar tu salud?</h1>
                        <form onSubmit={handleSubmit} method="POST" className="relative w-full flex flex-col text-sm md:text-lg p-4 gap-5">
                            <input
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nombre"
                                className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg">
                            </input>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ejemplo@gmail"
                                className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg">
                            </input>
                            <input
                                type="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+34 000 000 000"
                                className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg">
                            </input>
                            <textarea
                                type="mensaje"
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                                placeholder="Escribre un comentario"
                                className="w-full border-2 border-[var(--rosa)] p-2 rounded-lg">
                            </textarea>
                            <button type="submit" value="send" className="flex justify-center items-center w-[100px] bg-[var(--lila)] text-lg text-[var(--beige)] px-6 lg:px-4 py-2 rounded-lg border-2 border-[var(--lila)] hover:text-[var(--lila)] hover:bg-[var(--beige)] cursor-pointer transition duration-300">Enviar</button>
                        </form>
                    </div>
                </div>
                <div className="relative w-full lg:w-[40%] flex flex-col lg:flex-row justify-center items-center p-3">
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
