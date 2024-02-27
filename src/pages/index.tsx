import { GetServerSideProps, GetServerSidePropsContext } from 'next'
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
import { getProjects } from '../services/projects.service'
import { getRepositories } from '../services/repositories.service'
import { getExperiences } from '../services/experiences.service'
import { useEffect } from 'react'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=21600000, stale-while-revalidate=600' // Revalidate in 6 hours
    )

    const [ projects, repositories, experiences ] = await Promise.all([getProjects(), getRepositories(), getExperiences()])

    return {
      props: {
        projects,
        repositories,
        experiences
      },
    }
    
  } catch (error) {
    return {
      props: {
        projects: [],
        repositories: [],
        experiences: []
      },
    }
  }
}

export default function Home({ projects, repositories, experiences }) {

  async function getData() {
    const response = await getExperiences()
    console.log(response)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <SocialMedias />
      <Email />
      <Welcome />
      <Sobre />
      <Experiencia experiences={experiences} />
      <Projetos projects={projects} />
      <OutrosProjetos repositories={repositories} />
      <Footer />
    </>
  )
}
