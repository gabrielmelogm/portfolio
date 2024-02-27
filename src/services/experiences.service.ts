import { gql } from "@apollo/client"
import { client } from "../lib/graphql"

export interface IExperiencesProps {
  id?: number
  attributes: {
    name: string
    kind: string
    description: string
    date_start: string
    date_finish?: string
    current: boolean
    profile: {
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

export async function getExperiences(): Promise<IExperiencesProps[]> {
  try {
    const GET_EXPERIENCES = gql`
      query {
        experiences {
          data {
            attributes {
              name,
              kind,
              current,
              description,
              date_start,
              date_finish,
              profile {
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
      query: GET_EXPERIENCES
    })

    const experiences = data.experiences.data

    return experiences
  } catch (error) {
    return []
  }
}