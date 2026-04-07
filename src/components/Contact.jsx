import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-4 sm:px-20 md:px-40">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-grid-cols-2 gap-16"
      >
        {/* Coluna 1: Informações Legais */}
        <div>
          <h2 className="text-4xl font-bold mb-6 uppercase">
            Contato<span className="text-[#ffbb00]">.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Tem alguma dúvida ou quer uma bicicleta personalizada? 
            Nossa equipe de especialistas está pronta para te atender.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <span className="text-[#ffbb00]">📍</span> Fortaleza, CE
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#ffbb00]">✉️</span> contato@bikcraft.com
            </p>
          </div>
        </div>

        {/* Coluna 2: O Formulário */}
        <form className="bg-gray-900 p-8 rounded-lg space-y-4 border border-gray-800">
          <div className="flex flex-col gap-2">
            <label className="font-bold uppercase text-xs tracking-widest text-gray-400">Nome</label>
            <input type="text" placeholder="Seu nome" className="bg-black border border-gray-800 p-3 rounded focus:border-[#ffbb00] outline-none transition-colors" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-bold uppercase text-xs tracking-widest text-gray-400">E-mail</label>
            <input type="email" placeholder="contato@email.com" className="bg-black border border-gray-800 p-3 rounded focus:border-[#ffbb00] outline-none transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold uppercase text-xs tracking-widest text-gray-400">Mensagem</label>
            <textarea rows="4" placeholder="Como podemos ajudar?" className="bg-black border border-gray-800 p-3 rounded focus:border-[#ffbb00] outline-none transition-colors"></textarea>
          </div>

          <button type="submit" className="w-full bg-[#ffbb00] text-black font-bold py-4 rounded uppercase hover:bg-white transition-colors">
            Enviar Mensagem
          </button>
        </form>
      </motion.div>
    </section>
  );
}