import instaProject from "../../images/insta-project.png";
const Projects = () => {
    return (
        <div className="">
            <h1 className="text-white text-center font-bold text-3xl">Projects</h1>
            <div className="flex m-5 insta-project w-8/12 mx-auto bg-startblue rounded-2xl">
                <img className="p-5 w-auto h-64 rounded-[2rem]" src={instaProject} />
                <div className="p-5 my-auto">
                <p className="text-white">A dynamic website integrating Instagram login functionality with Mailchimp API that securely stores user credentials, including username and password, upon successful login.</p>
                <a className="mt-5 text-white" href="https://github.com/Aneeshaik/InstaLogin">Github</a>
                <a className="mt-5 ml-5 text-white" href="https://insta-login-izd81nf0z-aneeshaiks-projects.vercel.app/">Website</a>
                </div>
            </div>
        </div>
    )
}
export default Projects;