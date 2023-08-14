import Image from 'next/image'
import styles from '@/styles/page.module.css'
import Hero from '@/Components/Hero.js'
import Header from '@/Components/Header.js'
import Feed from '@/Components/Feed'

export default function Home() {
  return (

    <main className={styles.main}>
      <Hero />
      <Feed />
    </main>
  )
}
