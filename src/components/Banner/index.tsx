import Botao from '../Botao'
import styles from './Banner.module.scss'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {


  return (
    <Swiper

    autoplay={{
      delay: 7000,
      disableOnInteraction: false,
    }}
    speed={2000}
    loop={true}
    slidesPerView={1}
    effect={'fade'}
    scrollbar={{hide: true}}
      modules={
        [EffectFade, Autoplay]}
      className={styles.banner} 
    >

      <SwiperSlide>
        <img src="assets/imagem6.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/imagem5.jpg" alt="" />
      </SwiperSlide>
    </Swiper>

  )
}
export default Banner