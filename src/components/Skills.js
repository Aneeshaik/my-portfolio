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
        <div className="items-center">
            <div className="absolute bg-gradient-to-r from-start-color to-end-color  w-56 h-[900px] z-[-1] blur-[90px] translate-y-[-250px] rotate-[105deg] opacity-25"></div>
           <h1 className="text-white text-center font-bold text-3xl font-poppins">Skills</h1>
           <div className="w-10/12 flex flex-wrap mx-auto h-2 justify-center m-5">
                <img className="mt-2 m-14 h-24 hover:scale-[115%] transition-transform duration-300" src={html} alt="html-pic"></img>
                <img className="mt-2 h-24 m-14 hover:scale-[115%] transition-transform duration-300" src={css} alt="css-logo"></img>
                <img className="mt-2 h-24 m-14 rounded-xl hover:scale-[115%] transition-transform duration-300" src={javascript} alt="js-pic"></img>
                <img className="mt-2 h-24 m-14 hover:scale-[115%] transition-transform duration-300" src={java} alt="java-pic"></img>
                <img className="mt-2 h-24 m-14 hover:scale-[115%] transition-transform duration-300" src={react} alt="react-pic"></img>
                <img className="mt-2 h-24 m-14 hover:scale-[115%] transition-transform duration-300" src={nodejs1} alt="nodejs-pic"></img>
                <img className="h-24 m-14 mt-2 hover:scale-[115%] transition-transform duration-300" src={mongodb} alt="mongodb-pic"></img>
                <img className="h-24 m-14 mt-2 hover:scale-[115%] transition-transform duration-300" src={expressjs} alt="expressjs-logo"></img>
                <img className="h-20 m-14 mt-2 hover:scale-[115%] transition-transform duration-300" src={tailwindcss} alt="tailwindcss-logo"></img>
                <img className="h-24 m-14 mt-2 hover:scale-[115%] transition-transform duration-300" src={github} alt="github-logo"></img>
                <img className="h-24 m-14 mt-2 hover:scale-[115%] transition-transform duration-300" src={wordpress} alt="wordpress-logo"></img>
           </div>
        </div>
    )
}
export default Skills;