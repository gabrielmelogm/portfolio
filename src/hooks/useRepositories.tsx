import axios from "axios"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface RepositoriesProps {
  name: string
  description: string
  language: string
  homepage: string
  html_url: string
  topics: string[]
}

interface RepositoriesContextData {
  repositories: RepositoriesProps[]
}

interface RepositoriesProviderProps {
  children: ReactNode
}

const Repositories = createContext<RepositoriesContextData>({} as RepositoriesContextData)


export function RepositoriesProvider({children}: RepositoriesProviderProps) {
  const [ repositories, setRepositories ] = useState<RepositoriesProps[]>([])

  async function getRepositories() {
    const response = await axios.get(`https://api.github.com/users/gabrielmelogm/repos`)
    setRepositories(response.data)
  }

  useEffect(() => {
    getRepositories()
  }, [])

  return (
    <Repositories.Provider value={{ repositories }}>
      {children}
    </Repositories.Provider>
  )
}

export function useRepositories() {
  const context = useContext(Repositories)
  return context
}