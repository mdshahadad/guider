import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide1 from '../../assets/images/carousel/slide1.jpg'
import slide2 from '../../assets/images/carousel/slide2.jpg'
import slide3 from '../../assets/images/carousel/slide3.jpg'
import slide4 from '../../assets/images/carousel/slide4.jpg'
import slide5 from '../../assets/images/carousel/slide5.jpg'
import SliderButton from './SliderButton';
import SliderText from './SliderText';

const Slider = () => {
    return (
        <div className='relative'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img className='w-full max-h-[800px]' src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full max-h-[800px]' src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full max-h-[800px]' src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full max-h-[800px]' src={slide4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full max-h-[800px]' src={slide5} alt="" />
                </SwiperSlide>
                <SliderButton></SliderButton>
                <SliderText></SliderText>
            </Swiper>
        </div>
    );
};

export default Slider;