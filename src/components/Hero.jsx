import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-20 md:px-40 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      
      {/* Lado do Texto: Vem da esquerda para a direita */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }} // Começa invisível e 100px à esquerda
        animate={{ opacity: 1, x: 0 }}    // Termina visível e no lugar certo
        transition={{ duration: 0.8, ease: "easeOut" }} // Leva 0.8s para completar
        className="flex-1 space-y-6"
      >
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
      </motion.div>
      
      {/* Lado da Imagem: Vem da direita para a esquerda */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }} // Começa invisível e 100px à direita
        animate={{ opacity: 1, x: 0 }}   // Termina visível e no lugar certo
        transition={{ duration: 0.8, delay: 0.2 }} // Começa 0.2s depois do texto
        className="flex-1"
      >
        <img 
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1000&auto=format&fit=crop" 
          alt="Bicicleta Elétrica" 
          className="w-full h-auto rounded-lg shadow-2xl object-cover"
        />
      </motion.div>
    </section>
  );
}