export default function Card({ title, description, Icon }) {
    return (
        <div className="card bg-gray-100 p-3 md:p-6 border border-gray-300 rounded-lg shadow-lg w-full max-w-sm mx-auto hover:border-[var(--lila)] hover:rotate-3 transition duration-300">
            {Icon && (
                <div className="flex justify-center mb-5">
                    <Icon className="text-[var(--lila)] text-3xl md:text-4xl lg:text-5xl"></Icon>
                </div>
            )}
            <h2 className="mb-3 text-2xl md:text-3xl font-semibold tracking-tight text-[var(--lila)] text-center leading-8">
                {title}
            </h2>
            <p className="text-gray-600 text-center text-base md:text-lg mb-6 p-3">
                {description}
            </p>
            
        </div>
    );
};