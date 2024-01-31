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
    const repositories = await axios.get(`https://api.github.com/users/gabrielmelogm/repos`)
    return repositories.data
  } catch (error) {
    return []    
  }
}