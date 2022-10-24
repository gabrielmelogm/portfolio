import Image, { StaticImageData } from "next/image"
import { BsGithub, BsLink45Deg } from "react-icons/bs"
import styles from "./styles.module.sass"

export interface ProjetoProps {
  projeto: {
    id?: string
    thumb: StaticImageData
    category: string
    title: string
    description: string
    stacks: string[]
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
            <Image className={styles.projeto__image} src={projeto.thumb} width={870} height={490} layout="responsive" alt="Imagem do projeto" />
          </div>
          <div className={styles.projeto__info}>
            <h2 className={styles.projeto__category}>{projeto.category}</h2>
            <h2 className={styles.projeto__title}>{projeto.title}</h2>
            <div className={styles.projeto__description}>
              <p className={styles.projeto__text}>{projeto.description}</p>
            </div>
            <ul className={styles.stacks__list}>
              {
                projeto.stacks.map((stack) => (
                  <li key={stack} className={styles.stacks__item}>
                    {stack}
                  </li>
                ))
              }
            </ul>
            <div className={styles.projeto__link}>
              <a className={styles.projeto__site} href={projeto.link}>
                <BsLink45Deg />
              </a>
              <a className={styles.projeto__repositorio} href={projeto.repositoryUrl}>
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
              <p className={styles.projeto__text}>{projeto.description}</p>
            </div>
            <ul className={`${styles.stacks__list} ${styles.stacks__left}`}>
              {
                projeto.stacks.map((stack) => (
                  <li key={stack} className={styles.stacks__item}>
                    {stack}
                  </li>
                ))
              }
            </ul>
            <div className={`${styles.projeto__link} ${styles.link__left}`}>
              <a className={styles.projeto__site} href={projeto.link}>
                <BsLink45Deg />
              </a>
              <a className={styles.projeto__repositorio} href={projeto.repositoryUrl}>
                <BsGithub />
              </a>
            </div>
          </div>
          <div className={styles.projeto__thumb}>
            <Image className={styles.projeto__image} src={projeto.thumb} width={870} height={490} layout="responsive" alt="Imagem do projeto" />
          </div>
        </li>
      )
     }
    </>
  )
}