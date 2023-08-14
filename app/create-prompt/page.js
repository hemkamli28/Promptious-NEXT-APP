"use client";
import { useState } from 'react';
import {useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@/Components/Form';
const Createprompt = () => {
  const router = useRouter();
  const {data: session} = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: ""
  });
  
  const newPrompt = async (e) =>{
    e.preventDefault();
    setSubmitting(true);
    try{
      const res = await fetch('/api/prompt/new',{
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag
        })
      })
      if(res.ok){
        router.push('/');
      }
    }
    catch(err){
      console.log(err);
    }
    finally{
      setSubmitting(false);
    }
  }
  return (
    <>
      <Form 
      title="Share New"
      type="Submit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={newPrompt}
       />        
    </>
  )
}

export default Createprompt;