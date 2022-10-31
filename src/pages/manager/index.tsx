import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/manager/Login.module.sass"

import { signIn, signOut } from "next-auth/react"

import Logo from "../../assets/logo.svg"
import { BsGithub } from "react-icons/bs"
import { useRouter } from "next/router";
import { useRequireAuth } from "../../utils/useRequireAuth";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter()
  const session = useRequireAuth()

  useEffect(() => {
    if (session) router.push('/manager/main')
  }, [session])

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
          <button 
            onClick={() => signIn("github")}
            className={styles.button}
          >
            <BsGithub />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </>
  )
}