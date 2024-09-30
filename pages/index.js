import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Ct from '../components/ct'
import Mobile from '../components/mobile'
export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    </Head>
      <Nav></Nav>
      <Hero></Hero>
      <Ct></Ct>
      <Mobile></Mobile>
    </>
  )
}
