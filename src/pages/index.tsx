import Head from 'next/head'
import styles from '../../styles/Home.module.sass'
import { Email } from '../components/Contato/Email'
import { SocialMedias } from '../components/Contato/SocialMedias'
import { Experiencia } from '../components/Experiencia'
import { Header } from '../components/Header'
import { Sobre } from '../components/Sobre'
import { Welcome } from '../components/Welcome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Melo | Portfólio</title>
      </Head>
      <Header />
      <SocialMedias />
      <Email />
      <Welcome />
      <Sobre />
      <Experiencia />
    </>
  )
}
