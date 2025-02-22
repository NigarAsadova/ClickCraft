import SectionTitle from "../SectionTitle";
import user from "../../assets/imgs/user.png";
const RecentUsers = () => {
    return ( 
        <div className="max-w-[1520px] mx-auto mt-[135px]">
            <SectionTitle title="Recent Users" />
            <div className="border border-[#2A2B3A] py-[25px] mt-5 flex gap-[50px] justify-center">
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user} alt="" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">Name</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">Surname</h5>
                </div>
            </div>
        </div>
     );
}
 
export default RecentUsers;