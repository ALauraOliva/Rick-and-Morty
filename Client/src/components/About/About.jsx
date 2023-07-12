import styledAbout from './About.module.css'
import Me from './MePhoto.jpg'
import 'boxicons'
import { BsGithub } from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai"
import {IoLogoWhatsapp} from "react-icons/io"

export default function About(){
    return(
        <div className={styledAbout.contenedorAbout}>
            <script src="https://unpkg.com/boxicons@2.1.3/dist/boxicons.js"></script>
            <div className={styledAbout.content}>
                    <h3>Hello It's Me</h3>
                    <h1>Andrea Laura</h1>
                    <h3>And I'm ...</h3>
                    <p>I'm 23 years old</p>
                    <p>I'm a future full stack web developer</p>
                    <div className={styledAbout.links}>
                        <a href='https://github.com/ALauraOliva' ><BsGithub size="3em" color='white'/></a>
                        <a href='https://www.instagram.com/' ><AiFillInstagram size="3em" color='white'/></a>
                        <a href='#' ><IoLogoWhatsapp size="3em" color='white'/></a>
                    </div>
            </div>
            
            <img src={Me}/>
        </div>
    )
}