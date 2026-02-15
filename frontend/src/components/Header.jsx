import react from 'react';
import Navbar from '../components/Navbar';

const Header = () => {
    return (
        <header className='w-full h-16 flex justify-center items-center bg-gray-200 text-lg font-bold'>
            <Navbar />
        </header>
    );
}

export default Header;