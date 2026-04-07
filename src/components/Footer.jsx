export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-20 md:px-40 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        
        {/* Coluna 1: Logo e Slogan */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">
            Bikcraft<span className="text-[#ffbb00]">.</span>
          </h2>
          <p className="text-gray-400 max-w-xs">
            Bicicletas feitas a mão com tecnologia de ponta e design exclusivo.
          </p>
        </div>

        {/* Coluna 2: Contato */}
        <div className="flex-1">
          <h3 className="text-[#ffbb00] uppercase font-bold tracking-widest mb-4">Contato</h3>
          <ul className="text-gray-400 space-y-2">
            <li>+55 85 9999-9999</li>
            <li>contato@bikcraft.com</li>
            <li className="border-t border-gray-800 pt-2">Fortaleza - CE</li>
          </ul>
        </div>

        {/* Coluna 3: Informações */}
        <div className="flex-1">
          <h3 className="text-[#ffbb00] uppercase font-bold tracking-widest mb-4">Informações</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Bicicletas</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Seguros</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
          </ul>
        </div>

      </div>

      {/* Linha de Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-900 text-gray-500 text-sm">
        Bikcraft © {new Date().getFullYear()} - Alguns direitos reservados.
      </div>
    </footer>
  );
}