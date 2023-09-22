import axios from "axios"
import styles from "./styles.module.sass"

import { Container } from "../Container"
import { Title } from "../Title"
import { Projeto } from "./Projeto"

interface ProjetoProps {
  id?: number
  attributes: {
    title: string
    category: string
    description: string
    stacks: string
    repositoryUrl: string
    link: string
    thumb: {
      data: {
        attributes: {
          name: string
          alternativeText?: string
          caption?: string
          width: number
          height: number
          url: string
        }
      }
    }
  }
}

interface IProjectsComponent {
  projects: ProjetoProps[]
}
export async function getProjects(): Promise<ProjetoProps[] | []> {
  try {
    const projects = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=*`, {
      maxBodyLength: Infinity,
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
    return projects.data?.data
  } catch (error) {
    return []
  }
}

export function Projetos({projects}: IProjectsComponent) {
  let lastElement: {
    id: number
    align: "left" | "right"
  }


  return (
    <section id="projetos" className={styles.projetos}>
      <Container>
        <Title>Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            projects.map((projeto, index) => {
              if (index === 0) {
                lastElement = {
                  id: index,
                  align: "right"
                }
              }

              if (index >= 1) {
                lastElement = {
                  id: index,
                  align: lastElement.align === "right" ? "left" : "right"
                }
              }
              return (
                <Projeto key={projeto.id} projeto={projeto} align={lastElement.align } />
              )
            })
          }
        </ul>
      </Container>
    </section>
  )
}