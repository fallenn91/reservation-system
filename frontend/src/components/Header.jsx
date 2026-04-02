export default function Header() {
    return (
        <header id="home" className="flex justify-center items-center p-4 mb-5 max-w-7xl mx-auto h-[60vh] md:h-[80vh]">
            <div className="w-full h-full mb-4 relative rounded-lg overflow-hidden">
                <img
                    src="/assets/food.jpg"
                    alt="food"
                    className="w-full h-full object-cover"
                />

                <div className="img-overlay absolute inset-0 bg-black/40"></div>

                <h2 className="absolute inset-0 flex flex-col items-center text-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--beige)] px-4">
                    Sin excusas<br />
                    Sin Atajos<br /> 
                    Solo constancia, trabajo y <br />
                    resultados reales
                </h2>
            </div>
        </header>
        
    );
};
