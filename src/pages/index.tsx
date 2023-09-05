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
import { api } from '../lib/api'
import { useEffect } from 'react'

export async function getStaticProps() {
  try {
    const res = await api.get("/projects?populate=*")
    const projects = res.data?.data
    const managerUrl = process.env.NEXT_PUBLIC_API_URL
    return {
      props: {
        projects,
        managerUrl
      },
      // revalidate: 21240 // 6h
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        projects: []
      }
    }
  }
}

export default function Home({ projects, managerUrl }) {
  async function getProjects() {
    console.log(`URL: ${process.env.NEXT_PUBLIC_API_URL}`)
    console.log(`URL: ${process.env.NEXT_PUBLIC_API_TOKEN}`)
    const response = await api.get('/projects')
    console.log(response.data)
  }

  useEffect(() => {
    getProjects()
  }, [])

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
        <Projetos projects={projects} managerUrl={managerUrl} />
        <OutrosProjetos />
        <Footer />
      </RepositoriesProvider>
    </>
  )
}
