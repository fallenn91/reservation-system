export default function MyButton({ title }) {
    return (
        <button className="nav-plan inline-flex items-center justify-center bg-[var(--lila)] text-[var(--beige)] border-2 border-[var(--lila)] px-6 lg:px-4 py-2 rounded-lg transition duration-300 hover:text-[var(--lila)] hover:bg-[var(--beige)] cursor-pointer text-base w-[90%] lg:w-auto">{ title }</button>
    );
};