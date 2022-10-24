import { Container } from "../Container"
import { Title } from "../Title"
import { Projeto, ProjetoProps } from "./Projeto"
import { v4 } from "uuid"
import styles from "./styles.module.sass"

import Dtmoney from "../../assets/dtmoney.png"
import MarioJump from "../../assets/mario-jump.png"

export function Projetos() {

  const projetos: ProjetoProps[] = [
    {
      projeto: {
        id: v4(),
        thumb: Dtmoney,
        category: "Projeto de Desafio",
        title: "Dtmoney",
        description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        stacks: ["Firebase", "Create React App", "Styled Components","Docker"],
        repositoryUrl: "#",
        link: "#"
      },
      align: "right"
    },
    {
      projeto: {
        id: v4(),
        thumb: MarioJump,
        category: "Projeto Pessoal",
        title: "Mario jump",
        description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        stacks: ["HTML5", "CSS3", "Vanilla Javascript"],
        repositoryUrl: "#",
        link: "#"
      },
      align: "left"
    },
  ]

  return (
    <section className={styles.projetos}>
      <Container>
        <Title>Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            projetos.map((item) => (
              <>
                <Projeto key={item.projeto.id} projeto={item.projeto} align={item.align} />
              </>
            ))
          }
        </ul>
      </Container>
    </section>
  )
}