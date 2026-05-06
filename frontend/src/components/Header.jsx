import MyButton from './MyButton';
export default function Header() {
    return (
        <header id="home" className="w-full h-screen bg-[var(--gray-bg)] flex justify-center items-center px-4 my-9 md:px-12 ">
            <div className="relative w-full h-[85vh] rounded-lg overflow-hidden flex flex-col justify-center items-center">
                <img
                    src="/assets/food.jpg"
                    alt="food"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="img-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30"></div>

                <h2 className="relative text-center text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--white)] tracking-tight drop-shadow-[0_25px_25px_rgba(0,0,0,0.55)]">
                    Sin excusas<br />
                    Sin Atajos<br /> 
                    Solo constancia, trabajo y <br />
                    resultados reales
                </h2>
                <MyButton href="#contacto" title="EMPIEZA AHORA" className="relative mt-5 !text-sm md:!text-lg lg:!text-xl"></MyButton>
            </div>
        </header>
        
    );
};
