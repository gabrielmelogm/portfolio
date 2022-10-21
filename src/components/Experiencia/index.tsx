import { Container } from "../Container"
import { Title } from "../Title"
import  Maximize from "../../assets/logo-maximize.png"
import  Lamppit from "../../assets/logo-lamppit.jpeg"
import  Bluemarble from "../../assets/logo-bluemarble.jpeg"
import styles from "./styles.module.sass"
import Image, { StaticImageData } from "next/image"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';


interface CompanyProps {
  title: string
  subtitle: string
  time: string
  image: {
    src: StaticImageData
    width: number
    height: number
  }
  description: string
}

export function Experiencia() {
  const paginationColor: any = {"--swiper-pagination-color": "#8257E5"}
  
  const companies: CompanyProps[] = [
    {
      title: "Maximize",
      subtitle: "Software house focada em comunicação",
      time: "jul de 2022 - Atualmente",
      image: {
        src: Maximize,
        width: 130,
        height: 70
      },
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem."
    },
    {
      title: "Lampp-it Solutions",
      subtitle: "Desenvolvedora de sistemas",
      time: "mai de 2022 - jul de 2022",
      image: {
        src: Lamppit,
        width:  120,
        height: 120
      },
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem."
    },
    {
      title: "Bluemarble",
      subtitle: "Software house voltada para logística portuária",
      time: "jul de 2020 - mai de 2022",
      image: {
        src: Bluemarble,
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
          <Swiper
            style={paginationColor}
            className={styles.slide__list}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {
              companies.map((company, index) => (
                <SwiperSlide key={index} className={styles.slide__item}>
                  <div className={styles.experiencia__header}>
                    <h3 className={styles.empresa__title}>{company.title}</h3>
                    <span className={styles.empresa__tempo}>{company.time}</span>
                    <h4 className={styles.empresa__subtitle}>{company.subtitle}</h4>
                  </div>

                  <div className={styles.empresa__profile}>
                    <Image src={company.image.src} alt="Logo da maximize" width={company.image.width} height={company.image.height} />
                  </div>

                  <p className={styles.empresa__description}>{company.description}</p>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
