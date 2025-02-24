import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
    return ( 
        <Link to={to}>
            <div className="border-[3px] border-[#2A2B3A] rounded-[40px] py-4 px-10 font-medium text-base max-md:text-lg leading-[18.75px] text-white hover:border-[rgb(114,65,255)] hover:shadow-custom-purple transition-all ease-in-out duration-500 inline-block max-lg:flex max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:min-h-[65px]">
                {text}
            </div>
        </Link>
    );
}

export default Button;
