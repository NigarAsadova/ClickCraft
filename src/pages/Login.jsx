import { useState } from "react";
import { Link } from "react-router-dom";
import Eye from "../assets/icons/eye.svg";
import EyeSlash from "../assets/icons/eyeslash.svg";

const Login = () => {

    const [showPassword, SetShowPassword] = useState(false);

    const toogleEye = () =>{
        if(showPassword) SetShowPassword(false);
        else SetShowPassword(true);
    }

    return ( 
            <div className="w-full max-w-[600px] pt-16 pb-8 px-12 border-[#664DFF] border-t-2 border-x border-b-4 rounded-[10px] text-white mx-auto">
                <form action="#">
                    <div className="flex justify-between items-center">
                        <h5 className="text-[48px] leading-[34px] font-medium text-white">Sign In</h5>
                        <div className="text-lg leading-4 font-medium flex gap-2">
                            <p className="text-white opacity-30">Don't have an account? </p>                       
                            <Link to="/signup" className="text-main-blue opacity-100 hover:underline dark:text-main-blue">Sign up</Link>
                        </div>                        
                    </div>
                    <div className="pb-7 pt-24">
                        <input type="email" name="email" id="email" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" placeholder="Email" required />
                    </div>
                    <div className="pb-7 relative">
                        <input type={showPassword? `text` : `password`} name="password" id="password" placeholder="Password" className=" border border-black border-opacity-10 text-black text-lg leading-5 rounded-[10px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4" required />
                        <div onClick={toogleEye} className="w-5 h-5 absolute right-4 top-4">
                            <img src={showPassword? Eye : EyeSlash} alt="Eye Icon" className="size-full" />
                        </div>
                    </div>
                    <button type="submit" className="border-[3px] border-[#2A2B3A] py-4 px-40 font-medium text-lg max-md:text-lg  text-white hover:border-[rgb(114,65,255)] hover:shadow-custom-purple transition-all ease-in-out duration-500 block text-center mx-auto mt-14">Login</button>
                    <div className="text-center pt-16">
                     <Link to="/restore" className="text-[17px] leading-[10px] text-main-blue hover:underline font-medium">Lost your Password?</Link> 
                    </div>
                </form>
            </div>           
     );
}
 
export default Login;
