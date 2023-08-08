import PrimaryButton from '@/components/Buttons/PrimaryButton';
import styles from './style.module.scss'
import React, { FC } from 'react'
import Image from 'next/image';

interface StatsSectionProps {
  
}

const StatsSection: FC<StatsSectionProps> = ({  }) => {
  return (
    <section className={styles.statsSection + ' dt-pd'}>
        <div className={styles.statsSection__inner}>
            <div className={styles.statsSection__inner__statframe}>
                <div className={styles.statsSection__inner__statframe__text}>
                    <div className={styles.statsSection__inner__statframe__text__title}>
                        <h1 className='h5'>Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.</h1>
                    </div>
                    <div className={styles.statsSection__inner__statframe__text__desc}>
                        <p className='bd-l'>Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque.</p>
                    </div>
                    <div className={styles.statsSection__inner__statframe__text__button}>
                        <PrimaryButton text='Request more info'/>
                    </div>  
                </div>
                <div className={styles.statsSection__inner__statframe__img}>
                    <Image src={'/graph.png'} alt='Graph' fill style={{objectFit:'cover'}} />
                </div>
            </div>
        </div>    
    </section>
  )
}

export default StatsSection;