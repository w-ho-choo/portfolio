import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Swiper, SwiperSlide } from 'swiper/react'
import { WorkDetailSwiperImage } from '../style'
import { Autoplay, Pagination } from 'swiper/modules'

interface PropsImages {
  images: string[] | string
}

const WorkDetailSwiper = ({ images }: PropsImages) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={false}
      loop={true}
    >
      {Array.isArray(images) ? (
        images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <WorkDetailSwiperImage src={image} />
            </SwiperSlide>
          )
        })
      ) : (
        <SwiperSlide>
          <WorkDetailSwiperImage src={images} />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default WorkDetailSwiper
