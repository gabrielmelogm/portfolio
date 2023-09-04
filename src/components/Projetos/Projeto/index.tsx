import { BsGithub, BsLink45Deg } from "react-icons/bs"
import styles from "./styles.module.sass"
import parse from "html-react-parser"
import Image from "next/image"

export interface ProjetoProps {
  managerUrl: string
  projeto: {
    id?: number
    attributes: {
      title: string
      category: string
      description: string
      stacks: string
      repositoryUrl: string
      link: string
      thumb: {
        data: {
          attributes: {
            name: string
            alternativeText?: string
            caption?: string
            width: number
            height: number
            url: string
          }
        }
      }
    }
  }
  align?: "right" | "left"
}

export function Projeto({projeto, align, managerUrl, ...props}: ProjetoProps) {
  return (
    <>
     {
      align === "right" ? (
        <li className={styles.projeto__item}>
          <div className={styles.projeto__thumb}>
            <Image
              layout="responsive"
              className={styles.projeto__image}
              width={projeto.attributes.thumb.data.attributes.width}
              height={projeto.attributes.thumb.data.attributes.height}
              src={`${managerUrl}${projeto.attributes.thumb.data.attributes.url}`}
              alt={projeto.attributes.thumb.data.attributes.alternativeText}
            />
          </div>
          <div className={styles.projeto__info}>
            <h2 className={styles.projeto__category}>{projeto.attributes.category}</h2>
            <h2 className={styles.projeto__title}>{projeto.attributes.title}</h2>
            <div className={styles.projeto__description}>
              <p className={styles.projeto__text}>{parse(projeto.attributes.description)}</p>
            </div>
            <ul className={styles.stacks__list}>
              {
                projeto.attributes.stacks.split(",").map((stack) => (
                  <li key={stack} className={styles.stacks__item}>
                    {stack}
                  </li>
                ))
              }
            </ul>
            <div className={styles.projeto__link}>
              <a className={styles.projeto__site} href={projeto.attributes.link} target="_blank" rel="noreferrer">
                <BsLink45Deg />
              </a>
              <a className={styles.projeto__repositorio} href={projeto.attributes.repositoryUrl} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </div>
          </div>
        </li>
      ) :
      (
        <li className={styles.projeto__item}>
          <div className={`${styles.projeto__info} ${styles.info__left}`}>
            <h2 className={styles.projeto__category}>{projeto.attributes.category}</h2>
            <h2 className={styles.projeto__title}>{projeto.attributes.title}</h2>
            <div className={`${styles.projeto__description} ${styles.description__left}`}>
              <p className={styles.projeto__text}>{parse(projeto.attributes.description)}</p>
            </div>
            <ul className={`${styles.stacks__list} ${styles.stacks__left}`}>
              {
                projeto.attributes.stacks.split(",").map((stack) => (
                  <li key={stack} className={styles.stacks__item}>
                    {stack}
                  </li>
                ))
              }
            </ul>
            <div className={`${styles.projeto__link} ${styles.link__left}`}>
              <a className={styles.projeto__site} href={projeto.attributes.link} target="_blank" rel="noreferrer">
                <BsLink45Deg />
              </a>
              <a className={styles.projeto__repositorio} href={projeto.attributes.repositoryUrl} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </div>
          </div>
          <div className={styles.projeto__thumb}>
            <Image
              className={styles.projeto__image}
              layout="responsive"
              width={projeto.attributes.thumb.data.attributes.width}
              height={projeto.attributes.thumb.data.attributes.height}
              src={`${managerUrl}${projeto.attributes.thumb.data.attributes.url}`}
              alt={projeto.attributes.thumb.data.attributes.alternativeText}
            />
          </div>
        </li>
      )
     }
    </>
  )
}