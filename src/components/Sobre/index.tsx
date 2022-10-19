import Image from "next/image"
import { Container } from "../Container"
import { Title } from "../Title"
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si"
import { RiVuejsFill } from "react-icons/ri"
import { GrNode, GrMysql } from "react-icons/gr"
import { FaHtml5, FaCss3Alt, FaSass, FaPhp } from "react-icons/fa"
import styles from "./styles.module.sass"

export function Sobre() {
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
    <section className={styles.sobre}>
      <Container>
        <Title>Sobre mim</Title>
        <div className={styles.sobre__content}>
          <div className={styles.sobre__description}>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem.</p>

            <p>Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum <strong>comes from sections 1.10.32 and 1.10.33 of</strong> de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the <strong>Renaissance</strong>. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
          </div>
          <div className={styles.perfil__image}>
            <Image src={`https://github.com/gabrielmelogm.png`} alt="Foto de perfil" width={400} height={400} />
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