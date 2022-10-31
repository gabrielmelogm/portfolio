import { signOut } from "next-auth/react"
import Head from "next/head"
import { DataTable } from "../../components/Manager/DataTable"
import { SideBar } from "../../components/Manager/SideBar"
import { useRequireAuth } from "../../utils/useRequireAuth"

import styles from "../../../styles/manager/Main.module.sass"

export default function Main() {
  const session = useRequireAuth()

  return (
    <>
      <Head>
        <title>Menu principal</title>
      </Head>
      <div className={styles.main}>
        <SideBar />
        <div className={styles.table}>
          <DataTable />
        </div>
      </div>
    </>
  )
}