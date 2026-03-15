import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar w-full bg-[var(--beige)] px-4 md:px-8 py-5 flex flex-wrap justify-between items-center relative z-50'>
            <a href="#" className='font-semibold text-xl md:text-lg nav-btn'>LOGO</a>

            {/* Botón de Menú Hamburguesa (visible en móvil y tablet con lg:hidden) */}
            <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 text-[var(--lila)] focus:outline-none transition-transform duration-300 z-50"
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
            <div className={`w-full absolute top-full left-0 bg-[var(--beige)] lg:static lg:w-auto lg:flex lg:items-center ${isOpen ? 'flex flex-col shadow-md' : 'hidden'} lg:shadow-none transition-all duration-300 ease-in-out`}>
                <div className='flex flex-col lg:flex-row w-full lg:w-auto justify-center gap-4 lg:gap-10 font-semibold items-center py-4 lg:py-0'>
                    <a className="nav-btn text-base w-full lg:w-auto text-center hover:text-[var(--lila)] transition-colors" href="#sobre" onClick={() => setIsOpen(false)}>SOBRE MÍ</a>
                    <a className="nav-btn text-base w-full lg:w-auto text-center hover:text-[var(--lila)] transition-colors" href="/cuenta" onClick={() => setIsOpen(false)}>MI CUENTA</a>
                    <a className="nav-btn text-base w-full lg:w-auto text-center hover:text-[var(--lila)] transition-colors" href="#contact" onClick={() => setIsOpen(false)}>CONTACTO</a>
                    <a href='#planes' className='w-full lg:w-auto flex justify-center mt-2 lg:mt-0' onClick={() => setIsOpen(false)}>
                        <button className="nav-plan inline-flex items-center justify-center bg-[var(--lila)] text-[var(--beige)] px-6 lg:px-4 py-2 rounded-lg transition duration-300 hover:text-[var(--lila)] hover:bg-[var(--beige)] cursor-pointer text-base w-[90%] lg:w-auto">PLANES</button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;