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
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at <strong>Hampden-Sydney College</strong>.
        </p>
      </Container>
    </section>
  )
}