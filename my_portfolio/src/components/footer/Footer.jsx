import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Kavindu Gihan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="">
          <FaFacebookF />
        </a>

        <a href="">
          <BsLinkedin />
        </a>
        <a href="">
          <BsTwitter />
        </a>
      </div>{" "}
      <div className="footer_copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
