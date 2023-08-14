"use client";
import styles from "@/styles/page.module.css";
import { MdOutlineContentCopy, MdDone } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
const imageStyle = {
  borderRadius: "10rem",
  marginRight: "1rem"
}
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copy, setCopy] = useState("");
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleCopy = () => {
    setCopy(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopy(""), 2000);
  };

  return (
    <>
      <div className={styles.promptCard}>
        <div className={styles.card}>
          <div className={styles.promptuser}>
            <div className={styles.userData}>
              <Image src={post.creator.image} alt="profile" height={40} width={40} style={imageStyle} />
              <div><h4 className={styles.creatorName}>{post.creator.username}</h4>
                <p className={styles.creatorEmail}>{post.creator.email}</p>
              </div>
            </div>
            <div className={styles.topBtns}>
              <div onClick={handleCopy} className={styles.cardBtns}>
                {copy === post.prompt ? <MdDone /> : <MdOutlineContentCopy />}
              </div>

              {session?.user.id === post.creator._id && pathName === '/profile' &&
                (
                  <div onClick={handleEdit} className={styles.cardBtns}>
                    <AiFillEdit />
                  </div>
                )}
            </div>
          </div>
          <div className={styles.promptData}>
            <p className={styles.promptdesc}>{post.prompt.length > 140 ? `${post.prompt.slice(0, 140)}...` : post.prompt}</p>
            <p className={styles.promptTag}>#{post.tag}</p>
          </div>
          {session?.user.id === post.creator._id && pathName === '/profile' &&
            (
              <div className={styles.deleteBtn}>
                <button onClick={handleDelete} className={styles.delBtn}>Delete</button>
              </div>
            )
          }
        </div>
      </div>


    </>
  )
}

export default PromptCard