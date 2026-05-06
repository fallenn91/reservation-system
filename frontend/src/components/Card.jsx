import MyButton from './MyButton';

export default function Card({ title, description, Icon, buttonText, buttonHref }) {
    return (
        <div className="h-[350px] flex flex-col border border-gray-200 rounded-2xl p-6 bg-white text-black hover:border-[var(--gold)] transition-transform hover:translate-y-[-3px] transition-colors duration-200 w-full max-w-sm">
    
            {/* TOP */}
            <div className="flex flex-col gap-3">
                {Icon && (
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-[var(--gold)]" />
                    </div>
                )}

                <h2 className="text-lg font-semibold text-black">
                    {title}
                </h2>

                <p className="text-base text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* MIDDLE (SEPARADOR FLEXIBLE) */}
            <div className="flex-1" />

            {/* BOTTOM */}
            <div className="flex flex-col gap-3">
                <div className="h-px bg-gray-100 w-full" />

                <a
                    href={buttonHref}
                    className="inline-flex items-center gap-1.5 text-base font-semibold text-[var(--gold)] hover:gap-3 transition-all duration-200 group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                        →
                    </span>
                    {buttonText}
                </a>
            </div>

        </div>
    );
};


