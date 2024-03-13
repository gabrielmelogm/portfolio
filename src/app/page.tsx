import { Email } from "../components/Contato/Email";
import { SocialMedias } from "../components/Contato/SocialMedias";
import { Experiencia } from "../components/Experiencia";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { OutrosProjetos } from "../components/OutrosProjetos";
import { Projetos } from "../components/Projetos";
import { Sobre } from "../components/Sobre";
import { Welcome } from "../components/Welcome";
import { getRepositories } from "../services/repositories.service";

export default async function Home() {
  const repositories = await getRepositories()

  return (
    <main>
      <Header />
      <SocialMedias />
      <Email />
      <Welcome />
      <Sobre />
      <Experiencia />
      <Projetos />
      <OutrosProjetos repositories={repositories} />
      <Footer />
    </main>
  )
}