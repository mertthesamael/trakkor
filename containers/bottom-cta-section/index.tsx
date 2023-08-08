import PrimaryButton from '@/components/Buttons/PrimaryButton';
import styles from './style.module.scss'
import React, { FC } from 'react'

interface BottomCtaSectionProps {
  
}

const BottomCtaSection: FC<BottomCtaSectionProps> = ({  }) => {
  return (
    <section className={styles.bottomCtaSection + ' dt-pd'}>
     <div className={styles.bottomCtaSection__title}>
        <h1 className='h2'>Your team. Your projects.</h1><br/>
        <span className='h2'>Always together.</span>
     </div>
     <div className={styles.bottomCtaSection__desc}>
        <p>Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.</p>
     </div>
     <div className={styles.bottomCtaSection__buttons}>
        <PrimaryButton dominant text='Start for free' />
        <PrimaryButton text='Request more info' />
     </div>
    </section>
  )
}

export default BottomCtaSection;