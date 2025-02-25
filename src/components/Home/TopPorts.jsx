import SectionTitle from "../SectionTitle";
import HowItWorks from "./HowItWorks";
import template from "../../assets/imgs/template.png"
import { Link } from "react-router-dom";

const TopPorts = () => {
    return (
         <div className="mt-[135px] max-lg:mt-[50px] max-w-[1520px] mx-auto">
            <SectionTitle title="Top Rated Portfolios" />
            <div className="grid grid-cols-2 mt-[135px] max-lg:mt-[25px] gap-[30px] max-md:gap-[39px] max-lg:grid-cols-1">
                <Link to="#" className=" hover:scale-105 transition-transform duration-300">
                    <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] max-md:py-[18px] max-md:px-[12.5px] shadow-purple-box-shadow flex flex-col justify-center items-center">
                        <div className="max-w-[570px]">
                            <HowItWorks />
                            <h4 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[44px] leading-[52.8px] mb-6 max-lg:text-center max-md:text-xl">Customize This Template</h4>
                            <p className="text-[#77798F] text-[26px] font-normal max-lg:text-center max-md:text-base">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>                        
                        </div>
                        <div className="mt-[75px] max-md:mt-4">
                            <img src={template} alt="template" />
                        </div>
                    </div>                
                </Link>
                <Link to="#" className=" hover:scale-105 transition-transform duration-300">
                    <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] max-md:py-[18px] max-md:px-[12.5px] shadow-purple-box-shadow flex flex-col justify-center items-center">
                        <div className="max-w-[570px]">
                            <HowItWorks />
                            <h4 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[44px] leading-[52.8px] mb-6 max-lg:text-center max-md:text-xl">Customize This Template</h4>
                            <p className="text-[#77798F] text-[26px] font-normal max-lg:text-center max-md:text-base">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>                        
                        </div>
                        <div className="mt-[75px] max-md:mt-4">
                            <img src={template} alt="template" />
                        </div>
                    </div>                
                </Link>
                <Link to="#" className=" hover:scale-105 transition-transform duration-300">
                    <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] max-md:py-[18px] max-md:px-[12.5px] shadow-purple-box-shadow flex flex-col justify-center items-center">
                        <div className="max-w-[570px]">
                            <HowItWorks />
                            <h4 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[44px] leading-[52.8px] mb-6 max-lg:text-center max-md:text-xl">Customize This Template</h4>
                            <p className="text-[#77798F] text-[26px] font-normal max-lg:text-center max-md:text-base">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>                        
                        </div>
                        <div className="mt-[75px] max-md:mt-4">
                            <img src={template} alt="template" />
                        </div>
                    </div>                
                </Link>
                <Link to="#" className=" hover:scale-105 transition-transform duration-300">
                    <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] max-md:py-[18px] max-md:px-[12.5px] shadow-purple-box-shadow flex flex-col justify-center items-center">
                        <div className="max-w-[570px]">
                            <HowItWorks />
                            <h4 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[44px] leading-[52.8px] mb-6 max-lg:text-center max-md:text-xl">Customize This Template</h4>
                            <p className="text-[#77798F] text-[26px] font-normal max-lg:text-center max-md:text-base">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>                        
                        </div>
                        <div className="mt-[75px] max-md:mt-4">
                            <img src={template} alt="template" />
                        </div>
                    </div>                
                </Link>
            </div>
        </div>
     );
}
 
export default TopPorts;