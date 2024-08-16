import instaProject from "../../images/insta-project.png";
import weatherProject from "../../images/weather-project.png";
import todoProject from "../../images/todo-project.png";
import simonProject from "../../images/simon-project.png"
const Projects = () => {
    return (
        <div className="">
            <h1 className="text-white text-center font-bold text-3xl font-poppins">Projects</h1>
            <div className="flex m-5 insta-project w-8/12 mx-auto bg-startblue rounded-2xl">
                <img className="p-5 w-auto h-64 rounded-[2rem]" src={instaProject} />
                <div className="p-5 my-auto">
                <h1 className="text-white font-bold">Instagram Clone with Mailchimp Integration</h1>
                <p className="text-white">This project is a clone of the Instagram login functionality, designed for educational and practice purposes. It demonstrates how to build a non-static web application using Node.js that integrates with the Mailchimp API to store and manage user login credentials securely.</p>
                <a target="__blank" className="mt-5 text-white" href="https://github.com/Aneeshaik/InstaLogin">Github</a>
                <a target="__blank" className="mt-5 ml-5 text-white" href="https://insta-login-izd81nf0z-aneeshaiks-projects.vercel.app/">Website</a>
                </div>
            </div>
            <div className="right-0 absolute bg-gradient-to-r from-start-color to-end-color  w-56 h-[900px] z-[-1] blur-[90px] translate-y-[-250px] rotate-[105deg] opacity-30"></div>
            <div className="flex m-5 insta-project w-8/12 mx-auto bg-startblue rounded-2xl">
                <div className="p-5 my-auto">
                <h1 className="text-white font-bold">Weather Checking Website</h1>
                <p className="text-white">This project is a weather website that allows users to check current weather conditions. It utilizes the OpenWeather API to fetch weather data and is built with Node.js, Express, HTML, and CSS.</p>
                <a target="__blank" className="mt-5 text-white" href="https://github.com/Aneeshaik/weatherCheck">Github</a>
                <a target="__blank" className="mt-5 ml-5 text-white" href="https://weathercheck-wk15.onrender.com/">Website</a>
                </div>
                <img className="p-5 w-auto h-64 rounded-[2rem]" src={weatherProject} />
            </div>
            <div className="flex m-5 insta-project w-8/12 mx-auto bg-startblue rounded-2xl">
                <img className="p-5 w-auto h-64 rounded-[2rem]" src={todoProject} />
                <div className="p-5 my-auto">
                <h1 className="text-white font-bold">To-Do List Application</h1>
                <p className="text-white">This project is a simple To-Do List application built using EJS, Node.js, and CSS for styling. The application allows users to manage their tasks with functionalities to add and mark tasks as completed.</p>
                <a target="__blank" className="mt-5 text-white" href="https://github.com/Aneeshaik/todo-list">Github</a>
                <a target="__blank" className="mt-5 ml-5 text-white" href="https://todo-list-eight-gold-50.vercel.app/">Website</a>
                </div>
            </div>
            <div className="flex m-5 insta-project w-8/12 mx-auto bg-startblue rounded-2xl">
                <div className="p-5 my-auto">
                <h1 className="text-white font-bold">Simon Game</h1>
                <p className="text-white">This repository contains the classic Simon Game implemented in HTML, CSS, and JavaScript. Simon is a memory game where players must repeat random sequences of colors by pressing the colored buttons in the correct order.</p>
                <a target="__blank" className="mt-5 text-white" href="https://github.com/Aneeshaik/simonGame">Github</a>
                <a target="__blank" className="mt-5 ml-5 text-white" href="https://aneeshaik.github.io/simonGame/">Website</a>
                </div>
                <img className="p-5 w-auto h-64 rounded-[2rem]" src={simonProject} />
                <div className="absolute bg-gradient-to-r from-start-color to-end-color  w-56 h-[900px] z-[-1] blur-[90px] translate-y-[-250px] rotate-[105deg] opacity-20"></div>
            </div>
        </div>
    )
}
export default Projects;