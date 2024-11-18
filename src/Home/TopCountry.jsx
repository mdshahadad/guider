// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Bangladesh from '../../public/images/cosxBazar.jpg'
import Malaysia from '../../public/images/Malaysia.jpg'
import Maldive from '../../public/images/maldive.jpg'
import Nepal from '../../public/images/Nepal.jpg'
import 'swiper/css';
import './style.css'
import { EffectCoverflow, Pagination, } from 'swiper/modules';

const TopCountry = () => {
    return (
        <div className='max-w-7xl mx-auto mt-16 space-y-10'>
            <h2 className='text-center font-bold text-5xl text-[#4a7ddf]'>TOP DESTINATION <span className='text-[#51c2e9]'>COUNTRY</span></h2>
            <div className='py-16'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={5}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        scale: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={Bangladesh} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Malaysia} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Maldive} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TopCountry;