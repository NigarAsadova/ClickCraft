import Logo from "../../assets/icons/main-logo.svg"
import Button from "../Button";
import Navbar from "./Navbar";
const Header = () => {
    return ( 
        <div className="max-w-[1720px] mx-auto pt-7 pb-9 font-Roboto">
            <div className="flex justify-between items-center">
                <div className="max-lg:hidden">
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    <Navbar />
                </div>
                <div className="flex gap-4">
                    <div className="max-xl:hidden" ><Button text="Sign In" to="/login" /></div>
                    <div><Button text="Sign Up" to="/home"/></div>  
                </div>
            </div>
        </div>
     );
}
 
export default Header;