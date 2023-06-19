import "./About.css";
import ME from "../../assets/me-about.jpg";
import ME1 from "../../assets/cartoon.avif";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function about() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME1} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years of undergraduate studies</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Main Skill</h5>
              <small>Web Development</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>
            I'm an aspiring software engineer currently undertaking my
            undergraduate studies, specializing in software engineering. I
            possess a solid understanding of JavaScript and Java complemented by
            my proficiency in popular frameworks such as React, Node.js,
            Express.js, and Spring Boot. Furthermore, I have hands-on experience
            with Docker, Kubernetes, and Heroku, which enables me to deploy and
            manage applications effectively. My true enthusiasm lies in working
            closely with clients, fostering collaboration, and developing
            innovative, scalable, and intuitive solutions that address practical
            challenges.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
