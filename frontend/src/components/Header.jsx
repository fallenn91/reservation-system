import react from 'react';
import Navbar from '../components/Navbar';

const Header = () => {
    return (
        <header className='w-full h-16 text-lg font-semibold p-10 mb-10'>
            <Navbar />
        </header>
    );
}

export default Header;