import styles from '@/styles/newprompt.module.css'

const Form = ({ title,type, post, setPost, submitting, handleSubmit }) => {
    return (
        <>
            <section className={styles.formSection}>
               <div className={styles.pgTitle}> <h1 >
                    {title} Prompt
                </h1>
                </div>
                <div className={styles.shareDesc}><p >Unleash the power of your creativity and join a vibrant community of minds as you share your most cherished AI prompts</p>
                </div>
                <div>
                <form onSubmit={handleSubmit} className={styles.addForm}>
                    <label className={styles.inputName}>Your AI Prompt</label>
                    <textarea
                        value={post.prompt}
                        className={styles.promptContent}
                        rows={7}
                        cols={60}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='Enter Your AI Prompt here...'
                        required
                    ></textarea>
                    <label  className={styles.inputName}>Tags</label>

                    <input type="text"
                        value={post.tag}
                        className={styles.promptTag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        placeholder="#tag"
                        required
                    />
                    <div className={styles.formBtn}>
                        <button type='submit' 
                            className={styles.submitButton}
                        disabled={submitting}>
                            {submitting ? `${type}...` : type}
                        </button>
                    </div>
                </form>
                </div>
            </section>
        </>
    )
}

export default Form