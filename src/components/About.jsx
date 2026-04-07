import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      id="about" 
      // Animação de entrada ao rolar a página
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} // Anima apenas a primeira vez que o usuário vê
      transition={{ duration: 0.8 }}
      className="bg-white text-black py-20 px-4 sm:px-20 md:px-40 flex flex-col md:flex-row items-center gap-16 overflow-hidden"
    >
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Bicicletas de alta tecnologia<span className="text-[#ffbb00]">.</span>
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          A Bikcraft é uma empresa focada em transformar a jornada diária das pessoas. Nossas bicicletas são montadas manualmente em Fortaleza, unindo o melhor da engenharia elétrica com um design retrô e elegante.
        </p>
      </div>

      <div className="flex-1">
        <img 
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop" 
          alt="Oficina Bikcraft" 
          className="rounded-lg shadow-xl"
        />
      </div>
    </motion.section>
  );
}