import styles from "./styles.module.sass"

export const Title = ({children}) => (
  <div className={styles.header__title}>
    <h2 className={styles.title}>{children}</h2>
    <div className={styles.title__bar}>
    </div>
  </div>
)