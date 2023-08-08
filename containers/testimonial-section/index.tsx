import styles from './style.module.scss'
import React, { FC } from 'react'
import TestimonialSlider from './testimonial-slider';

interface TestimonialSectionProps {
  
}

const TestimonialSection: FC<TestimonialSectionProps> = ({  }) => {
  return (
    <section className={styles.testimonialSection + ' dt-pd'}>
        <div className={styles.testimonialSection__inner}>
            <div className={styles.testimonialSection__inner__text}>
                <div className={styles.testimonialSection__inner__text__title}>
                <h1 className='h2'>Our partners. Our Friends.</h1><br/>
                <span className='h2'>They love us.</span>
                </div>
                <div className={styles.testimonialSection__inner__text__desc}>
                    <p className='bd-l'>Sem malesuada sed lectus id nunc mattis est eget tincidunt.</p>
                </div>
            </div>
            <div className={styles.testimonialSection__inner__slider}>
                <TestimonialSlider />
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection;