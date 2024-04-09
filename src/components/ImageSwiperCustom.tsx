import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
    items: any[];
};

const ImageSwiperCustom = ({ items }: Props) => {
    const swiperRef = useRef<any>();
    return (
        <Swiper
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            spaceBetween={30}
            effect="fade"
            pagination={{ clickable: true }}
            className="swiper mx-auto mb-5 mt-5"
            id="slider1"
            slidesPerView="auto"
        >
            <div className="swiper-wrapper">
                {items.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <img src={item} className="w-full object-cover" alt="itemImage" />
                        </SwiperSlide>
                    );
                })}
            </div>
            <button
                onClick={() => swiperRef.current.slidePrev()}
                className="swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:rotate-180">
                    <path d="M15 5L9 12L15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                onClick={() => swiperRef.current.slideNext()}
                className="swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                    <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </Swiper>
    );
};

export default ImageSwiperCustom;
