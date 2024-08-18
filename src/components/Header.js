import { Link } from "react-router-dom";
import { useEffect } from "react";
const Header = () => {
    useEffect(() => {
        // Setup: Adding the scroll listener
        const handleScroll = () => {
          const navbar = document.getElementById('navbar');
          if (window.scrollY > 50) {
            navbar.classList.add('backdrop-blur-md', 'bg-black/40');
          } else {
            navbar.classList.remove('backdrop-blur-md', 'bg-black/40');
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        // Cleanup: Removing the scroll listener when the component is removed
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div id="navbar" className="fixed w-full z-10">
        <div className="flex p-4 justify-between text-white">
                <div>
                    <h1 className="">Shaik Anees Ahmad</h1>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a className="inline-block text-xl bg-gradient-to-r from-teal-400 to-blue-500 text-white text-center my-[-4px] py-1 px-2 rounded-full font-medium hover:scale-110 hover:shadow-[0_0_10px_rgba(255,128,128,0.9)] transition-all duration-300 ease-in-out" href="https://drive.google.com/file/d/15uJA6c_5lLzIMIGIWpyuIEP5R0gxvciW/view" target="_blank">Resume</a>                   
                </div>
                <div>
                <ul className="flex">
                    <li className="mr-12"><Link to="/">Home</Link></li>
                    <li className="mr-12"><Link to="/skills">Skills</Link></li>
                    <li className="mr-12"><Link to="/projects">Projects</Link></li>
                    <li className=""><Link to="/contact">Contact me</Link></li>
                    </ul>
                </div>
        </div>
        </div>
    )
}

export default Header;