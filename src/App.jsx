
import Header from "./components/Header"; 
import Hero from "./components/Hero";
import Bikes from "./components/Bikes";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Navigator from "./components/Navigator";
import UList from "./components/UList";
import Anchor from "./components/Anchor";

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header>
        <Logo text="bikcraft" />
        <Navigator>
          <UList>
            <li>
              <Anchor text="products" href="#bikes" />
            </li>
            <li>
              <Anchor text="about" href="#about" />
            </li>
            <li>
              <Anchor text="contact" href="#footer" />
            </li>
          </UList>
        </Navigator>
      </Header>

      <main className="flex-grow">
        <Hero />
        <div id="bikes">
          <Bikes />
        </div>
      </main>

      <div id="footer">
        <Footer />
      </div>
   </div>
  )};
