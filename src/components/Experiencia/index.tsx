import { Container } from "../Container"
import { Title } from "../Title"
import  Maximize from "../../assets/logo-maximize.png"
import  Lamppit from "../../assets/logo-lamppit.jpeg"
import  Bluemarble from "../../assets/logo-bluemarble.jpeg"
import styles from "./styles.module.sass"
import Image, { StaticImageData } from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

interface CompanyProps {
  title: string
  subtitle: string
  image: StaticImageData
  size: {
    width: number
    height: number
  }
  description: string
}

export function Experiencia() {
  
  const companies: CompanyProps[] = [
    {
      title: "Maximize",
      subtitle: "Software house focada em comunicação",
      image: Maximize,
      size: {
        width: 130,
        height: 70
      },
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem."
    },
    {
      title: "Lampp-it Solutions",
      subtitle: "Desenvolvedora de sistemas",
      image: Lamppit,
      size: {
        width:  120,
        height: 120
      },
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem."
    },
    {
      title: "Bluemarble",
      subtitle: "Software house voltada para logística portuária",
      image: Bluemarble,
      size: {
        width:  170,
        height: 170
      },
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem."
    },
  ]

  return (
    <section className={styles.experiencia}>
      <Container>
        <Title>Experiência</Title>
        <div className={styles.experiencia__content}>
          <Splide 
            className={styles.slide__list}
            options={{
              arrows: false
            }}
          >
            {
              companies.map((company, index) => (
                <SplideSlide key={index} className={styles.slide__item}>
                  <div className={styles.experiencia__header}>
                    <h3 className={styles.empresa__title}>{company.title}</h3>
                    <h4 className={styles.empresa__subtitle}>{company.subtitle}</h4>
                  </div>

                  <div className={styles.empresa__profile}>
                    <Image src={company.image} alt="Logo da maximize" width={company.size.width} height={company.size.height} />
                  </div>

                  <p className={styles.empresa__description}>{company.description}</p>
                </SplideSlide>
              ))
            }
          </Splide>
        </div>
      </Container>
    </section>
  )
}
