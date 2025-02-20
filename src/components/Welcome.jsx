import stars from "../assets/icons/stars.svg"
import { Link } from "react-router-dom";
import play from "../assets/icons/play.svg";
const Welcome = () => {
    return ( 
        <div className="text-center">
            <div className="flex gap-3 items-center justify-center">
                <div><img src={stars} alt="stars" /></div>
                <span className="bg-custom-blue-gradient bg-clip-text text-transparent font-medium leading-[25.6px] text-base tracking-[0.25em] uppercase">Welcome to Click craft</span>
            </div>
            <h1 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[76px] leading-[91.2px] text-center max-w-[1062px] mx-auto my-[22px]">Your Story, Your Way Build Your Personal Portfolio</h1>
            <p className="font-normal text-2xl text-center mx-auto text-[#77798F] max-w-[667px]">Showcase your journey by crafting a personal portfolio in minutes</p>
            <div className="flex gap-6 justify-center mt-10">
                <Link to="#">
                <div className="border-[1.5px] border-[#2A2B3A] rounded-[40px] py-4 px-10 font-medium text-lg text-white hover:border-[rgb(114,65,255)] hover:shadow-custom-purple transition-all ease-in-out duration-500">
                    Get started for free
                </div>
                </Link>
                <Link to="#">
                <div className="border-[1.5px] border-[#2A2B3A] rounded-[40px] py-4 px-10 font-medium text-lg text-white hover:border-[rgb(114,65,255)] hover:shadow-custom-purple transition-all ease-in-out duration-500 flex gap-3">
                    <img src={play} alt="play" /> Watch Video
                </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Welcome;