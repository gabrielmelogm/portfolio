import styles from "./styles.module.sass"

import { useEffect, useState } from "react"
import ReactLoading from "react-loading"

import { Container } from "../Container"
import { Title } from "../Title"
import { Projeto } from "./Projeto"
import { api } from "../../lib/api"

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

export function Projetos() {
  const [ loading, setLoading ] = useState(true)
  const [ projetos, setProjetos ] = useState<ProjetoProps[]>([])
  let lastElement: {
    id: number
    align: "left" | "right"
  }

  async function getProjetos() {
    setLoading(true)
    await api.get("/projects?populate=*")
      .then(({data}) => {
        setProjetos([])
        setProjetos(data?.data)
        setLoading(false)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getProjetos()
  }, [])

  return (
    <section id="projetos" className={styles.projetos}>
      <Container>
        <Title>Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            (loading) ? (
              <ReactLoading type="bubbles" color="#8257E5" />
            ) :
            projetos.map((projeto, index) => {
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