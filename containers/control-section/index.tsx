import PrimaryButton from '@/components/Buttons/PrimaryButton';
import styles from './style.module.scss'
import React, { FC } from 'react'
import Image from 'next/image';

interface ControlSectionProps {
  
}

const ControlSection: FC<ControlSectionProps> = ({  }) => {
  return (
    <section className={styles.controlSection + ' dt-pd'}>
        <div className={styles.controlSection__inner}>
            <div className={styles.controlSection__inner__text}>
                <div className={styles.controlSection__inner__text__title}>
                    <h1 className='h3'>Control the flow.</h1>
                    <span className='h3'>Work faster.</span>
                </div>
                <div className={styles.controlSection__inner__text__desc}>
                    <p>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                </div>
                <div className={styles.controlSection__inner__text__buttun}>
                    <PrimaryButton dominant text='Start for free'/>
                </div>
            </div>
            <div className={styles.controlSection__inner__img}>
                <Image src={"/control.jpg"} fill style={{objectFit:'cover'}} alt='Section Image'/>
            </div>
        </div>
    </section>
  )
}

export default ControlSection;