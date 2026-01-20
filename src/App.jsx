
import Header from "./components/Header";
import Logo from "./components/Logo";
import Navigator from "./components/Navigator";
import UList from "./components/UList";
import Anchor from "./components/Anchor";

export default function App() {
  return (
    <>
    <Header>
      <Logo text="bikecraft"/>
      <Navigator>
        <UList>
          <li>
            <Anchor text="produtcs" href="/"/>
          </li>
          <li>
            <Anchor text="about" href="/about"/>
          </li>
          <li>
            <Anchor text="contact" href="/contact"/>
          </li>
        </UList>
      </Navigator>
    </Header>
    </>
)}
