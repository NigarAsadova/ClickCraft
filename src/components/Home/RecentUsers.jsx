import SectionTitle from "../SectionTitle";
import user from "../../assets/imgs/user.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../features/Users/UsersApi";
const RecentUsers = () => {
    const users = useSelector((state) => state.users.users.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, []);
    console.log(users);
    return ( 
        <div className="max-w-[1520px] mx-auto mt-[135px]">
            <SectionTitle title="Recent Users" />
            <div className="border border-[#2A2B3A] py-[25px] mt-5 flex gap-[50px] justify-center">
                {
                    users.slice(0,9).map((user) => (
                <div className="text-center">
                    <div className="h-[100px] w-[100px] border-2 border-[#664DFF] rounded-full"><img src={user.image} alt="image" /></div>
                    <h5 className="font-bold text-xl leading-6 text-white">{user.firstName}</h5>
                    <h5 className="font-bold text-xl leading-6 text-white">{user.lastName}</h5>
                </div>                        
                    ))
                }
            </div>
        </div>
     );
}
 
export default RecentUsers;