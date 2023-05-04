import styles from "./styles.module.sass"

interface TitleProps {
  children: any
  align?: "left" | "center"
}

export const Title = ({children, align="left"}: TitleProps) => {
  return (
    <>
      {
        align === "left" ?
        (
          <div className={styles.header__title}>
            <h2 className={styles.title}>{children}</h2>
            <div className={styles.title__bar}>
            </div>
          </div>
        ) : 
        (
          <div className={styles.header__title__center}>
            <div className={styles.title__bar__side}>
            </div>
            <h2 className={styles.title}>{children}</h2>
            <div className={styles.title__bar__side}>
            </div>
          </div>
        )
      }
    </>
  )
}
