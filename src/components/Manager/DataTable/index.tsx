import styles from "./styles.module.sass"
import { MdEdit, MdDelete } from "react-icons/md"

export function DataTable() {
  const data = [
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
    <table className={styles.table}>
      <thead className={styles.thead}>
      <tr className={styles.tr}>
        <th className={styles.th} scope="col">Title</th>
        <th className={styles.th} scope="col">Category</th>
        <th className={styles.th} scope="col">Description</th>
        <th className={styles.th} scope="col"></th>
      </tr>
    </thead>
    <tbody className={styles.tbody}>
      {
        data.map((item, index) => (
          <tr key={index} className={styles.tr__body}>
            <th
              className={styles.th__body}
              scope="row"
            >
              {item.title}
            </th>
            <td
              className={styles.td__body}
              data-title="Category"
              align="center"
            >
              {item.category}
            </td>
            <td 
              className={styles.td__body}
              data-title="Description"
            >
              {item.description}
            </td>
            <td 
              className={styles.td__body}
              data-title="Description"
            >
              <div className={styles.actions}>
                <button className={styles.button}>
                  <MdEdit />
                </button>
                <button className={styles.button}>
                  <MdDelete />
                </button>
              </div>
            </td>
          </tr>
        ))
      }
    </tbody>
    </table>
  )
}