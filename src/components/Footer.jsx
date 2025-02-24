import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="max-w-[1520px] font-Poppins mx-auto flex justify-between py-6 max-lg:flex-col items-center max-lg:gap-4">
            <span className="text-[#77798F] font-normal text-sm leading-[21px]"> &copy; 2024 Click Craft. All rights reserved.</span>
            <div>
                <ul className="text-[#77798F] font-normal text-sm leading-[21px] flex gap-8">
                    <li>
                        <Link to="#">Terms of Service</Link>
                    </li>
                    <li>
                        <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="#">Cookies</Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;