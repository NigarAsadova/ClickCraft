import eye from "../assets/icons/Eye.svg"
import arrow from "../assets/icons/arrow.svg"
import user from "../assets/imgs/user.png"

const Community = () => {
    return ( 
        <div className="max-w-[1520px] mx-auto">
            <div className="flex gap-[139px]">
                <div className="flex items-center">
                    <div className="p-5 border-[#664DFF] border-t-2 border-x border-b-4 rounded-[10px] flex flex-col gap-[71px]">
                        <div className="text-[#77798F] text-xl font-normal">
                            Author of "Python 3.0 for Beginners" and a Full Stack Developer passionate about creating dynamic and user-friendly web experiences.
                        </div>
                        <div className="text-white text-xl font-normal flex justify-between">
                            <p>Portfolios <span className="font-bold">10</span></p>
                            <div className="flex gap-3">
                                <div className="flex gap-[6px]"><div><img src={eye} alt="eye" /></div><span className="font-bold"> 1359</span></div>
                                <p>Followers <span className="font-bold">999</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50px] h-[35px] ml-1"><img src={arrow} alt="arrow" className="size-full" /></div>
                    <div className="text-center font-bold text-white text-xl pl-8 flex items-center flex-col">
                        <div className="max-h-[75px] max-w-[75px]"><img src={user} alt="user" className="size-full" /></div>
                        <p>Yagna</p>
                        <p>Kusumanchi</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Community;