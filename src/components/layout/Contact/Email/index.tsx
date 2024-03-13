import styles from "./styles.module.sass"

export function Email() {
  return (
    <div className={styles.email}>
      <div className={styles.email__bar}></div>
      <a className={styles.email__link} href="mailto:contato@gabriel-melo.tech">contato@gabriel-melo.tech</a>
    </div>
  )
}