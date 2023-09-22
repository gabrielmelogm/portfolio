import Image from "next/image"
import parse from "html-react-parser"

import styles from "./styles.module.sass"

import { BsGithub, BsLink45Deg } from "react-icons/bs"

export interface ProjetoProps {
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

export function Projeto({projeto, align}: ProjetoProps) {
  return (
    <li className={styles.projeto__item}>
      <h3 className={`${styles.projeto__category} ${styles.projeto__category_mobile}`}>{projeto.attributes.category}</h3>
      <h2 className={`${styles.projeto__title} ${styles.projeto__title_mobile}`}>{projeto.attributes.title}</h2>
      <Thumb projeto={projeto} align={align} mobile/>
      {
        (align === "right") ?
        (<Thumb projeto={projeto} align={align} />) : (<></>)
      }
      <div className={`${styles.projeto__info} ${(align === "left") && styles.info__left}`}>
        <h3 className={styles.projeto__category}>{projeto.attributes.category}</h3>
        <h2 className={styles.projeto__title}>{projeto.attributes.title}</h2>
        <div className={`${styles.projeto__description} ${(align === "left") && styles.description__left}`}>
          {parse(projeto.attributes.description)}
        </div>
        <Stacks stacks={projeto.attributes.stacks} align={align} />
        <div className={`${styles.projeto__link} ${(align === "left") && styles.link__left}`}>
          <a className={styles.projeto__site} href={projeto.attributes.link} target="_blank" rel="noreferrer">
            <BsLink45Deg />
          </a>
          <a className={styles.projeto__repositorio} href={projeto.attributes.repositoryUrl} target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </div>
      </div>
      {
        (align === "left") ?
        (<Thumb projeto={projeto} align={align} />) : (<></>)
      }
    </li>
  )
}

interface IThumbProps {
  projeto: any
  align?: "right" | "left"
  mobile?: boolean
}

function Thumb({ projeto, align="right", mobile }: IThumbProps) {
  return (
    <div
      className={`${styles.projeto__thumb} ${(align === "left") && styles.projeto__thumb_left} ${(mobile) && styles.projeto__thumb_mobile}`}
    >
      <Image
        className={styles.projeto__image}
        layout="responsive"
        width={projeto.attributes.thumb.data.attributes.width}
        height={projeto.attributes.thumb.data.attributes.height}
        src={`${process.env.NEXT_PUBLIC_API_URL}${projeto.attributes.thumb.data.attributes.url}`}
        alt={projeto.attributes.thumb.data.attributes.alternativeText || projeto.attributes.title}
      />
    </div>
  )
}

interface IStacksProps {
  stacks: string
  align?: 'left' | 'right'
}

function Stacks({ stacks, align="right" }: IStacksProps) {
  return (
    <ul className={`${styles.stacks__list} ${(align === "left") && styles.stacks__left}`}>
      {
        stacks.split(",").map((stack) => (
          <li key={stack} className={styles.stacks__item}>
            {stack}
          </li>
        ))
      }
    </ul>
  )
}