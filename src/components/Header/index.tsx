import { Container } from "../Container"
import styles from "./styles.module.sass"

export function Header() {
  const nav = [
    {
      label: "Home",
      link: "#"
    },
    {
      label: "Sobre",
      link: "#"
    },
    {
      label: "Stacks",
      link: "#"
    },
    {
      label: "Projetos",
      link: "#"
    },
  ]

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <h1 className={styles.logo}>Gabriel Melo</h1>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              {
                nav.map((item) => (
                  <li key={item.label} className={styles.nav__item}>
                    <a className={styles.nav__link} href="#">{item.label}</a>
                  </li>
                ))
              }
            <li className={styles.nav__item}>
              <button className={styles.header__button}>
                Currículo
              </button>
            </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}