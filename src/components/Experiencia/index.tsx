import styles from "./styles.module.sass"
import Image from "next/image"
import axios from "axios"

import { Swiper, SwiperSlide } from "swiper/react"

import { Container } from "../Container"
import { Title } from "../Title"
import { Pagination } from "swiper"

import 'swiper/css';
import 'swiper/css/pagination';
import { moment } from "../../utils/moment"

interface IExperiencesProps {
  id?: number
  attributes: {
    name: string
    kind: string
    description: string
    date_start: string
    date_finish?: string
    current: boolean
    profile: {
      data: {
        attributes: {
          name: string
          alternativeText?: string
          caption?: string
          width: number
          height: number
          url: string
        }
      }
    }
  }
}

export async function getExperiences(): Promise<IExperiencesProps[]> {
  try {
    const experiences = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/experiences?populate=*`, {
      maxBodyLength: Infinity,
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
    return experiences.data?.data
  } catch (error) {
    return []
  }
}

interface IExperienceComponentProps {
  experiences: IExperiencesProps[]
}

export function Experiencia({ experiences }: IExperienceComponentProps) {
  const paginationColor: any = {"--swiper-pagination-color": "#8257E5"}
  
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
              experiences.map((company, index) => (
                <SwiperSlide key={index} className={styles.slide__item}>
                  <div className={styles.experiencia__header}>
                    <h3 className={styles.empresa__title}>{company.attributes.name}</h3>
                    <span className={styles.empresa__tempo}>
                      {`${moment(company.attributes.date_start).format('MM/YYYY')} - ${(company.attributes.current) ? 'Atualmente' : moment(company.attributes.date_finish).format('MM/YYYY')}`}
                    </span>
                    <h4 className={styles.empresa__subtitle}>{company.attributes.kind}</h4>
                  </div>

                  <div className={styles.empresa__profile}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}${company.attributes.profile.data.attributes.url}`}
                      alt={company.attributes.profile.data.attributes.alternativeText}
                      width={company.attributes.profile.data.attributes.width}
                      height={company.attributes.profile.data.attributes.height}
                    />
                  </div>

                  <p className={styles.empresa__description}>{company.attributes.description}</p>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
