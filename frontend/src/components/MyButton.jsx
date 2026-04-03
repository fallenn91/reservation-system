export default function MyButton({ title, className = "", href }) {
  return (
    <a href={href}
      className={`items-center justify-center bg-[var(--lila)] text-[var(--beige)] border-2 border-[var(--lila)] px-6 lg:px-4 py-2 rounded-lg transition duration-300 hover:text-[var(--lila)] hover:bg-[var(--beige)] cursor-pointer text-base lg:w-auto ${className || ""}`}
    >
      {title}
    </a>
  );
}