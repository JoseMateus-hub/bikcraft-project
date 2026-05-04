const BIKES = [
  {
    id: 1,
    name: "Magic Gold",
    price: "R$ 2.499",
    priceNum: 2499,
    img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80",
    desc: "Leveza e elegância para o ciclista urbano.",
  },
  {
    id: 2,
    name: "Nimbus Stark",
    price: "R$ 4.999",
    priceNum: 4999,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Alta performance para trilhas e aventuras.",
  },
  {
    id: 3,
    name: "Nebula Dash",
    price: "R$ 3.299",
    priceNum: 3299,
    img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&q=80",
    desc: "Design futurista com tecnologia elétrica.",
  },
];

export default function Bikes() {
  return (
    <section id="produtos" className="bg-white py-20 px-4 sm:px-20 md:px-40">
      <h2 className="text-4xl font-bold mb-2">
        nossas bicicletas<span className="text-[#ffbb00]">.</span>
      </h2>
      <p className="text-gray-500 mb-12">Escolha a bicicleta ideal para a sua jornada.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BIKES.map((bike) => (
          <div key={bike.id} className="group cursor-pointer flex flex-col">
            {/* Imagem */}
            <div className="overflow-hidden rounded-sm mb-4 h-60">
              <img
                src={bike.img}
                alt={bike.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1">
              <h3 className="text-2xl font-bold">{bike.name}</h3>
              <p className="text-gray-500 text-sm mt-1 mb-4">{bike.desc}</p>
              <p className="text-2xl font-bold text-[#ffbb00] mb-5">{bike.price}</p>

              <button
                onClick={() => alert(`${bike.name} adicionada ao carrinho!`)}
                className="mt-auto w-full bg-[#ffbb00] hover:bg-yellow-500 text-black font-bold py-3 px-6 uppercase tracking-widest text-sm transition-colors"
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}