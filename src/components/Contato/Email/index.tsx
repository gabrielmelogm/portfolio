import styles from "./styles.module.sass"

export function Email() {
  return (
    <div className={styles.email}>
      <div className={styles.email__bar}></div>
      <a className={styles.email__link} href="mailto:melogoncalvesbiel@gmail.com">melogoncalvesbiel@gmail.com</a>
    </div>
  )
}