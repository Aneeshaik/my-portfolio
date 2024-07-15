import html from "../../images/html.png"
import css from "../../images/css-crop.png"
import javascript from "../../images/js.png"
import java from "../../images/java-logo.png"
import react from "../../images/react-logo.webp"
import nodejs1 from "../../images/nodejs1-logo.png"
import mongodb from "../../images/mongodb-logo.png"
import expressjs from "../../images/expressjs-logo.png"
import tailwindcss from "../../images/tailwindcss-logo.webp"
import github from "../../images/github.png"
import wordpress from "../../images/wordpress-logo.png"
const Skills = () => {
    return (
        <div className="">
           <h1 className="text-white text-center font-bold text-3xl">Skills</h1>
           <div className="h-24 w-3/12 mx-auto flex justify-center m-5">
                <img className="" src={html} alt="html-pic"></img>
                <img className="ml-14" src={css} alt="css-logo"></img>
                <img className="ml-14 rounded-xl" src={javascript} alt="js-pic"></img>
                <img className="ml-14" src={java} alt="java-pic"></img>
                <img className="ml-14" src={react} alt="react-pic"></img>
                <img className="ml-14" src={nodejs1} alt="nodejs-pic"></img>
                <img className="ml-14" src={mongodb} alt="mongodb-pic"></img>
                <img className="ml-14" src={expressjs} alt="expressjs-logo"></img>
                <img className="ml-14" src={tailwindcss} alt="tailwindcss-logo"></img>
                <img className="ml-14" src={github} alt="github-logo"></img>
                <img className="ml-14" src={wordpress} alt="wordpress-logo"></img>
           </div>
        </div>
    )
}
export default Skills;