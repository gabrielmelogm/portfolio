import styles from "./styles.module.sass"
import { MdEdit, MdDelete } from "react-icons/md"
import { ReactElement } from "react"
import parse from "html-react-parser"

interface DataTableProps {
  columns: {
    label: string
    size?: "small" | "large"
  }[]
  data: any[]
}

export function DataTable({ columns, data }: DataTableProps) {

  return (
    <div className={styles.datatable}>
      <h2 className={styles.title}>Projetos</h2>
      <div className={`${styles.row} ${styles.head}}`}>
        <div className={`${styles.small} ${styles.reverse}`}><label htmlFor="reverse"></label></div>
        {
          columns.map((column) => (
            <div key={column.label} className={styles.reverse}><label htmlFor="reverse">{column.label}</label></div>
          ))
        }
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
              <div className={styles.dataRow}>
                <img className={styles.thumb} src={item.thumb ? item.thumb : ''} alt={item.title} />
              </div>
              <div className={styles.dataRow}>{item.category}</div>
              <div className={styles.dataRow}>{item.title}</div>
              <div className={styles.dataRow}>
                {parse(item.description)}
              </div>
            </div>
          ))
        }
      </div>
  </div>
  )
}