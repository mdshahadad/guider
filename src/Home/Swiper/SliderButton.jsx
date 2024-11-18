import { useSwiper } from 'swiper/react';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const SliderButton = () => {
    const swiper = useSwiper();
    console.log(swiper)
    return (
        <div className='absolute bottom-0 py-8 px-20 z-10 backdrop-blur-sm  w-full'>
            <button onClick={() => swiper.slidePrev()}>
                <BsArrowLeftCircle className='text-6xl text-[#4a7ddf]' />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <BsArrowRightCircle className='ml-5 text-6xl text-[#4a7ddf]' />
            </button>
        </div>
    );
};

export default SliderButton;