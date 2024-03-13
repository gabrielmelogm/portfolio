import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Welcome } from "../components/Welcome";
import { getRepositories } from "../services/repositories.service";
import { SocialMedias } from "../components/Contact/SocialMedias";
import { Email } from "../components/Contact/Email";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Repositories } from "../components/Repositories";

export default async function Home() {
  const repositories = await getRepositories()

  return (
    <main>
      <Header />
      <SocialMedias />
      <Email />
      <Welcome />
      <About />
      <Experience />
      <Projects />
      <Repositories repositories={repositories} />
      <Footer />
    </main>
  )
}