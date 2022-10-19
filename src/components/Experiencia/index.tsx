import { Container } from "../Container"
import { Title } from "../Title"
import  Maximize from "../../assets/logo-maximize.png"
import styles from "./styles.module.sass"
import Image from "next/image"

export function Experiencia() {
  return (
    <section className={styles.experiencia}>
      <Container>
        <Title>Experiência</Title>
        <div className={styles.experiencia__content}>
          <div className={styles.experiencia__header}>
            <h3 className={styles.empresa__title}>Maximize</h3>
            <h4 className={styles.empresa__subtitle}>Software house focada em comunicação</h4>
          </div>

          <div className={styles.empresa__profile}>
            <Image src={Maximize} alt="Logo da maximize" width={130} height={70} />
          </div>

          <p className={styles.empresa__description}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem.</p>
        </div>
      </Container>
    </section>
  )
}