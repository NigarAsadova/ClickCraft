import Logo from "../../assets/icons/main-logo.svg"
import Button from "../Button";
const Header = () => {
    return ( 
        <div className="max-w-[1720px] mx-auto pt-7 pb-9">
            <div>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div></div>
                <div className="flex gap-4">
                    <Button text="Sign In" to="/home" />
                    <Button text="Sign Up" to="/home" />
                </div>
            </div>
        </div>
     );
}
 
export default Header;