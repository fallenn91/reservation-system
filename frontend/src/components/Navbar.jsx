import react from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <button href="#" className='font-semibold text-lg'>TDF</button>

            <div className='flex space-x-6 gap-10 font-semibold text-lg'>
            <button href="#">SOBRE MÍ</button>
            <button href="#">MI CUENTA</button>
            <button href="#">CONTACTO</button>
            </div>
        </nav>
    );
}

export default Navbar;