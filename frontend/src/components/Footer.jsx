import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
    return (
        <>
        <footer className="w-full flex flex-col items-center p-4 md:p-12 md:px-12 gap-8">
            {/* NUEVO WRAPPER */}
            <div className="w-full flex flex-col max-w-7xl mx-auto lg:flex-row gap-6">
                <div className="flex flex-col justify-start lg:flex-row lg:w-[70%] gap-3">
                    <div className="w-full flex flex-col justify-between items-center lg:items-start ">
                        <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#F2C94C]">NUTRICIÓN</h3>
                        <p className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer">
                            <HashLink smooth to="/#planesNutricionales">
                                Básico
                            </HashLink>
                        </p>
                        <p className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer">
                            <HashLink smooth to="/#planesNutricionales">
                                Esencial
                            </HashLink>
                        </p>
                        <p className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer">
                            <HashLink smooth to="/#planesNutricionales">
                                Premium
                            </HashLink>
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify-between items-center lg:items-start gap-3">
                        <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#F2C94C]">ENTRENAMIENTO</h3>
                        <p className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer">
                            <HashLink smooth to="/#planesEntrenamiento">
                                Autónomo
                            </HashLink>
                        </p>
                        <p className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer">
                            <HashLink smooth to="/#planesEntrenamiento">
                                Training Pro
                            </HashLink>
                        </p>
                        <p className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer">
                            <HashLink smooth to="/#planesEntrenamiento">
                                Elite Performance
                            </HashLink>
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify-between items-center lg:items-start gap-3">
                        <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#F2C94C]">INFORMACIÓN LEGAL</h3>
                        <h3 className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer transition duration-300">
                            <Link to="/politica-de-privacidad">Privacidad</Link>
                        </h3>
                        <h3 className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer transition duration-300">
                            <Link to="/politica-de-cookies">Cookies</Link>
                        </h3>
                        <h3 className="text-sm text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300 cursor-pointer transition duration-300">
                            <Link to="/aviso-legal">Aviso Legal</Link>
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center lg:w-[30%] gap-4">
                    <div className="w-full flex justify-center items-center rounded-lg overflow-hidden">
                        <img src="/assets/logo-theDiloFitness.png" alt="logo-completo" className="w-[200px] h-auto object-cover " />
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <IoLogoInstagram className="w-10 h-10 text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300" />
                        </a>

                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="w-8 h-8 text-[var(--gold)] hover:text-[var(--gold-light)] transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
            <div className="w-full flex flex-col items-center gap-2 py-4">

            <hr className="border-t border-[var(--gold)]/30 w-[90%] mx-auto" />
            <p className="text-xs md:text-sm text-[var(--white)] text-center opacity-70">&copy; TheDiloFitness {new Date().getFullYear()} | All rights reserved</p>
            </div>
        </>
    );
};