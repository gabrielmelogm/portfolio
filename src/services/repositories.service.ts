import axios from "axios"

export interface RepositoriesProps {
  name: string
  description: string
  language: string
  homepage: string | null
  html_url: string
  topics: string[]
}

export async function getRepositories(): Promise<RepositoriesProps[] | []> {
  try {
    const response = await axios.get(`https://api.github.com/users/gabrielmelogm/repos`)

    const order = response.data.sort((a, b) => {
      return Number(new Date(a.updated_at)) - Number(new Date(b.updated_at))
    })

    const repositories = order.reverse()

    return repositories
  } catch (error) {
    return []    
  }
}