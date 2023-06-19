import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
function Socials() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/kavidu-gihan-28519b26b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/KavinduGD" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/kavindu.gihan.9883" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}

export default Socials;
