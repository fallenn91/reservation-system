export default function MyButton({ title, className = "", href }) {
  return (
    <a href={href}
      className={`items-center justify-center bg-[var(--gold)] text-[var(--white)] border-2 border-[var(--gold-dark)] px-7 lg:px-5 py-3 rounded-full uppercase tracking-[0.08em] font-semibold transition duration-300 hover:text-[var(--black)] hover:bg-[var(--gold-light)] cursor-pointer text-base lg:w-auto ${className || ""}`}
    >
      {title}
    </a>
  );
}