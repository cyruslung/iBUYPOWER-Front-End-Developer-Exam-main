'use client'

import React from 'react';
import ProductItem from '@/types/productItem';
import Image from 'next/legacy/image';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SliderProps {
    products: ProductItem[];
}

const Slider: React.FC<SliderProps> = ({ products }) => {
    // const slidesPerView = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 4;

    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="flex h-full flex-col justify-between rounded-md bg-white shadow-3xl m-4 text-ellipsis whitespace-nowrap max-w-80 min-w-72">
                            <div className="relative flex h-full flex-col gap-2 p-5 overflow-hidden text-ellipsis whitespace-nowrap">
                                <div className="w-fit rounded-full border border-stone-400 px-2 py-0.5 text-xs font-medium text-stone-400 absolute left-5 top-6">
                                    {product.type}
                                </div>
                                <div className="relative flex justify-center mt-5">
                                    <a href="#">
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            width={200}
                                            height={200}
                                            priority={true}
                                        />
                                    </a>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <a href="#">
                                        <h4 className="m-0 text-left text-ellipsis whitespace-normal line-clamp-1 text-base font-bold hover:text-[#FF1B1B]">
                                            {product.name}
                                        </h4>
                                    </a>
                                    <ul className="flex flex-col items-start gap-2 overflow-hidden md:gap-1 mt-4">
                                        <li className="list-none whitespace-normal text-start text-xs xl:text-sm"> {product.spec1} </li>
                                        <li className="list-none whitespace-normal text-start text-xs xl:text-sm"> {product.spec2} </li>
                                        <li className="list-none whitespace-normal text-start text-xs xl:text-sm"> {product.spec3} </li>
                                        <li className="list-none whitespace-normal text-start text-xs xl:text-sm"> {product.spec4} </li>
                                        <li className="list-none whitespace-normal text-start text-xs xl:text-sm"> {product.spec5} </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between rounded-md bg-[#F2F6FA] p-5">
                                <div className="flex flex-col">
                                    <div className="flex w-fit border-0 py-1 bg-[#FF1B1B] text-white gap-1 rounded-full px-2 text-xs">
                                        <span> {product.discount} </span>
                                    </div>
                                    <div className="flex items-end gap-3 mt-3">
                                        <p className="text-2xl font-bold"> {product.specialOffer} </p>
                                        <p className="relative bottom-1 my-0 text-xs text-stone-400 line-through"> {product.originalPrice} </p>
                                    </div>
                                    <button className="border-0 bg-transparent pl-0 text-start" aria-label="">
                                        <div className="mb-0 text-xs flex items-center">
                                            Starting at
                                            <span className="text-[#004CFF]"> {product.affirmPrice} </span>
                                            with
                                            <div className='relative w-[32px] h-[24px] ml-1'>
                                                <Image
                                                    src={product.affirmUrl}
                                                    alt="affirm logo"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex justify-between gap-2 mt-5 xs:flex-row xsMax:flex-row 3xs:flex-col 3xsMax:flex-col">
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold"> {product.shipping} </span>
                                        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs"> {product.arrivalTime} </span>
                                    </div>
                                    <div>
                                        <a aria-label="Buy Now" href="#">
                                            <button className="bg-white rounded-full transition ease-in-out border border-solid border-[#FF1B1B] relative flex text-center text-[#FF1B1B] text-xs 2xs:text-sm hover:text-white hover:bg-[#FF1B1B] px-3 py-1" type="button">
                                                {product.buyBtn}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-button w-24 absolute top-20 right-0">
                <button className="swiper-button-prev z-30 text-base group rounded shadow-lg p-4 transition"> </button>
                <button className="swiper-button-next z-30 group rounded shadow-lg p-4 transition hover:bg-[#ddd]"> </button>
            </div>
        </>
    );
};

export default Slider;
