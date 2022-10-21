import { Container } from "../Container"
import { Title } from "../Title"
import { Projeto, ProjetoProps } from "./Projeto"
import styles from "./styles.module.sass"

import Dtmoney from "../../assets/dtmoney.png"

export function Projetos() {

  const projetos: ProjetoProps[] = [
    {
      projeto: {
        thumb: Dtmoney,
        category: "Projeto de Desafio",
        title: "Dtmoney",
        description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        stacks: ["Firebase", "Create React App", "Styled Components","Docker"],
        repositoryUrl: "#",
        link: "#"
      }
    }
  ]
  
  

  return (
    <section className={styles.projetos}>
      <Container>
        <Title>Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            projetos.map((item, index) => (
              <Projeto key={index} projeto={item.projeto} />
            ))
          }
        </ul>
      </Container>
    </section>
  )
}