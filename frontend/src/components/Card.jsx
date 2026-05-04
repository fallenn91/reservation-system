import MyButton from './MyButton';

export default function Card({ title, description, Icon, buttonText, buttonHref }) {
    return (
        <div className="flex flex-col justify-between items-center w-full h-[450px] bg-gray-100 gap-3 p-6 border border-gray-300 rounded-lg shadow-lg max-w-sm mx-auto hover:border-[var(--gold)] hover:rotate-3 transition duration-300">
            {Icon && (
                <div className="flex justify-center items-center">
                    <Icon className="text-[var(--gold)] w-[60px] h-auto"></Icon>
                </div>
            )}
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--gold)] text-center">
                {title}
            </h2>
            <p className="text-[var(--gray-dark)] text-center text-base md:text-lg flex-1">
                {description}
            </p>
            <MyButton href={buttonHref} title={buttonText}></MyButton>
        </div>
    );
};