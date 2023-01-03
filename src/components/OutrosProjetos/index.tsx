import { Container } from "../Container";
import { Title } from "../Title";
import axios from "axios"
import styles from "./styles.module.sass"

import { HiOutlineFolder } from "react-icons/hi"
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { useState } from "react";
import { useRepositories } from "../../hooks/useRepositories";

export function OutrosProjetos() {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
  const { repositories } = useRepositories()
  const filteredRepositories = repositories.filter(filterDescription)
  const [ maxRepos, setMaxRepos ] = useState(6)
  
  function filterDescription(repo) {
    if (repo.description) return repo
  }

  return (
    <section className={styles.outros__projetos}>
      <Container>
        <Title align="center">Outros Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            filteredRepositories.map((repository, index) => {
              if (index <= maxRepos - 1) {
                return (
                  <li key={repository.name} className={styles.projetos__item}>
                    <div className={styles.projeto__header}>
                      <span className={styles.projeto__icon}><HiOutlineFolder /></span>
                      <div className={styles.projeto__link}>
                        <a className={styles.projeto__repositorio} href={repository.html_url} target="_blank" rel="noreferrer">
                          <BsGithub />
                        </a>
                        <a className={`${repository.homepage ? styles.projeto__site : styles.site__disabled}`}
                        href={repository.homepage.includes("https") ? `${repository.homepage}` : `https://${repository.homepage}`} target="_blank" rel="noreferrer">
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
