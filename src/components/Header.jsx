
export default function Header({Children}) {
  return (
    <header className="bg-black text-amber-50 px-40 flex justify-between items-center">
      {Children}
      </header>
  );
}
