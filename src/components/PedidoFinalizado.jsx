import { Link } from "react-router-dom";

export default function PedidoFinalizado() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-20 md:px-40 flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-4">
        pedido finalizado<span className="text-[#ffbb00]">.</span>
      </h2>

      <p className="text-gray-400 mb-8 max-w-xl">
        Sua compra foi registrada com sucesso. Em breve entraremos em contato para confirmar os detalhes do pedido.
      </p>

      <Link
        to="/"
        className="w-fit bg-[#ffbb00] hover:bg-yellow-500 text-black font-bold py-4 px-8 uppercase tracking-widest text-sm transition"
      >
        Voltar para a loja
      </Link>
    </section>
  );
}