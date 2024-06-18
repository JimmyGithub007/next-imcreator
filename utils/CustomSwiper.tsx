import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const CustomSwiper = () => {
    return (
        <Swiper 
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                dynamicBullets: true,
            }} 
            modules={[Autoplay, Pagination]} 
            className="mySwiper h-full"
        >
            <SwiperSlide><Image alt="" width={400} height={400} src={"/assets/slide/slide1.jpg"} /></SwiperSlide>
            <SwiperSlide><Image alt="" width={400} height={400} src={"/assets/slide/slide2.jpg"} /></SwiperSlide>
            <SwiperSlide><Image alt="" width={400} height={400} src={"/assets/slide/slide3.jpg"} /></SwiperSlide>
            <SwiperSlide><Image alt="" width={400} height={400} src={"/assets/slide/slide4.jpg"} /></SwiperSlide>
        </Swiper>
    )
}

export default CustomSwiper;