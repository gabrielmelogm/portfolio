import { Container } from "../Container"
import Emoji from "../../assets/welcome-emoji.svg"
import styles from "./styles.module.sass"
import Image from "next/image"

export function Welcome() {
  return (
    <section className={styles.welcome}>
      <Container>
        <h1 className={styles.title}>Oi, me chamo</h1>
        <div className={styles.header}>
          <h1 className={styles.header__title}>Gabriel Melo.</h1>
          <span className={styles.header__image}>
            <Image src={Emoji} alt="Emoji de oi" width={55} height={55} />
          </span>
        </div>
        <h3 className={styles.subTitle}>Sou desenvolvedor full stack.</h3>
        <p className={styles.description}>
          Sou um <strong>jovem desenvolvedor curioso e movido por desafios</strong>, gosto de trabalhar com tecnologias diferentes e desvendar os mais complexos paradigmas até <strong>secar a minha garrafa de café</strong>.
        </p>
      </Container>
    </section>
  )
}