import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/me.png";
import Socials from "./Socials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Kavindu Gihan</h1>
        <h5 className="text-light">Fullstack Dveloper</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
