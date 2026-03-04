import react from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <a href="#" className='font-semibold text-lg nav-btn'>LOGO</a>
            <a href="#" className='font-semibold text-lg nav-btn'>TDF</a>

            <div className='flex gap-10 font-semibold'>
                <a className="nav-btn" href="#">SOBRE MÍ</a>
                <a className="nav-btn" href="#">MI CUENTA</a>
                <a className="nav-btn" href="#">CONTACTO</a>
                <a className='bg-[var(--color-secundary)] text-[var(--color-primary)] px-4 py-3 rounded-lg nav-plan' href="#">PLANES</a>
            </div>
        </nav>
    );
}

export default Navbar;