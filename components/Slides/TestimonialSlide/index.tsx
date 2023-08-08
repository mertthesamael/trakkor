import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import { BrandType } from '@/types/BrandType';
import { AuthorType } from '@/types/AuthorType';

interface TestimonialSlideProps {
  id:number;
  brand:BrandType;
  author:AuthorType;
  desc:string;
}

const TestimonialSlide: FC<TestimonialSlideProps> = ({ brand, author,desc }) => {
  return (
    <div className={styles.testimonialSlide}>
        <div className={styles.testimonialSlide__brand}>
            {brand.icon}
            <h2 className='h6'>{brand.name}</h2>
        </div>
        <div className={styles.testimonialSlide__desc}>
            <p className='bd-xxl'>{desc}</p>
        </div>
        <div className={styles.testimonialSlide__author}>
            <div className={styles.testimonialSlide__author__img}>
                <Image src={author.img} width={64} height={64} alt='Peron Image' />
            </div>
            <div className={styles.testimonialSlide__author__info}>
                <h2 className='bd-l'>{author.name}</h2>
                <span className='bd-m'>{author.title}</span>
            </div>

        </div>
    </div>
  )
}

export default TestimonialSlide;