import image from "../../images/pic2.jpg"
import Skills from "./Skills";
const Body = () => {
    return (
        <div>
            <div className="m-12 flex text-white">
            <div>
                <h1 className="text-xl">Hey! I am</h1>
                <h1 className="text-xl">Shaik Anees Ahmad</h1>
                <h1 className="">As a 2024 BTech graduate in Computer Science, I am ready to apply my technical knowledge and problem-solving skills in a challenging role. My education has prepared me for a career that demands innovation and collaboration. I am seeking a position where I can contribute to impactful projects and grow as a software development professional.</h1>
                <div className="mt-4">
                <a className="text-xl bg-slate-600 text-white text-center p-2 rounded-full font-medium" href="https://drive.google.com/file/d/15uJA6c_5lLzIMIGIWpyuIEP5R0gxvciW/view" target="_blank">Resume</a>
                <a className="text-xl bg-slate-600 text-white text-center ml-2 p-2 rounded-full font-medium" href="https://github.com/Aneeshaik" target="_blank">GitHub</a>
                <a className="text-xl bg-slate-600 text-white text-center ml-2 mt-12 p-2 rounded-full font-medium" href="https://www.linkedin.com/in/shaik-anees-ahmad/" target="_blank">LinkedIn</a>
                </div>
                </div>
                <img className="rounded-full h-56 w-56 object-contain" src={image} alt="anees-pic"></img>
            </div>
            <div>
                <Skills />
            </div>
        </div>
    )
}

export default Body;