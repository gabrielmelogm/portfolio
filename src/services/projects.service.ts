import { ProjetoProps } from "../components/Projetos/Projeto"
import { gql } from "@apollo/client"
import { client } from "../lib/graphql"

export async function getProjects(): Promise<ProjetoProps[] | []> {
  try {
    const GET_PROJECTS = gql`
      query {
        projects {
          data {
            id,
            attributes {
              title,
              category,
              description,
              stacks,
              link,
              repositoryUrl,
              thumb {
                data {
                  attributes {
                    url,
                    alternativeText,
                    width,
                    height
                  }
                }
              }
            }
          }
        }
      }
    `

    const { data } = await client.query({
      query: GET_PROJECTS
    })

    const projects = data.projects.data

    return projects
  } catch (error) {
    return []
  }
}