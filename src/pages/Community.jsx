import { useEffect, useState } from "react"
import eye from "../assets/icons/Eye.svg"
import arrow from "../assets/icons/arrow.svg"
import user from "../assets/imgs/user.png"
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../features/Posts/PostsApi"
import { getUsers } from "../features/Users/UsersApi"
import SectionTitle from "../components/SectionTitle"

const Community = () => {
    const posts = useSelector((state) => state.posts.posts.posts) || [];
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users.users) || [];


    useEffect(() => {
        dispatch(getPost());
        dispatch(getUsers());
    }, [])

    return ( 
        <div className="max-w-[1520px] mx-auto pb-60 pt-7">
            <SectionTitle title = "Community" />
            <div className="grid gap-[139px] pt-[98px] grid-cols-2 max-lg:grid-cols-1">
                {posts.map((post) => (
                <div className="flex items-center" key={post.id}>
                    <div className="p-5 border-[#664DFF] border-t-2 border-x border-b-4 rounded-[10px] flex flex-col gap-[71px] max-h-[248px]">
                        <div className="text-[#77798F] text-xl font-normal overflow-y-auto  [&::-webkit-scrollbar]:hidden">
                            {post.body}
                        </div>                            
                        <div className="text-white text-xl font-normal flex justify-between">
                            <p>Portfolios <span className="font-bold">10</span></p>
                            <div className="flex gap-3">
                                <div className="flex gap-[6px]"><div><img src={eye} alt="eye" /></div><span className="font-bold">{post.views} </span></div>
                                <p>Followers <span className="font-bold">999</span></p>
                            </div>
                        </div>
                    </div>
                <div className="w-[50px] h-[35px] ml-1"><img src={arrow} alt="arrow" className="size-full" /></div>
                {
                    users.filter((user) => user.id === post.id%20).map((user) => (
                    <div className="text-center font-bold text-white text-xl pl-8 flex items-center flex-col" key={posts.id}>
                        <div className="max-h-[75px] max-w-[75px]"><img src={user.image} alt="user" className="size-full" /></div>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                    </div>                        
                    ))
                }
                </div>                    
                ))}

            </div>
        </div>
     );
}
 
export default Community;