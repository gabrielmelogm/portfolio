import Image from "next/image";
import { useRequireAuth } from "../../../utils/useRequireAuth";
import styles from "./styles.module.sass"

import { BsCodeSlash, BsGlobe } from "react-icons/bs"

export function SideBar() {
  const session = useRequireAuth()

  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <Image src={session?.user.image} alt="Profile image" width={100} height={100} />
      </div>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <BsGlobe />
        </li>
        <li className={styles.menu__item}>
          <BsCodeSlash />
        </li>
      </ul>
    </div>
  );
}
