import { signOut } from "next-auth/react"
import Head from "next/head"
import { DataTable } from "../../components/Manager/DataTable"
import { SideBar } from "../../components/Manager/SideBar"
import { useRequireAuth } from "../../utils/useRequireAuth"
import axios from "axios"

import styles from "../../../styles/manager/Main.module.sass"
import { ReactElement, useEffect, useState } from "react"

interface DataTableProps {
  id: string
  thumb: string
  category: string
  title: string
  description: ReactElement | string
  repositoryUrl: string
  link: string
  stacks: {
    name: string
  }[]
}

export default function Main() {
  const session = useRequireAuth()
  const [ projects, setProjects ] = useState<DataTableProps[]>([])

  async function GetProjects() {
    await axios.get("/api/projects")
      .then(({data}) => setProjects(data))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    GetProjects()
  }, [])

  return (
    <>
      <Head>
        <title>Menu principal</title>
      </Head>
      <div className={styles.main}>
        <SideBar />
        <div className={styles.table}>
          <DataTable 
            columns={[
              {
                label: "Thumb"
              },
              {
                label: "Categoria",
              },
              {
                label: "Título",
              },
              {
                label: "Descrição",
              },
            ]}
            data={projects}
          />
        </div>
      </div>
    </>
  )
}