export default function Hero() {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-20 md:px-40 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Bicicletas feitas a mão<span className="text-[#ffbb00]">.</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-md">
          Aproveite cada momento da sua jornada com estilo e conforto. 
          Nossas bicicletas elétricas combinam tecnologia e design.
        </p>
        <button className="bg-[#ffbb00] text-black px-8 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-white transition-colors">
          Escolha a sua
        </button>
      </div>
      
      <div className="flex-1">
        {/* Aqui você pode colocar uma imagem de bike depois */}
        <div className="w-full h-80 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 italic">
          [Imagem da Bicicleta Elétrica]
        </div>
      </div>
    </section>
  );
}