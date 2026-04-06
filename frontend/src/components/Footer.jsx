import { FaInstagram, FaTiktok  } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col p-4 md:p-12 md:px-12 gap-5">
            {/* NUEVO WRAPPER */}
            <div className="w-full flex flex-col lg:flex-row gap-3">
                <div className="flex flex-col justify-start lg:flex-row lg:w-[60%] gap-3">
                    <div className="w-full flex flex-col justify-between items-center lg:items-start gap-2">
                        <h3 className="text-base md:text-lg font-bold text-[var(--lila)]">PLANES</h3>
                        <h3 className="text-base font-semibold text-[var(--lila)] hover:text-[var(--negro)]">
                            <a href="/#essential">Plan Essential</a>
                        </h3>
                        <h3 className="text-base font-semibold text-[var(--lila)] hover:text-[var(--negro)]">
                            <a href="/#premium">Plan Premium</a>
                        </h3>
                        <h3 className="text-base font-semibold text-[var(--lila)] hover:text-[var(--negro)]">
                            <a href="/#choque">Plan Choque</a>
                        </h3>
                    </div>
                    <div className="w-full flex flex-col justify-between items-center lg:items-start gap-2">
                        <h3 className="text-base md:text-lg font-bold text-[var(--lila)]">INFORMACIÓN LEGAL</h3>
                        <h3 className="text-base font-semibold text-[var(--lila)] hover:text-[var(--negro)] transition duration-300">
                            <Link to="/politica-de-privacidad">Privacidad</Link>
                        </h3>
                        <h3 className="text-base font-semibold text-[var(--lila)] hover:text-[var(--negro)] transition duration-300">
                            <Link to="/politica-de-cookies">Cookies</Link>
                        </h3>
                        <h3 className="text-base font-semibold text-[var(--lila)] hover:text-[var(--negro)] transition duration-300">
                            <Link to="/aviso-legal">Aviso Legal</Link>
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center lg:w-[40%] gap-4">
                    <div className="w-full flex justify-center items-center rounded-lg overflow-hidden">
                        <img src="/assets/logo-completo-2.png" alt="logo-completo" className="w-[190px] h-auto object-cover" />
                    </div>
                    <div className="flex flex-row gap-3">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="plan-icon w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="plan-icon w-[80px] h-auto text-[var(--lila)] hover:text-[var(--negro)] transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center border-t-[1px] border-[var(--lila)] w-[90%] mx-auto md:px-12">
                    <p className="text-base p-4">&copy; The DiloFitness {new Date().getFullYear()} | Powered By Feng</p>
            </div>
        </footer>
    );
};