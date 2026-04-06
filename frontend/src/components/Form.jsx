import { FaWhatsapp, FaRegEnvelope  } from "react-icons/fa";
import React, { useState } from 'react';
import axios from "axios";

export default function FormContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const [status, setStatus] = useState(''); // 'success', 'error', 'loading'
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!privacyAccepted) {
            setStatus('error');
            setStatusMessage('Debes aceptar la política de privacidad.');
            return;
        }
        setStatus('loading');
        setStatusMessage('Enviando...');

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contacto`, {
                name,
                email,
                phone,
                msg
            });
            setStatus('success');
            setStatusMessage('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.');
            // Clear form
            setName('');
            setEmail('');
            setPhone('');
            setMsg('');
            setPrivacyAccepted(false);
        } catch (error) {
            setStatus('error');
            setStatusMessage('Ha habido un error al enviar el formulario. Por favor, inténtalo de nuevo.');
            console.error("Ha habido un error al enviar el formulario.", error);
        }
    };
    return (
        <div className="relative w-full h-full flex flex-col justify-center items-center p-4 md:p-12">
            {/*<img src="assets/food.jpg" className="absolute "/>*/}
            <div className="glassmorphForm relative flex flex-col lg:flex-row w-full h-full">
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
                            <label className="flex items-center gap-2 text-sm text-[var(--lila)] text-left">
                                <input
                                    type="checkbox"
                                    checked={privacyAccepted}
                                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                    className="w-5 h-5 cursor-pointer accent-[var(--lila)] flex-shrink-0"
                                    required
                                />
                                <span>He leído y acepto la <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-[var(--negro)] transition duration-300">política de privacidad</a></span>
                            </label>
                            <button disabled={status === 'loading'} type="submit" value="send" className={`${status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} flex justify-center items-center w-[100px] bg-[var(--lila)] text-lg text-[var(--beige)] px-6 lg:px-4 py-2 rounded-lg border-2 border-[var(--lila)] hover:text-[var(--lila)] hover:bg-[var(--beige)] transition duration-300`}>
                                {status === 'loading' ? 'Enviando...' : 'Enviar'}
                            </button>
                            {statusMessage && (
                                <div className={`text-center p-2 rounded-lg ${status === 'success' ? 'bg-green-100 text-green-700' : status === 'error' ? 'bg-red-100 text-red-700' : 'text-[var(--lila)]'}`}>
                                    {statusMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                <div className="relative w-full lg:w-[40%] flex flex-col lg:flex-row justify-center items-center p-3">
                    <div className="relative w-full rounded-lg p-3">
                    <h1 id="contacto" className="text-2xl md:text-4xl lg:text-5xl text-center font-bold text-[var(--lila)] p-4">Contáctame</h1>
                        <div className="flex justify-center items-center w-full h-full gap-5">
                            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="w-[50px] md:w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300"/>
                            </a>
                            <a href="mailto:thedilofitness@gmail.com">
                                <FaRegEnvelope className="w-[50px] md:w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
