import axios from "axios"
import { ProjetoProps } from "../components/Projetos/Projeto"

export async function getProjects(): Promise<ProjetoProps[] | []> {
  try {
    const projects = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=*`, {
      maxBodyLength: Infinity,
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
    return projects.data?.data
  } catch (error) {
    return []
  }
}