import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { About } from "../components/layout/About";
import { Email } from "../components/layout/Contact/Email";
import { SocialMedias } from "../components/layout/Contact/SocialMedias";
import { Experience } from "../components/layout/Experience";
import { Projects } from "../components/layout/Projects";
import { Repositories } from "../components/layout/Repositories";
import { Welcome } from "../components/layout/Welcome";
import { getRepositories } from "../services/repositories.service";

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