import { Navigate, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function Checkout() {
  const navigate = useNavigate();
  const cliente = JSON.parse(localStorage.getItem("cliente-logado-bikcraft"));
  const { items, total, clearCart } = useCartStore();

  if (!cliente) {
    return <Navigate to="/login" replace />;
  }

  function finalizarCompra() {
    const pedido = {
      id: Date.now(),
      cliente,
      itens: items,
      total: total(),
      criadoEm: new Date().toLocaleString("pt-BR"),
      status: "Pedido recebido",
    };

    const pedidos = JSON.parse(localStorage.getItem("pedidos-bikcraft")) || [];

    localStorage.setItem(
      "pedidos-bikcraft",
      JSON.stringify([...pedidos, pedido])
    );

    clearCart();
    navigate("/pedido-finalizado");
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-20 md:px-40">
      <h2 className="text-4xl font-bold mb-4">
        finalizar pedido<span className="text-[#ffbb00]">.</span>
      </h2>

      <p className="text-gray-400 mb-8">
        Olá, {cliente.nome}. Confirme seus dados e finalize sua compra.
      </p>

      <div className="bg-[#111] border border-gray-800 rounded p-6 max-w-xl space-y-3 mb-8">
        <p><strong>Nome:</strong> {cliente.nome}</p>
        <p><strong>E-mail:</strong> {cliente.email}</p>
        <p><strong>Telefone:</strong> {cliente.telefone}</p>
      </div>

      <div className="bg-[#111] border border-gray-800 rounded p-6 max-w-xl mb-8">
        <h3 className="text-xl font-bold mb-4">Resumo da compra</h3>

        {items.length === 0 ? (
          <p className="text-gray-400">Seu carrinho está vazio.</p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-300">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>
                  R$ {(item.priceNum * item.quantity).toLocaleString("pt-BR")}
                </span>
              </div>
            ))}

            <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-white">
              <span>Total</span>
              <span className="text-[#ffbb00]">
                R$ {total().toLocaleString("pt-BR")}
              </span>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={finalizarCompra}
        disabled={items.length === 0}
        className="bg-[#ffbb00] hover:bg-yellow-500 text-black font-bold py-4 px-8 uppercase tracking-widest text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Finalizar compra
      </button>
    </section>
  );
}