import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <ul className="text-[#77798F] font-normal text-2xl leading-[28.13px] py-4 px-8 flex gap-10">
                <li className="hover:text-[#865BFF] transition-all ease-in-out duration-300">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#865BFF] transition-all ease-in-out duration-300">
                    <Link to="/Portfolios">Portfolios</Link>
                </li>
                <li className="hover:text-[#865BFF] transition-all ease-in-out duration-300">
                    <Link to="/Community">Community</Link>
                </li>
                <li className="hover:text-[#865BFF] transition-all ease-in-out duration-300">
                    <Link to="/About">About Us</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;