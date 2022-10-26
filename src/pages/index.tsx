import Head from 'next/head'
import styles from '../../styles/Home.module.sass'
import { Email } from '../components/Contato/Email'
import { SocialMedias } from '../components/Contato/SocialMedias'
import { Experiencia } from '../components/Experiencia'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { OutrosProjetos } from '../components/OutrosProjetos'
import { Projetos } from '../components/Projetos'
import { Sobre } from '../components/Sobre'
import { Welcome } from '../components/Welcome'
import { RepositoriesProvider } from '../hooks/useRepositories'

export default function Home() {
  return (
    <>
      <RepositoriesProvider>
        <Head>
          <title>Gabriel Melo | Portfólio</title>
        </Head>
        <Header />
        <SocialMedias />
        <Email />
        <Welcome />
        <Sobre />
        <Experiencia />
        <Projetos />
        <OutrosProjetos />
        <Footer />
      </RepositoriesProvider>
    </>
  )
}
