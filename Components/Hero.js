import React from 'react'
import styles from '@/styles/hero.module.css'

const Hero = () => {
    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.title}>Discover & Share</h1>
                <h1 className={styles.titleGradient}>AI Powered Prompts</h1>
            <p className={styles.heroDescription}>Promptious is an open-source AI programming tool for modern world to discover, create & share creative prompt</p>
            </div>
        </>
    )
}


export default Hero