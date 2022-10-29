import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Login.module.sass"

import Logo from "../../assets/logo.svg"
import { BsGoogle } from "react-icons/bs"

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.login}>
        <div className={styles.content}>
          <Image className={styles.logo} src={Logo} alt="Logo" />
          <h1 className={styles.title}>Login</h1>
          <h2 className={styles.subtitle}>Faça login social</h2>
          <button className={styles.button}>
            <BsGoogle />
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  )
}