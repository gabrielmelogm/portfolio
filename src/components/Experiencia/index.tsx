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
      subtitle: "Software house especialista em comunicação",
      time: "jul de 2022 - Atualmente",
      image: {
        src: Maximize,
        width: 130,
        height: 70
      },
      description: "Na maximize eu atuo como desenvolvedor full stack pleno na área de projetos, desenvolvendo site institucionais, landing pages, hot sites e pequenos sistemas, entre as tecnologias que tive contato se destaca o laravel, vue, node, react, stylus e outras, na maxi, as tecnologias são bem diversificadas e decididas conforme a demanda."
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
      description: "Atuei como desenvolvedor full stack e UX design, eu era sediado para a Seduc - Ma, local onde desenvolvi sistemas desde o protótipo até a aplicação final."
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
      description: "Atuei como desenvolvedor full stack até a gerência de projetos, era responsável pelo desenvolvimento de sistemas complexos de controle logístico em diversas empresas do ramo portuário, projetos que tive a oportunidade de desenvolver plataformas de controle de descarga de navios, sistema de chamados, e automações de processos."
    },
  ]

  return (
    <section id="experiencia" className={styles.experiencia}>
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
