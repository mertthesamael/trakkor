import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';

interface HeroSectionProps {
  
}

const HeroSection: FC<HeroSectionProps> = ({  }) => {
  return (
    <section className={styles.heroSection}>
        <div className={styles.heroSection__inner}>
            <div className={styles.heroSection__inner__text}>
                <div className={styles.heroSection__inner__text__title}>
                    <p className='sub-xl'>Team Progress Tracking Tool</p>
                    <h1 className='h1-m'>Track your team progress</h1>
                </div>
                <div className={styles.heroSection__inner__text__desc}>
                    <p className='bd-l'>Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra.<br/>
                    Ultrices faucibus neque velit risus ac id lorem.</p>
                </div>
                <div className={styles.heroSection__inner__text__buttons}>
                    <PrimaryButton dominant text='Start for free'/>
                    <PrimaryButton text='Request more info'/>
                </div>
            </div>  
            <div className={styles.heroSection__inner__logo}>
                <Image src={'/logo.png'} alt='Logo' width={284} height={284}/>
            </div>    

        </div>
    </section>
  )
}

export default HeroSection;