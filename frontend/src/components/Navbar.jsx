import react from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <button href="#" className='font-semibold text-lg'>TDF</button>

            <div className='flex space-x-6 gap-10 font-semibold text-lg'>
            <button href="#">HOME</button>
            <button href="#">BOOK</button>
            <button href="#">CONTACT</button>
            </div>
        </nav>
    );
}

export default Navbar;