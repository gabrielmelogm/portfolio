import styles from "./styles.module.sass"
import Image from "next/image"

import { Container } from "../Container"
import { Title } from "../Title"

import 'swiper/css';
import 'swiper/css/pagination';
import { getExperiences } from "../../services/experiences.service"
import { Slide } from "../Slide";

export async function Experiencia() {
  const experiences = await getExperiences()
  
  return (
    <section id="experiencia" className={styles.experiencia}>
      <Container>
        <Title>Experiência</Title>
        <div className={styles.experiencia__content}>
          <Slide url={process.env.API_URL} experiences={experiences} />
        </div>
      </Container>
    </section>
  )
}
