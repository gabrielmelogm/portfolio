import styles from "./styles.module.sass"

import { Project } from "./Project"
import { Container } from "../../Container"
import { getProjects } from "../../../services/projects.service"
import { Title } from "../../Title"

export async function Projects() {
  let lastElement: {
    id: number
    align: "left" | "right"
  }

  const projects = await getProjects()

  return (
    <section id="projetos" className={styles.projetos}>
      <Container>
        <Title>Projetos</Title>
        <ul className={styles.projetos__list}>
          {
            projects.map((project, index) => {
              if (index === 0) {
                lastElement = {
                  id: index,
                  align: "right"
                }
              }

              if (index >= 1) {
                lastElement = {
                  id: index,
                  align: lastElement.align === "right" ? "left" : "right"
                }
              }
              return (
                <Project key={project.id} project={project} align={lastElement.align } />
              )
            })
          }
        </ul>
      </Container>
    </section>
  )
}