import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "food Delivering App  (JAVA)",
    github: "https://github.com/KavinduGD/Mad-project",
    demo: "https://www.facebook.com/100007350167429/videos/433744328909738/",
  },
  {
    id: 2,
    image: IMG5,
    title: "Ayurvedic Product Site  (MERN)",
    github: "https://github.com/KavinduGD/Seller-MERN",
    demo: "https://seller-mern-admin.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "DriveSafeLK  (MERN)",
    github: "https://github.com/CodeBrigade404/DriveSafeLK",
    demo: "https://drivesafelk.vercel.app/dashboard",
  },
  {
    id: 4,
    image: IMG4,
    title: "Video Streaming Site  (Spring Boot",
    github:
      "https://github.com/KavinduGD/Full-Stack-Development-with-Java-Spring-Boot-React-and-MongoDB-",
    demo: "https://vedio-stream.vercel.app/",
  },
  {
    id: 5,
    image: IMG2,
    title: "Netflix Clone  (React)",
    github: "https://github.com/KavinduGD/Netflix_Clone/tree/main",
    demo: "https://mynetflixclone-52906.web.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Workout Buddy   (MERN)",
    github: "https://github.com/KavinduGD/MERN-stack-with-JWT",
    demo: "https://workout-buddy-kavindu.vercel.app/signup",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dnoobzfxo/image/upload/v1702665254/Screenshot_2023-12-16_000315_cems80.png",
    title: "Admin Dashboard  (React/Tailwind)",
    github: "https://github.com/KavinduGD/Admin_Dash_Board",
    demo: "https://admin-dash-board-psi.vercel.app/",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dnoobzfxo/image/upload/v1702665450/Screenshot_2023-12-16_000653_zpu0yo.png",
    title: "Admin Dashboard  (React)",
    github: "https://github.com/KavinduGD/Admin_Dash_Board_2",
    demo: "https://admin-dash-board-2-seven.vercel.app/",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dnoobzfxo/image/upload/v1702666487/Screenshot_2023-12-16_002415_ocromb.png",
    title: "Retail Admin Mangement (React/Node)",
    github: "https://github.com/KavinduGD/retail_react",
    demo: "https://retail-react.vercel.app/",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dnoobzfxo/image/upload/v1702666611/Screenshot_2023-12-16_002602_lxf2ry.png",
    title: "Bus Ticket Admin (React/Node)",
    github: "https://github.com/KavinduGD/bus_ticket_admin",
    demo: "https://bus-ticket-admin-kavindu.vercel.app/",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dnoobzfxo/image/upload/v1702665435/Screenshot_2023-12-16_000233_hpmnur.png",
    title: "Student Travel (Admin) (React/Node)",
    github: "https://github.com/KavinduGD/KTS?tab=readme-ov-file",
    demo: "https://kts-k3nn.vercel.app/",
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dnoobzfxo/image/upload/v1702665256/Screenshot_2023-12-16_000240_nyrggr.png",
    title: "Student Travel (User) (React/Node)",
    github: "https://github.com/KavinduGD/KTS?tab=readme-ov-file",
    demo: "https://kts-nine.vercel.app/",
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <h5>Backend-servers are slow. It will take a moment to load</h5>
      <div className="container portfolio_container">
        {data.map((item) => (
          <article key={item.id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio_item-cta">
              <a href={item.github} className="btn" target="_blank">
                Github
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
