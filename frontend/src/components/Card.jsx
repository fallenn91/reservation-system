export default function Card({ title, description, Icon }) {
    return (
        <div className="flex flex-col justify-start items-center w-full h-[400px] bg-gray-100 gap-3 p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm mx-auto hover:border-[var(--lila)] hover:rotate-3 transition duration-300">
            {Icon && (
                <div className="flex justify-center items-center">
                    <Icon className="text-[var(--lila)] w-[60px] h-auto"></Icon>
                </div>
            )}
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--lila)] text-center">
                {title}
            </h2>
            <p className="text-gray-600 text-center text-base md:text-lg">
                {description}
            </p>
        </div>
    );
};