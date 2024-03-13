'use client'

import styles from "./styles.module.sass"

import { useState } from "react";
import { HiOutlineFolder } from "react-icons/hi";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { Container } from "../../Container";
import { Title } from "../../Title";

export interface RepositoriesProps {
  name: string
  description: string
  language: string
  homepage: string | null
  html_url: string
  topics: string[]
}

export function Repositories({ repositories }) {
  const [ maxRepos, setMaxRepos ] = useState(6)

  const filteredRepositories: RepositoriesProps[] = repositories.filter(filterDescription)
  
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
  
  function filterDescription(repo) {
    if (repo.description) return repo
  }

  if (repositories.length === 0) return <></>

  return (
    <section className={styles.outros__projetos}>
      <Container>
        <Title align="center">Outros Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            filteredRepositories.map((repository, index) => {
              const homepage = (repository.homepage) ? String(repository.homepage) : ''
              if (index <= maxRepos - 1) {
                return (
                  <li key={repository.name} className={styles.projetos__item}>
                    <div className={styles.projeto__header}>
                      <span className={styles.projeto__icon}><HiOutlineFolder /></span>
                      <div className={styles.projeto__link}>
                        <a className={styles.projeto__repositorio} href={repository.html_url} target="_blank" rel="noreferrer">
                          <BsGithub />
                        </a>
                        <a className={`${homepage ? styles.projeto__site : styles.site__disabled}`}
                        href={homepage.includes("https") ? `${homepage}` : `https://${homepage}`} target="_blank" rel="noreferrer">
                          <BsLink45Deg />
                        </a>
                      </div>
                    </div>
                    <div className={styles.projeto__content}>
                      <h2 className={styles.projeto__title}>
                        {capitalize(repository.name.replaceAll("-", " "))}
                      </h2>
                      <p className={styles.projeto__description}>
                        {repository.description}
                      </p>
                      <ul className={styles.stacks__list}>
                          {
                            repository.topics.map((topic, index) => (
                              <li key={index} className={styles.stacks__item}>
                                  {capitalize(topic.replaceAll("-", " "))}
                              </li>
                            ))
                          }
                      </ul>
                    </div>
                  </li>
                )
              } else {
                <></>
              }
            })
          }
        </ul>

        <div className={styles.projetos__footer}>
          <button
            onClick={() => maxRepos === 6 ? setMaxRepos(20) : setMaxRepos(6)}
            type="button"
            className={styles.projetos__button}
          >
            <span>{maxRepos === 6 ? "Ver mais" : "Ver menos"}</span>
          </button>
        </div>
      </Container>
    </section>
  )
}
