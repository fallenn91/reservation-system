import react from 'react';

const Navbar = () => {
    return (
        <nav className='navbar w-full bg-[var(--beige)] px-4 py-5 flex justify-between items-center'>
            <a href="#" className='font-semibold text-lg nav-btn'>LOGO</a>

            <div className='flex gap-10 font-semibold'>
                <a className="nav-btn" href="#sobre">SOBRE MÍ</a>
                <a className="nav-btn" href="/cuenta">MI CUENTA</a>
                <a className="nav-btn" href="#contact">CONTACTO</a>
                <a href='#planes'>
                <button className="nav-plan inline-flex items-center justify-center bg-[var(--lila)] text-[var(--beige)] px-2 py-1 rounded-lg transition duration-300 hover:text-[var(--lila)] hover:bg-[var(--beige)] cursor-pointer">PLANES</button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;