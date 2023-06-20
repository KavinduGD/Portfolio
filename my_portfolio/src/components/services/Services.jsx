import "./Services.css";
import { BsCheckLg } from "react-icons/bs";
function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="serrvice_list">
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Website Development: Creating websites using modern web
                technologies
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                UI Design: Designing visually appealing interfaces for better
                user experience
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Responsive Web Design: Building websites that adapt to different
                devices
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Testing and Debugging: Identifying and fixing front-end issues
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>Website Maintenance: Providing ongoing support and updates</p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Collaboration with Back-End Developers: Working with back-end
                teams
              </p>
            </li>
          </ul>
        </article>
        {/*  */}
        <article className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className="serrvice_list">
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                API Development: Creating interfaces to enable seamless
                communication between software systems.
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Database Design and Management: Designing and maintaining
                efficient data storage systems.
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Server-Side Programming: Writing code to handle requests and
                process data on the server
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                System Architecture: Designing the structure and components of
                web applications.
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Security and Authentication: Implementing secure access controls
                and user authentication mechanisms
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Integration with Third-Party Services: Connecting web
                applications with external services or APIs
              </p>
            </li>
          </ul>
        </article>
        {/*  */}
        <article className="service">
          <div className="service_head">
            <h3> Designer</h3>
          </div>
          <ul className="serrvice_list">
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Wireframing: Designing low-fidelity layouts to visualize the
                structure and content of a website or application
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Use Case Diagrams: Creating diagrams to depict interactions
                between system users and functions
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Activity Diagrams: Designing diagrams to represent the flow of
                activities or processes
              </p>
            </li>
            <li>
              <BsCheckLg className="service_list-icon" />
              <p>
                Entity-Relationship (ER) Diagrams: Creating visual
                representations of database relationships
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
