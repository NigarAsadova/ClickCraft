import eye from "../assets/icons/Eye.svg"

const Community = () => {
    return ( 
        <div>
            <div>
                <div>
                    <div className="p-5 border-[#664DFF] border-t-2 border-x border-b-4 rounded-[10px] flex flex-col items-">
                        <div className="text-[#77798F]">
                            Author of "Python 3.0 for Beginners" and a Full Stack Developer passionate about creating dynamic and user-friendly web experiences.
                        </div>
                        <div className="text-white">
                            <p>Portfolios <span>10</span></p>
                            <div>
                                <div className="flex gap-[6px]"><div><img src={eye} alt="eye" /></div><span> 1359</span></div>
                                <p>Followers <span></span></p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
     );
}
 
export default Community;