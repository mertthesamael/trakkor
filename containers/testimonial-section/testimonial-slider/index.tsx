"use client"
import styles from './style.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation, Pagination,EffectCoverflow
  } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import React, { FC, useRef } from 'react'
import { Testimonials } from '../constants';
import TestimonialSlide from '@/components/Slides/TestimonialSlide';
import { Arrow } from '@/components/Icons/Arrow';

interface TestimonialSliderProps {
  
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({  }) => {
  const swiperRef = useRef<any>(null)
  return (
    <div className={styles.testimonialSlider__wrapper}>
    <Swiper spaceBetween={16} loop  slidesPerView={'auto'}  className={styles.testimonialSlider} centeredSlides  loopedSlides={3}  onSwiper={((swiper) => swiperRef.current=swiper)}>
        {Testimonials.map((el,_i) => <SwiperSlide className={styles.testimonialSlider__slide} key={_i}><TestimonialSlide id={el.id} brand={el.brand} author={el.author} desc={el.desc}/></SwiperSlide>)}
    </Swiper>
    <div className={styles.testimonialSlider__wrapper__buttons}>
      <div className={styles.testimonialSlider__button + ' btn-m'} onClick={() => swiperRef.current.slidePrev()}>{<Arrow degree={0}/>}Prev</div>
      <div className={styles.testimonialSlider__button + ' btn-m'} onClick={() => swiperRef.current.slideNext()}>Next{<Arrow degree={180}/>}</div>
    </div>
    </div>
  )
}

export default TestimonialSlider;