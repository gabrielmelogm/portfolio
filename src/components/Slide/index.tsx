'use client'

import styles from "../Experience/styles.module.sass"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { moment } from "../../utils/moment"
import Image from "next/image"
import { IExperiencesProps } from "../../services/experiences.service"

interface ISlideProps {
  url: string
  experiences: IExperiencesProps[]
}

export function Slide({ url, experiences }: ISlideProps) {
  const paginationColor: any = {"--swiper-pagination-color": "#8257E5"}

  return (
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
                src={`${url}${company.attributes.profile.data.attributes.url}`}
                alt={company.attributes.profile.data.attributes.alternativeText || `Logo ${company.attributes.name}`}
                width={company.attributes.profile.data.attributes.width}
                height={company.attributes.profile.data.attributes.height}
              />
            </div>

            <p className={styles.empresa__description}>{company.attributes.description}</p>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}