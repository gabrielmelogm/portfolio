import { Container } from "../Container"
import { Title } from "../Title"
import { Projeto, ProjetoProps } from "./Projeto"
import { v4 } from "uuid"
import styles from "./styles.module.sass"

import Dtmoney from "../../assets/dtmoney.png"
import MarioJump from "../../assets/mario-jump.png"
import { useEffect, useState } from "react"
import axios from "axios"

export function Projetos() {
  const [ projetos, setProjetos ] = useState<ProjetoProps[]>([])

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

  console.log(projetos)

  return (
    <section id="projetos" className={styles.projetos}>
      <Container>
        <Title>Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            projetos.map((projeto) => (
              <>
                <Projeto key={projeto.id} projeto={projeto} />
              </>
            ))
          }
        </ul>
      </Container>
    </section>
  )
}