import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookiesAccepted = Cookies.get('cookiesAccepted');
        if (!cookiesAccepted) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set('cookiesAccepted', 'true', { expires: 365 });
        setShowBanner(false);
    };
    if (!showBanner) return null;

    return (
        <div className='fixed bottom-0 w-[350px] bg-[var(--rosa)] rounded-lg shadow-lg z-99 m-4 md:mx-12'>
            <div className='flex flex-col w-full h-full p-4 gap-3'>
                <p className='text-base text-left text-[var(--negro)]'>Este sitio web utiliza cookies para mejorar tu experiencia. Si sigues navegando, aceptas su uso. <a href="/politica-de-cookies" target="_blank" rel="noopener noreferrer">Más información</a>.</p>
                <button onClick={acceptCookies} className='w-[100px] bg-[var(--lila)] text-[var(--beige)] text-base rounded-lg cursor-pointer px-2 py-3 hover:bg-[#b037b0] transition-all duration-300'>Aceptar</button>
            </div>
        </div>
    );
};