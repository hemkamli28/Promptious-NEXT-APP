"use client";
import { useState } from 'react';
import {useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@/Components/Form';

const Createprompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: ""
  });
  
  const newPrompt = async (e) =>{

  }
  return (
    <>
      <Form 
      type="create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={newPrompt}
       />        
    </>
  )
}

export default Createprompt;