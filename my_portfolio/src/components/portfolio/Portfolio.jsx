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
    title: "food Delivering App",
    github: "https://github.com/KavinduGD/Mad-project",
    demo: "https://www.facebook.com/100007350167429/videos/433744328909738/",
  },
  {
    id: 2,
    image: IMG5,
    title: "Ayurvedic Product Site",
    github: "https://github.com/KavinduGD/Seller-MERN",
    demo: "https://seller-mern-admin.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "DriveSafeLK",
    github: "https://github.com/CodeBrigade404/DriveSafeLK",
    demo: "https://github.com/CodeBrigade404/DriveSafeLK",
  },
  {
    id: 4,
    image: IMG4,
    title: "Video Streaming Site",
    github:
      "https://github.com/KavinduGD/Full-Stack-Development-with-Java-Spring-Boot-React-and-MongoDB-",
    demo: "https://vedio-stream.vercel.app/",
  },
  {
    id: 5,
    image: IMG2,
    title: "Garment Manement System",
    github:
      "https://github.com/Sahan-Dulanjaya/Garment_Factory_Management_System",
    demo: "https://github.com/Sahan-Dulanjaya/Garment_Factory_Management_System",
  },
  {
    id: 6,
    image: IMG6,
    title: "Workout Buddy",
    github: "https://github.com/KavinduGD/MERN-stack-with-JWT",
    demo: "https://workout-buddy-kavindu.vercel.app/signup",
  },
];
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
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
