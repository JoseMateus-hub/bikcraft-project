import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export default function Header({ children }) {
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);

  return (
    <header className="bg-black text-white px-4 py-4 flex flex-col gap-4 items-center sm:flex-row sm:justify-between sm:px-20 md:px-40">
      
      {/* Conteúdo original (logo + menu) */}
      <div className="flex items-center gap-6">
        {children}
      </div>

      {/* Carrinho */}
      <button onClick={openCart} className="relative">
        <ShoppingCart size={24} />

        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#ffbb00] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

    </header>
  );
}