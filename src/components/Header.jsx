
export default function Header({ children }) {
  return (
    <header className="bg-black text-white px-4 py-4 flex flex-col gap-4 items-center sm:flex-row sm:justify-between sm:px-20 md:px-40">
      {children}
    </header>
  );
}
