import { Container } from "../Container"
import styles from "./styles.module.sass"

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <h2 className={styles.footer__header}>Próximos Passos</h2>
          <h3 className={styles.footer__title}>Entre em contato</h3>
          <p className={styles.footer__description}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem.</p>
          <button className={styles.footer__button}>Contato</button>
          <span className={styles.footer__signature}>Full stack developer by Gabriel Melo 💜</span>
        </div>
      </Container>
    </footer>
  )
}