import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Button = () => {
    return ( 
        <Link to="/Home">
            <div className="border-[3px] border-[#2A2B3A] rounded-[40px] py-4 px-10 font-medium text-base leading-[18.75px] text-white hover:border-[#7241FF] hover:shadow-custom-purple">
            Sign Up
            </div>
        </Link>

     );
}
 
export default Button;