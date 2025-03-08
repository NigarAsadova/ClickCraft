import eye from "../assets/icons/Eye.svg"
import arrow from "../assets/icons/arrow.svg"

const Community = () => {
    return ( 
        <div>
            <div>
                <div className="flex items-center">
                    <div className="p-5 border-[#664DFF] border-t-2 border-x border-b-4 rounded-[10px] flex flex-col items-">
                        <div className="text-[#77798F] text-xl font-normal">
                            Author of "Python 3.0 for Beginners" and a Full Stack Developer passionate about creating dynamic and user-friendly web experiences.
                        </div>
                        <div className="text-white text-xl font-normal flex justify-between">
                            <p>Portfolios <span className="font-bold">10</span></p>
                            <div className="flex gap-1">
                                <div className="flex gap-[6px]"><div><img src={eye} alt="eye" /></div><span className="font-bold"> 1359</span></div>
                                <p>Followers <span className="font-bold">999</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-1"><img src={arrow} alt="arrow" /></div>
                    <div>
                        <div><img src="" alt="" /></div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Community;