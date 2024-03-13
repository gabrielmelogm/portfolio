import { BsGithub, BsInstagram } from "react-icons/bs"
import { FiLinkedin } from "react-icons/fi"
import styles from "./styles.module.sass"

export function SocialMedias() {
  return (
    <div className={styles.social__medias}>
      <div className={styles.social__bar}></div>
      <ul className={styles.media__list}>
        <li className={styles.media__item}>
          <a className={styles.media__link} href="https://github.com/gabrielmelogm" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </li>
        <li className={styles.media__item}>
          <a className={styles.media__link} href="https://www.instagram.com/gabrielmelo.raw/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
        </li>
        <li className={styles.media__item}>
          <a className={styles.media__link} href="https://www.linkedin.com/in/gabrielmelogm/" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </div>
  )
}