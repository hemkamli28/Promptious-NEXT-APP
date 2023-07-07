import styles from '@/styles/newprompt.module.css'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <>
            <section className={styles.formSection}>
                <h1 className={styles.pgTitle}>
                    Share New Post
                </h1>
                <p className={styles.shareDesc}></p>
                <form onSubmit={handleSubmit} className={styles.addForm}>
                    <label htmlFor="">Your AI Prompt</label>
                    <textarea
                        value={post.prompt}
                        className={styles.promptData}
                        rows={4}
                        cols={50}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='Enter Your AI Prompt here...'
                        required
                    ></textarea>
                    <label htmlFor="">Tags</label>

                    <input type="text"
                        value={post.tag}
                        className={styles.promptDatatag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        placeholder="#tag"
                        required
                    />
                    <div>
                        <button type='submit'
                            disabled={submitting}>
                            {submitting ? `${type}...` : type}
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form