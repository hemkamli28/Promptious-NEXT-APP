"use client";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@/Components/Form';
const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: ""
  });
  
  const fetchPost = async () => {
    const res = await fetch(`/api/prompt/${promptId}`);
    const data = await res.json();
    setPost({
      prompt : data.prompt,
      tag : data.tag
    })
  }
  const editPrompt = async (e) =>{
    e.preventDefault();
    setSubmitting(true);
    try{
      const res = await fetch(`/api/prompt/${promptId}`,{
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
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
  useEffect(()=>{
    promptId && fetchPost();
} , [promptId])

  return (
    <>
      <Form 
      title="Edit"
      type="Save"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editPrompt}
       />        
    </>
  )
}

export default EditPrompt;