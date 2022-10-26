import { Container } from "../Container"
import Logo from "../../assets/logo.svg"
import styles from "./styles.module.sass"
import Image from "next/image"

export function Header() {
  const nav = [
    {
      label: "Sobre",
      link: "#sobre"
    },
    {
      label: "Experiência",
      link: "#experiencia"
    },
    {
      label: "Projetos",
      link: "#projetos"
    },
    {
      label: "Contato",
      link: "#contato"
    },
  ]

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <h1 className={styles.logo}>
            <Image src={Logo} alt="Logo" width={50} height={50} />
          </h1>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              {
                nav.map((item) => (
                  <li key={item.label} className={styles.nav__item}>
                    <a className={styles.nav__link} href={item.link}>{item.label}</a>
                  </li>
                ))
              }
            <li className={styles.nav__item}>
              <a className={styles.header__button} href="https://drive.google.com/file/d/1kTk9K6L6SoeStSiVpaq3uM-69EuK9lrk/view?usp=sharing" target="_blank" rel="noreferrer">
                Currículo
              </a>
            </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}