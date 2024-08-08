import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex p-4 justify-between text-white">
                <div>
                    <h1 className="">Shaik Anees Ahmad</h1>
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
    )
}

export default Header;