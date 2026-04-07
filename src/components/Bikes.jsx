const BIKES = [
  { id: 1, name: "Magic Gold", price: "R$ 2499", img: "[Imagem]" },
  { id: 2, name: "Nimbus Stark", price: "R$ 4999", img: "[Imagem]" },
  { id: 3, name: "Nebula Dash", price: "R$ 3299", img: "[Imagem]" },
];

export default function Bikes() {
  return (
    <section className="bg-white py-20 px-4 sm:px-20 md:px-40">
      <h2 className="text-4xl font-bold mb-10">nossas bicicletas<span className="text-[#ffbb00]">.</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BIKES.map((bike) => (
          <div key={bike.id} className="group cursor-pointer">
            <div className="bg-gray-100 h-60 rounded-sm mb-4 flex items-center justify-center group-hover:bg-[#ffbb00] transition-colors">
               <span className="text-gray-400 group-hover:text-black italic">Foto da {bike.name}</span>
            </div>
            <h3 className="text-2xl font-bold">{bike.name}</h3>
            <p className="text-gray-600">{bike.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}