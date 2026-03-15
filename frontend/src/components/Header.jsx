export default function Header() {
    return (
        <header className="flex justify-center items-center p-4 mb-5">
            <div className="w-full h-full mb-4 relative rounded-lg overflow-hidden">
                <img
                    src="/assets/food.jpg"
                    alt="food"
                    className="w-full h-full object-cover"
                />

                <div className="img-overlay absolute inset-0 bg-black"></div>

                <h2 className="absolute inset-0 flex flex-col items-center justify-center text-5xl font-bold text-[var(--beige)] px-4">
                    Sin excusas<br />
                    Sin Atajos<br /> 
                    Solo constancia, trabajo y <br />
                    resultados reales
                </h2>
            </div>
        </header>
        
    );
};
