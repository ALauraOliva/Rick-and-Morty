import styledAbout from "./About.module.css";
import Me from "../../assets/MePhoto.webp";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <div className={styledAbout.contenedorAbout}>
      <script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js"></script>
      <div className={styledAbout.content}>
        <h3>Hello It's Me</h3>
        <h1>Andrea Laura</h1>
        <h3>And I'm...</h3>
        <p>I'm 23 years old</p>
        <p>I am a constantly progressing full stack developer</p>
        <div className={styledAbout.links}>
          <a href="https://github.com/ALauraOliva">
            <BsGithub size="3em" color="white" />
          </a>
          <a href="https://www.instagram.com/">
            <AiFillInstagram size="3em" color="white" />
          </a>
          <a href="https://www.linkedin.com/in/andrea-laura-99604a275/">
            <AiFillLinkedin size="3em" color="white" />
          </a>
        </div>
      </div>

      <img src={Me} alt="" />
    </div>
  );
}
