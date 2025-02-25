import chatbot from "../../assets/imgs/chatbot.svg"
import yagna from "../../assets/imgs/yagna img.png"
import github from "../../assets/icons/github.svg"
import discord from "../../assets/icons/mdi_discord.svg"
import reddit from "../../assets/icons/mdi_reddit.svg"
import twitter from "../../assets/icons/mdi_twitter.svg"
import { Link } from "react-router-dom"

const Contact = () => {
    return ( 
        <div className="border-t border-b-[3px] rounded-[42px] border-[#664DFF] p-[100px] max-md:p-[30px] shadow-purple-box-shadow mt-[68px] max-w-[1520px] mx-auto my-[45px]">
        <div className="flex gap-[78px] max-md:gap-10 items-center justify-end max-lg:flex-col">
            <div className="max-w-[745px] flex justify-start flex-col pb-[13px]">
                <div>
                    <h3 className="font-bold text-[44px] leading-[52.8px] bg-custom-white-gradient bg-clip-text text-transparent inline max-md:text-xl">Always Reachable</h3>
                    <p className="my-6 font-normal text-[26px] text-[#77798F] leading-[41.6px] max-md:text-sm">Feel free to reach out to us anytime through email or LinkedIn. We're here to assist you and answer any queries you may have. Let's stay connected!</p>                    
                </div>
                <div className="flex gap-7 pt-[34px] mt-[34px] border-t border-[#182542]">
                    <div><img src={yagna} alt="yagna img" /></div>
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[29px] text-white uppercase tracking-[0.1em] font-medium leading-[33.98px] max-md:text-xl">Yagna Kusumanchi</h5>
                        <span className="text-base font-normal text-[#77798F] max-md:text-sm">Founder and CEO of Click Craft</span>
                        <div className="flex gap-4">
                            <Link to="#">
                                <img src={github} alt="github" />
                            </Link>
                            <Link to="#">
                                <img src={discord} alt="discord" />
                            </Link>
                            <Link to="#">
                                <img src={reddit} alt="reddit" />
                            </Link>
                            <Link to="#">
                                <img src={twitter} alt="twitter" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[474px] max-h-[410px] flex justify-end">
               <img src={chatbot} alt="chatbot" className="size-full" />
            </div>                  
        </div>
    </div>
     );
}
 
export default Contact;