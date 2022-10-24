import { Container } from "../Container";
import { Title } from "../Title";
import axios from "axios"
import styles from "./styles.module.sass"

import { HiOutlineFolder } from "react-icons/hi"
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { useEffect, useState } from "react";

interface RepositoriesProps {
  name: string
  description: string
  language: string
  homepage: string
  html_url: string
}

export function OutrosProjetos() {
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  const [ repositories, setRepositories ] = useState<RepositoriesProps[]>([])
  // const [ maxRepos, setMaxRepos ] = useState(6)

  async function getRepositories() {
    await axios.get(`https://api.github.com/users/gabrielmelogm/repos`)
      .then((response) => setRepositories(response.data))
      .catch((error) => console.log(error))
    console.log(repositories)
    setRepositories(repositories.filter(filterDescription))
  }

  function filterDescription(repository) {
    if (repository.description) return repository
  }

  useEffect(() => {
    getRepositories()
  }, [])

  return (
    <section className={styles.outros__projetos}>
      <Container>
        <Title align="center">Outros Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            repositories.map((repository, index) => {
              console.log(repository)
              if (index <= 5) {
                return (
                  <li key={repository.name} className={styles.projetos__item}>
                    <div className={styles.projeto__header}>
                      <span className={styles.projeto__icon}><HiOutlineFolder /></span>
                      <div className={styles.projeto__link}>
                        <a className={styles.projeto__repositorio} href={repository.html_url} target="_blank" rel="noreferrer">
                          <BsGithub />
                        </a>
                        <a className={`${repository.homepage ? styles.projeto__site : styles.site__disabled}`} href={repository.homepage && repository.homepage} target="_blank" rel="noreferrer">
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
                        <li className={styles.stacks__item}>
                          {repository.language}
                        </li>
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
            type="button"
            className={styles.projetos__button}
          >
            <span>Ver mais</span>
          </button>
        </div>
      </Container>
    </section>
  )
}