import { Link } from "react-router-dom";
import template from "../assets/imgs/template.png"
import favorite from "../assets/icons/favorite.svg"
import eye from "../assets/icons/eye.svg"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../features/Posts/PostsApi";

const Portfolios = () => {

    const posts = useSelector((state) => state.posts.posts.posts) || [];
    console.log(posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost());
    });

    return ( 
        <div className="pt-[56px] mx-auto max-w-[1720px] text-center">
            <h1 className="font-bold text-[54px] leadin-[64.8px] bg-custom-white-gradient bg-clip-text text-transparent inline-block">All Portfolios</h1>
            <div className="grid grid-cols-3 gap-[82px] my-16">
                {
                    posts.slice(0, 9).map((post) => (
                        <Link to="#" className=" hover:scale-105 transition-transform duration-300" key={post.id}>      
                            <div className="py-4 border-t-2 border-b-4 border-x-[0.5px] border-[#664DFF] rounded-[20px] items-center flex flex-col ">
                                <div className="max-w-[431px]"><img src={template} alt="template" className="size-full" /></div>
                                <div className="flex gap-[47px] items-center pl-[41px] pr-4 mt-[13px]">
                                    <button type="button" className="py-4 px-8 border-[3px] border-[#7241FF] font-medium text-lg text-white hover:shadow-custom-purple rounded-[10px]">Customize This</button>
                                    <div className="flex">
                                        <div className="flex gap-[10px]">
                                            <img src={favorite} alt="favoriteIcon" />
                                            <span className="font-medium text-white text-base w-[41px] text-left">{post.reactions.likes}</span>
                                        </div>
                                        <div className="flex gap-[10px]">
                                            <img src={eye} alt="EyeIcon" />
                                            <span className="font-medium text-white text-base w-[41px] text-left">{post.views}</span>
                                        </div>
                                    </div>                            
                                </div>
                            </div>
                        </Link>                        
                    ))
                }
            </div>
        </div>
     );
}
 
export default Portfolios;