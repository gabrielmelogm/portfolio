import { Container } from "../Container"
import { Title } from "../Title"
import { Projeto } from "./Projeto"
import { v4 } from "uuid"
import styles from "./styles.module.sass"

import Dtmoney from "../../assets/dtmoney.png"
import MarioJump from "../../assets/mario-jump.png"
import { useEffect, useState } from "react"
import axios from "axios"

interface ProjetoProps {
  id?: string
  thumb: string
  category: string
  title: string
  description: string
  stacks: {
    name: string
  }[]
  repositoryUrl: string
  link: string
}

export function Projetos() {
  const [ projetos, setProjetos ] = useState<ProjetoProps[]>([])
  let lastElement: {
    id: number
    align: "left" | "right"
  }

  async function getProjetos() {
    await axios.get("/api/projects")
      .then(({data}) => {
        setProjetos([])
        setProjetos(data)
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