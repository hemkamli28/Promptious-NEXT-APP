import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <>
            <div className=''>
                <h1>{name} Profile</h1>
                <p>{desc}</p>
                {data?.map((prompt)=>(
                <PromptCard 
                    key={ prompt._id}
                    post={prompt}
                    handleEdit={()=> handleEdit && handleEdit(prompt)}
                    handleDelete={()=> handleDelete && handleDelete(prompt)}
                />
              ))}
            </div>
        </>
    )
}

export default Profile