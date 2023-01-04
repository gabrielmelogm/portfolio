import { BsGithub, BsLink45Deg } from "react-icons/bs"
import styles from "./styles.module.sass"
import parse from "html-react-parser"

export interface ProjetoProps {
  projeto: {
    id?: string
    thumb: string
    category: string
    title: string
    description: string
    stacks: {
      name: string
    }[]
    repositoryUrl: string
    link: string
  }
  align?: "right" | "left"
}

export function Projeto({projeto, align, ...props}: ProjetoProps) {
  return (
    <>
     {
      align === "right" ? (
        <li className={styles.projeto__item}>
          <div className={styles.projeto__thumb}>
            <img className={styles.projeto__image} src={projeto.thumb} alt="Imagem do projeto" />
          </div>
          <div className={styles.projeto__info}>
            <h2 className={styles.projeto__category}>{projeto.category}</h2>
            <h2 className={styles.projeto__title}>{projeto.title}</h2>
            <div className={styles.projeto__description}>
              <p className={styles.projeto__text}>{parse(projeto.description)}</p>
            </div>
            <ul className={styles.stacks__list}>
              {
                projeto.stacks.map((stack) => (
                  <li key={stack.name} className={styles.stacks__item}>
                    {stack.name}
                  </li>
                ))
              }
            </ul>
            <div className={styles.projeto__link}>
              <a className={styles.projeto__site} href={projeto.link} target="_blank" rel="noreferrer">
                <BsLink45Deg />
              </a>
              <a className={styles.projeto__repositorio} href={projeto.repositoryUrl} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </div>
          </div>
        </li>
      ) :
      (
        <li className={styles.projeto__item}>
          <div className={`${styles.projeto__info} ${styles.info__left}`}>
            <h2 className={styles.projeto__category}>{projeto.category}</h2>
            <h2 className={styles.projeto__title}>{projeto.title}</h2>
            <div className={`${styles.projeto__description} ${styles.description__left}`}>
              <p className={styles.projeto__text}>{parse(projeto.description)}</p>
            </div>
            <ul className={`${styles.stacks__list} ${styles.stacks__left}`}>
              {
                projeto.stacks.map((stack) => (
                  <li key={stack.name} className={styles.stacks__item}>
                    {stack.name}
                  </li>
                ))
              }
            </ul>
            <div className={`${styles.projeto__link} ${styles.link__left}`}>
              <a className={styles.projeto__site} href={projeto.link} target="_blank" rel="noreferrer">
                <BsLink45Deg />
              </a>
              <a className={styles.projeto__repositorio} href={projeto.repositoryUrl} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </div>
          </div>
          <div className={styles.projeto__thumb}>
            <img className={styles.projeto__image} src={projeto.thumb} alt="Imagem do projeto" />
          </div>
        </li>
      )
     }
    </>
  )
}