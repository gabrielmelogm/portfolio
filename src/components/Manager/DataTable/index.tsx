import styles from "./styles.module.sass"
import { MdEdit, MdDelete } from "react-icons/md"
import { ReactElement } from "react"

interface DataTableProps {
  thumb: string
  category: string
  title: string
  description: ReactElement
  stacks: string[]
  repositoryUrl: string
  link: string
}

export function DataTable() {
  const data: DataTableProps[] = [
    {
      thumb: "#",
      category: "Projeto de Desafio",
      title: "Dtmoney",
      description: <p>Uma aplicação simples de <strong>controle de gastos</strong> que tem como funcionalidades <strong>cadastrar entradas e saídas</strong> por meio de login social com <strong>Google</strong> e <strong>Github</strong>.</p>,
      stacks: ["Firebase", "Create React App", "Styled Components","Docker"],
      repositoryUrl: "https://github.com/gabrielmelogm/dtmoney",
      link: "https://dtmoney-sigma-seven.vercel.app/"
    },
  ]

  return (
    <div className={styles.datatable}>
      <h2 className={styles.title}>Projetos</h2>
      <div className={`${styles.row} ${styles.head}}`}>
        <div className={`${styles.small} ${styles.reverse}`}><label htmlFor="reverse"></label></div>
        <div className={styles.reverse}><label htmlFor="reverse">Categoria</label></div>
        <div className={styles.reverse}><label htmlFor="reverse">Título</label></div>
        <div className={styles.type}><label htmlFor="type">Descrição</label></div>
      </div>

      <div className={styles.content}>
        {
          data.map((item, index) => (
            <div key={index} className={`${styles.row} ${styles.science}`}>
              <div className={`${styles.small} ${styles.actions}`}>
                <button className={styles.edit}>
                  <MdEdit />
                </button>
                <button className={styles.delete}>
                  <MdDelete />
                </button>
              </div>
              <div className={styles.dataRow}>{item.category}</div>
              <div className={styles.dataRow}>{item.title}</div>
              <div className={styles.dataRow}>
                {item.description}
              </div>
            </div>
          ))
        }
      </div>
  </div>
  )
}