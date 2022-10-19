import styles from '../../styles/Home.module.sass'
import { Email } from '../components/Contato/Email'
import { SocialMedias } from '../components/Contato/SocialMedias'
import { Header } from '../components/Header'
import { Welcome } from '../components/Welcome'

export default function Home() {
  return (
    <>
      <Header />
      <SocialMedias />
      <Email />
      <Welcome />
    </>
  )
}
