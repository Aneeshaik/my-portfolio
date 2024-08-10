import image from "../../images/pic2.jpg"
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
const Body = () => {
    return (
        <div>
        <div className="absolute bg-gradient-to-r from-slate-600 to-slate-900 w-36 h-72 z-[-1] blur-[90px] rounded-full"></div>
            <div className="m-14 flex text-white">
            <div className="mx-auto my-auto w-8/12">
                <div className="">
                <h1 className="text-5xl mt-4">Shaik Anees Ahmad</h1>
                <h1 className="mt-5">As a 2024 BTech graduate in Computer Science, I am ready to apply my technical knowledge and problem-solving skills in a challenging role. My education has prepared me for a career that demands innovation and collaboration. I am seeking a position where I can contribute to impactful projects and grow as a software development professional.</h1>
                </div>
                <div className="mt-5">
                <a className="text-xl bg-slate-600 text-white text-center p-2 rounded-full font-medium" href="https://drive.google.com/file/d/15uJA6c_5lLzIMIGIWpyuIEP5R0gxvciW/view" target="_blank">Resume</a>
                <a className="text-xl bg-slate-600 text-white text-center ml-2 p-2 rounded-full font-medium" href="https://github.com/Aneeshaik" target="_blank">GitHub</a>
                <a className="text-xl bg-slate-600 text-white text-center ml-2 mt-12 p-2 rounded-full font-medium" href="https://www.linkedin.com/in/shaik-anees-ahmad/" target="_blank">LinkedIn</a>
                </div>
                </div>
                <div className="relative w-4/12">
                <img className="rounded-full mx-auto my-auto" src={image} alt="anees-pic"></img>
                </div>
            </div>
            <div>
                <Skills />
            </div>
            <div className="mt-[19rem]">
                <Projects />
            </div>
            <div className="mt-[19rem]">
                <Contact />
            </div>
        </div>
    )
}

export default Body;