import image from "../../images/pic2.jpg"
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
const Body = () => {
    return (
        <div className="">
        <div className="right-0 absolute bg-gradient-to-r from-start-color to-end-color  w-56 h-[900px] z-[-1] blur-[90px] translate-y-[-250px] rotate-[105deg] opacity-30"></div>
            <div className="m-14 flex text-white">
                <div className="mx-auto my-auto w-8/12">
                    <div className="">
                        <h1 className="text-5xl mt-4 hover:mr-2 transition-transform duration-300">Shaik <span className="inline-block text-text-color hover:mr-4 hover:ml-4 hover:scale-110 transition-all duration-500 ease-in-out">Anees</span> Ahmad</h1>
                        <h1 className="mt-5">As a <span className="text-text-color"> 2024 BTech graduate in Computer Science, </span> I am ready to apply my technical knowledge and problem-solving skills in a challenging role. My education has prepared me for a career that demands innovation and collaboration. I am seeking a position where I can contribute to impactful projects and grow as a software development professional.</h1>
                    </div>
                    <div className="mt-5">
                        <a className="inline-block text-xl bg-gradient-to-r from-teal-400 to-blue-500 text-white text-center py-1 px-2 rounded-full font-medium hover:scale-110 hover:shadow-[0_0_10px_rgba(255,128,128,0.9)] transition-all duration-300 ease-in-out" href="https://drive.google.com/file/d/15uJA6c_5lLzIMIGIWpyuIEP5R0gxvciW/view" target="_blank">Resume</a>                       
                        <a className="inline-block text-xl bg-gradient-to-r from-teal-400 to-blue-500 text-white text-center ml-4 py-1 px-2 rounded-full font-medium hover:scale-110 hover:shadow-[0_0_10px_rgba(255,128,128,0.9)] transition-all duration-300 ease-in-out" href="https://github.com/Aneeshaik" target="_blank">GitHub</a>
                        <a className="inline-block text-xl bg-gradient-to-r from-teal-400 to-blue-500 text-white text-center ml-4 py-1 px-2 rounded-full font-medium hover:scale-110 hover:shadow-[0_0_10px_rgba(255,128,128,0.9)] transition-all duration-300 ease-in-out" href="https://www.linkedin.com/in/shaik-anees-ahmad/" target="_blank">LinkedIn</a>
                        <p className="mt-5">const linkedIn = <a href="https://www.linkedin.com/in/shaik-anees-ahmad/">https://www.linkedin.com/in/shaik-anees-ahmad/</a></p>
                    </div>
                    </div>
                        <div className="relative w-4/12">
                        <img className="rounded-full mx-auto my-auto hover:scale-110 transition-transform duration-500 shadow-[2px_5px_10px_rgba(255,128,128,0.5)]" src={image} alt="anees-pic"></img>
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