"use client";
import Profile from "@/Components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Myprofile = () => {
    const {data : session } = useSession();
    const router = useRouter();
    const [userPosts, setUserPosts] = useState(); 
    const fetchUserPosts = async () =>{
        const res = await fetch(`/api/users/${session?.user.id}/posts`);
        const data = await res.json();
        console.log(data);
        setUserPosts(data)
    }
    const handleEdit = async (post) => {
        router.push(`/edit-prompt?id=${post._id}`)
    }
    const handleDelete = async (post) => {
        try{
            const res = await fetch(`/api/prompt/${post._id}`,{
              method: 'DELETE',
            })
            if(res.ok){
                router.push('/');
            }

          }
          catch(err){
            console.log(err);
          }
    }   
    useEffect(()=>{
        session?.user.id && fetchUserPosts();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])
  return (
    <>
        <Profile 
            name="My"
            desc= "Welcome to your personalized profile"
            data={userPosts}
            handleEdit = {handleEdit}
            handleDelete = {handleDelete}
        />
    </>
  )
}

export default Myprofile