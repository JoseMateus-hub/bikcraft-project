
import Header from "./components/Header"; 
import Hero from "./components/Hero";
import Bikes from "./components/Bikes";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Navigator from "./components/Navigator";
import UList from "./components/UList";
import WhatsApp from "./components/WhatsApp";
import About from "./components/About";
import Anchor from "./components/Anchor";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header>
        <Logo text="bikcraft" />
        <Navigator>
          <UList>
            <li>
              <Anchor text="Produtos" href="#bikes" />
            </li>
            <li>
              <Anchor text="Sobre" href="#about" />
            </li>
            <li>
              <Anchor text="Contato" href="#footer" />
            </li>
          </UList>
        </Navigator>
      </Header>

      <main className="flex-grow">
        <Hero />
        <div id="bikes">
          <Bikes />
        </div>
        <About />
        <Contact />
      </main>

      <div id="footer">
        <Footer />
        <WhatsApp />
      </div>
   </div>
  )};
