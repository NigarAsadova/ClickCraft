import SectionTitle from "../SectionTitle";
import Button from "../Button";
import star from "../../assets/icons/stars.svg";
import saly from "../../assets/imgs/Saly-13.svg";
const SetUp = () => {
    return ( 
        <div>
            <div className="max-w-[746px] mx-auto">
                <SectionTitle title="5 minute set-up process" />
                <p className="font-normal text-2xl text-center text-[#77798F]">Just take <span className="font-bold">5 minutes</span> to fill in some info, choose a killer template, and bam! Your personalized portfolio website is ready.</p>                
            </div>
            <div className="border border-[#664DFF]">
                <div className="border border-[#2A2B3A] rounded-[50px]">
                    <img src="" alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-5">
                        <div><img src={star} alt="stars" /></div>
                        <span className="bg-custom-blue-gradient bg-clip-text text-transparent text-base font-medium uppercase tracking-[0.25em] ">How It Works</span>
                    </div>
                    <h3 className="font-bold text-[44px] leading-[52.8px] bg-custom-white-gradient bg-clip-text text-transparent">Complete Your Profile</h3>
                    <p className="my-6 font-normal text-[26px] text-[#77798F] leading-[41.6px]"> Just share your details, choose a template, and see your personal portfolio magically appear. Confirm or make any changes you like, and  Grab a special link to share your portfolio with everyone. Boost your online presence the easy way!</p>
                    <Button text="Complete Your Profile" />
                </div>
            </div>
        </div>
     );
}
 
export default SetUp;