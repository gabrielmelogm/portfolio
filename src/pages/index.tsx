import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import styles from '../../styles/Home.module.sass'
import { Email } from '../components/Contato/Email'
import { SocialMedias } from '../components/Contato/SocialMedias'
import { Experiencia } from '../components/Experiencia'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { OutrosProjetos, getRepositories } from '../components/OutrosProjetos'
import { Projetos, getProjects } from '../components/Projetos'
import { Sobre } from '../components/Sobre'
import { Welcome } from '../components/Welcome'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    context.res.setHeader(
      'Cache-Control',
      'public, s-maxage=21600000, stale-while-revalidate=600' // Revalidate in 6 hours
    )

    const projects = await getProjects()

    const repositories = await getRepositories()

    return {
      props: {
        projects,
        repositories
      },
    }
    
  } catch (error) {
    return {
      props: {
        projects: [],
        repositories: []
      },
    }
  }
}

export default function Home({ projects, repositories }) {
  return (
    <>
      <Header />
      <SocialMedias />
      <Email />
      <Welcome />
      <Sobre />
      <Experiencia />
      <Projetos projects={projects} />
      <OutrosProjetos repositories={repositories} />
      <Footer />
    </>
  )
}
