"use client";
import { useState, useEffect } from 'react'
import styles from '@/styles/page.module.css';
import PromptCard from './PromptCard';
const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const [prompts, setPrompts] = useState([]);

    const PromptCardList = ({data, handleTagClick}) => {
        return (
          <div className={styles.promptCard}>
              {data.map((prompt)=>(
                <PromptCard 
                    key={ prompt._id}
                    post={prompt}
                    handleTagClick={handleTagClick}
                />
              ))}
          </div>
        )
      }
    const handleSearch = ()=>{

    }
    const searchSubmit = () => {

    }

    const fetchPosts = async ()=>{
        const res = await fetch('/api/prompt');
        const data = await res.json();
        console.log(data);
        setPrompts(data)
        console.log(prompts,"dhsjd");
    }
    useEffect(()=>{
        fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])
    return (
        <>
            <section className={styles.FeedSection}>
                <form onSubmit={searchSubmit} className={styles.searchForm}>
                    <input
                        className={styles.searchBar}
                        type='text' 
                        placeholder='Search for a tag or username' 
                        value={searchText}
                        required
                        onChange={handleSearch}
                        />
                </form>

                <PromptCardList data={prompts} handleTagClick = {()=>{}} />
            </section>
        </>
    )
}

export default Feed