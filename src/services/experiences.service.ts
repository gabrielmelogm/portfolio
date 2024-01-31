import axios from "axios"

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
    const experiences = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/experiences?populate=*`, {
      maxBodyLength: Infinity,
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
    
    return experiences.data?.data.reverse()
  } catch (error) {
    return []
  }
}