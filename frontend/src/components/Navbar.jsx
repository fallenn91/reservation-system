import React, { useState, useEffect } from 'react';
import MyButton from './MyButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0.8 * window.innerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-5 flex flex-wrap justify-between items-center transition-all duration-300 ${scrolled ? "bg-[var(--gray-bg)]" : "bg-[var(--gray-bg)]"}`}>
            <a href="/#home" className='font-semibold'><img src='/assets/logo-tf.png' className='w-16'></img></a>

            {/* Botón de Menú Hamburguesa (visible en móvil y tablet con lg:hidden) */}
            <button 
                onClick={toggleMenu}
                className="lg:hidden text-[var(--gold)] focus:outline-none transition-transform duration-300 z-50"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Enlaces de navegación */}
            <div className={`w-full absolute top-full left-0 lg:static lg:w-auto lg:flex lg:items-center ${isOpen ? 'flex flex-col shadow-md' : 'hidden'} lg:shadow-none transition-all duration-300 ease-in-out`}>
                <div className='flex flex-col lg:flex-row w-full bg-[var(--gray-bg)] lg:w-auto justify-center gap-4 lg:gap-10 font-semibold items-center py-4 lg:py-0'>
                    <a className="nav-btn text-base w-full lg:w-auto text-center hover:text-[var(--gold-light)] transition-colors" href="/#sobre" onClick={() => setIsOpen(false)}>SOBRE MÍ</a>
                    <a className="nav-btn text-base w-full lg:w-auto text-center hover:text-[var(--gold-light)] transition-colors" href="/#contacto" onClick={() => setIsOpen(false)}>CONTACTO</a>
                    <a href='/#planes' className='w-full lg:w-auto flex justify-center mt-2 lg:mt-0' onClick={() => setIsOpen(false)}>
                        <MyButton title="PLANES"></MyButton>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;