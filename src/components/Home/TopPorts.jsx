import SectionTitle from "../SectionTitle";
import HowItWorks from "./HowItWorks";
import template from "../../assets/imgs/template.png"
import { Link } from "react-router-dom";

const TopPorts = () => {
    return (
         <div className="mt-[135px] max-w-[1520px] mx-auto">
            <SectionTitle title="Top Rated Portfolios" />
            <div className="grid grid-cols-2 mt-[135px] gap-[30px]">
                <Link to="#">
                    <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] shadow-purple-box-shadow">
                        <div className="max-w-[570px]">
                            <HowItWorks />
                            <h4 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[44px] leading-[52.8px] mb-6">Customize This Template</h4>
                            <p className="text-[#77798F] text-[26px] font-normal ">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>                        
                        </div>
                        <div className="mt-[75px]">
                            <img src={template} alt="template" />
                        </div>
                    </div>                
                </Link>
                <Link to="#">
                    <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] shadow-purple-box-shadow">
                        <div className="max-w-[570px]">
                            <HowItWorks />
                            <h4 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[44px] leading-[52.8px] mb-6">Customize This Template</h4>
                            <p className="text-[#77798F] text-[26px] font-normal ">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>                        
                        </div>
                        <div className="mt-[75px]">
                            <img src={template} alt="template" />
                        </div>
                    </div>                
                </Link>
                <Link to="#">
                    <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] shadow-purple-box-shadow">
                        <div className="max-w-[570px]">
                            <HowItWorks />
                            <h4 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[44px] leading-[52.8px] mb-6">Customize This Template</h4>
                            <p className="text-[#77798F] text-[26px] font-normal ">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>                        
                        </div>
                        <div className="mt-[75px]">
                            <img src={template} alt="template" />
                        </div>
                    </div>                
                </Link>
                <Link to="#">
                    <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] shadow-purple-box-shadow">
                        <div className="max-w-[570px]">
                            <HowItWorks />
                            <h4 className="bg-custom-white-gradient bg-clip-text text-transparent font-bold text-[44px] leading-[52.8px] mb-6">Customize This Template</h4>
                            <p className="text-[#77798F] text-[26px] font-normal ">Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>                        
                        </div>
                        <div className="mt-[75px]">
                            <img src={template} alt="template" />
                        </div>
                    </div>                
                </Link>
            </div>
        </div>
     );
}
 
export default TopPorts;