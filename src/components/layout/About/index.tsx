import styles from "./styles.module.sass"

import { SiJavascript, SiReact, SiTypescript } from "react-icons/si"
import { RiVuejsFill } from "react-icons/ri"
import { GrNode, GrMysql } from "react-icons/gr"
import { FaHtml5, FaCss3Alt, FaSass, FaPhp } from "react-icons/fa"
import { Container } from "../../Container"
import { Title } from "../../Title"

export function About() {
  const technologies = [
    {
      icon: <SiJavascript />
    },
    {
      icon: <SiTypescript />
    },
    {
      icon: <SiReact />
    },
    {
      icon: <RiVuejsFill />
    },
    {
      icon: <GrNode />
    },
    {
      icon: <FaHtml5 />
    },
    {
      icon: <FaCss3Alt />
    },
    {
      icon: <FaSass />
    },
    {
      icon: <GrMysql />
    },
    {
      icon: <FaPhp />
    },
  ]

  return (
    <section id="sobre" className={styles.sobre}>
      <Container>
        <Title>Sobre mim</Title>
        <div className={styles.sobre__content}>
          <div className={styles.sobre__description}>
            <p>Olá, me chamo Gabriel Melo, e sou desenvolvedor full stack, minhas stacks são baseadas em <strong>JavaScript (afinal, Deus no céu e javascript na terra)</strong>, usando principalmente minha combinação favorita: <strong>React</strong> e <strong>Node</strong>❤️.</p>

            <p>Eu iniciei minha carreira como <strong>desenvolvedor</strong> em <strong>julho de 2020</strong>, em uma start-up software house focada em logística portuária, desde então eu venho passando por algumas empresas aprendendo diversas tecnologias, e acumulando projetos bem legais, entre eles um sistema de controle de <strong>descarga de navios</strong>, <strong>sistema de chamados</strong>, <strong>hot sites</strong>, entre outros projetos <strong>freelancers</strong> como uma <strong>landing page</strong> parar demonstração de produtos e um <strong>aplicativo de agendamento de bikes</strong>.</p>
          </div>
          <div className={styles.perfil__content}>
            <img className={styles.perfil__image} src={`https://github.com/gabrielmelogm.png`} alt="Foto de perfil" />
          </div>
        </div>

        <span className={styles.tecnologias__title}>Tecnologias que trabalho frequentemente:</span>
        <ul className={styles.tecnologias__list}>
          {
            technologies.map((tech, index) => (
              <li className={styles.tecnologias__item} key={index}>
                {tech.icon}
              </li>
            ))
          }
        </ul>
      </Container>
    </section>
  )
}