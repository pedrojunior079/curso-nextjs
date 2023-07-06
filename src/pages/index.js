import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Pagina Principal</title>
        <meta name="keyworkds" content="Roupas, Calçados, Boné" />
        <meta name="decription" content="Encontre a melhor roupara para voce"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <h1 className={styles.title}>Olá mundo Next.js</h1>   
      </div> 
      
    </>
  )
}
