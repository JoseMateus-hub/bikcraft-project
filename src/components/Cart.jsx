import { useCartStore } from '../store/cartStore'
import { X, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react'
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart, total } = useCartStore()
  const navigate = useNavigate();
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={closeCart}
      />

      {/* Painel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#111] z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <ShoppingCart size={22} className="text-[#ffbb00]" />
            <h2 className="text-white font-bold text-xl">Carrinho</h2>
            <span className="bg-[#ffbb00] text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          </div>
          <button onClick={closeCart} className="text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        {/* Itens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart size={48} className="mx-auto text-gray-700 mb-4" />
              <p className="text-gray-500">Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-[#1a1a1a] rounded-sm p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-sm flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <p className="text-[#ffbb00] font-bold mt-1">
                    R$ {(item.priceNum * item.quantity).toLocaleString('pt-BR')}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-800 hover:bg-gray-700 text-white w-7 h-7 flex items-center justify-center transition"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-white font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-800 hover:bg-gray-700 text-white w-7 h-7 flex items-center justify-center transition"
                    >
                      
                      <Plus size={14} />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-gray-500 hover:text-red-400 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-800 space-y-4">
            <div className="flex justify-between text-white">
              <span className="text-gray-400">Total</span>
              <span className="text-2xl font-bold text-[#ffbb00]">
                R$ {total().toLocaleString('pt-BR')}
              </span>
            </div>
            <button
  onClick={() => {
    closeCart();
    navigate("/login", {
  state: { from: "/checkout" },
});
  }}
  className="w-full bg-[#ffbb00] hover:bg-yellow-500 text-black font-bold py-4 uppercase tracking-widest text-sm transition"
>
  Finalizar Pedido
</button>


            <button
              onClick={clearCart}
              className="w-full text-gray-500 hover:text-red-400 text-sm transition"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  )
}