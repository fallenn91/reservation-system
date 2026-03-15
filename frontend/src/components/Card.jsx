export default function Card({ title, description }) {
    return (
        <div className="card bg-gray-100 block p-6 border border-gray-300 rounded-lg shadow-lg w-full max-w-sm mx-auto">
            <h2 className="mb-3 text-2xl md:text-3xl font-semibold tracking-tight text-[var(--lila)] text-center leading-8">
                {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 p-3">
                {description}
            </p>
        </div>
    );
};