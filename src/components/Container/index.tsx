import styles from "./styles.module.sass"

export const Container = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
)