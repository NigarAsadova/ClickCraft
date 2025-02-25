import SectionTitle from "../SectionTitle";
import Button from "../Button";
import saly from "../../assets/imgs/Saly-13.svg";
import HowItWorks from "./HowItWorks";
const SetUp = () => {
    return ( 
        <div className="max-w-[1520px] mx-auto mt-[135px] max-md:mt-[50px] max-lg:text-center">
            <div className="max-w-[746px] mx-auto">
                <SectionTitle title="5 minute set-up process" />
                <p className="font-normal text-2xl text-center text-[#77798F] max-md:hidden">Just take <span className="font-bold">5 minutes</span> to fill in some info, choose a killer template, and bam! Your personalized portfolio website is ready.</p>                
            </div>
            <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[50px] max-md:pt-[14px] max-md:px-[18px] max-md:pb-2 shadow-purple-box-shadow mt-[68px] max-md:mt-0">
                <div className="grid grid-cols-2 gap-[106px] max-md:gap-5 items-center max-lg:grid-cols-1 max-lg:flex max-lg:flex-col-reverse">
                    <div className="border border-[#2A2B3A] rounded-[50px] min-lg:bg-saly-gradient flex justify-center max-lg:border-0">
                        <img src={saly} alt="saly" />
                    </div>
                    <div className="max-w-[615px]">
                        <div className="max-lg:hidden">
                        <HowItWorks />
                        <h3 className="font-bold text-[44px] leading-[52.8px] bg-custom-white-gradient bg-clip-text text-transparent">Complete Your Profile</h3>
                        </div> 
                        <p className="my-6 font-normal text-[26px] max-md:text-base text-[#77798F] leading-[41.6px]"> Just share your details, choose a template, and see your personal portfolio magically appear. Confirm or make any changes you like, and  Grab a special link to share your portfolio with everyone. Boost your online presence the easy way!</p>
                        <Button text="Complete Your Profile" to="#" />
                    </div>                    
                </div>

            </div>
        </div>
     );
}
 
export default SetUp;