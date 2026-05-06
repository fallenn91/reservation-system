import { useState, useEffect } from 'react';

export default function GoUpArrow() {
    const [show, setShow] = useState(true); // Temporarily true to test visibility

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 0.8 * window.innerHeight;
            console.log('ScrollY:', window.scrollY, 'Threshold:', threshold);
            if (window.scrollY > threshold) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Call once to check initial state
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-[var(--gold)] text-black p-2 rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-[var(--gold-light)] ${show ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'}`}
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
        </button>
    );
}