import { signOut } from "next-auth/react"
import { useRequireAuth } from "../../utils/useRequireAuth"

export default function Main() {
  const session = useRequireAuth()

  return (
    <>
      <h1>{`Hello, ${session?.user.name}`}</h1>
      <button onClick={() => signOut()}>Sair</button>
    </>
  )
}