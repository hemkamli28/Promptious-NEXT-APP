import Image from 'next/image'
import styles from '@/styles/page.module.css'
import Hero from '@/Components/Hero.js'
import Header from '@/Components/Header.js'

export default function Home() {
  return (

    <main className={styles.main}>
      <Hero />
    </main>
  )
}
