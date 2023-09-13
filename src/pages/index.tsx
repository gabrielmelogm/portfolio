import axios from 'axios'
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

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=*`, {
      maxBodyLength: Infinity,
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
    return {
      props: {
        projects: res.data?.data
      },
    }
    
  } catch (error) {
    return {
      props: {
        projects: []
      }
    }
  }
}

export default function Home({ projects }) {
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
        <Projetos projects={projects} />
        <OutrosProjetos />
        <Footer />
      </RepositoriesProvider>
    </>
  )
}
