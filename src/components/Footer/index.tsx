import { Container } from "../Container"
import styles from "./styles.module.sass"

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <h2 className={styles.footer__header}>Próximos Passos</h2>
          <h3 className={styles.footer__title}>Entre em contato</h3>
          <p className={styles.footer__description}>Agradeço de coração se você chegou até aqui, espero ter gostado de quem é Gabriel e pense: “Hum, esse cara tem um potencial”, caso seja o seu caso, convido você a entrar em contato comigo pelo botão a baixo, e que futuros projetos nasçam.</p>
          <a className={styles.footer__button} href="https://api.whatsapp.com/send?phone=5513996798630&text=Tudo%20bem%20Gabriel%3F%20Vi%20seu%20site%20e%20gostaria%20de%20trocar%20uma%20ideia%20com%20voc%C3%AA" target="_blank" rel="noreferrer">Contato</a>
          <span className={styles.footer__signature}>Full stack developer by Gabriel Melo 💜</span>
        </div>
      </Container>
    </footer>
  )
}