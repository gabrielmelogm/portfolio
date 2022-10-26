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
        description: <p>Uma aplicação simples de <strong>controle de gastos</strong> que tem como funcionalidades <strong>cadastrar entradas e saídas</strong> por meio de login social com <strong>Google</strong> e <strong>Github</strong>.</p>,
        stacks: ["Firebase", "Create React App", "Styled Components","Docker"],
        repositoryUrl: "https://github.com/gabrielmelogm/dtmoney",
        link: "https://dtmoney-sigma-seven.vercel.app/"
      },
      align: "right"
    },
    {
      projeto: {
        id: v4(),
        thumb: MarioJump,
        category: "Projeto Pessoal",
        title: "Mario jump",
        description: <p>Um pequeno projeto que fiz do jogo que mais <strong>me marcou quando era criança</strong>, o jogo consiste em <strong>pular os canos para alcançar a maior distância possível</strong>.</p>,
        stacks: ["HTML5", "CSS3", "Vanilla Javascript"],
        repositoryUrl: "https://github.com/gabrielmelogm/mario-jump",
        link: "https://mario-jump-three.vercel.app/"
      },
      align: "left"
    },
  ]

  return (
    <section id="projetos" className={styles.projetos}>
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