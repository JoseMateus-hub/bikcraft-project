export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-20 md:px-40 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h3 className="text-2xl font-bold uppercase mb-6">bikcraft<span className="text-[#ffbb00]">.</span></h3>
          <p className="text-gray-400">Desenvolvido por José Mateus.</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="uppercase font-bold text-[#ffbb00]">Contato</h4>
          <p className="text-gray-400">Fortaleza - CE</p>
          <a href="mailto:seu-email@email.com" className="hover:text-white transition-colors">seu-email@email.com</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="uppercase font-bold text-[#ffbb00]">Redes</h4>
          <a href="https://github.com/JoseMateus-hub" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
      <p className="mt-16 text-sm text-gray-600">© 2026 Bikcraft. Alguns direitos reservados.</p>
    </footer>
  );
}