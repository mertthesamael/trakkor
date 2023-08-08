import { Tick } from '@/components/Icons/Tick';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from 'next/image';

interface ManagementSectionProps {
  
}

const ManagementSection: FC<ManagementSectionProps> = ({  }) => {
  return (
    <section className={styles.managementSection + ' dt-pd'}>
        <div className={styles.managementSection__inner}>
        
          <div className={styles.managementSection__inner__text + ' dt-pd'}>
            <div className={styles.managementSection__inner__text__title}>
                <h1 className='h3'>Team management.</h1><br/>
                <span className='h3'>Effortless syncronization.</span>
            </div>
            <div className={styles.managementSection__inner__text__desc}>
                <p className='bd-l'>Massa nunc nisi fames adipiscing scelerisque placerat et sagittis cursus. Mi commodo id maecenas amet, elementum a, in.</p>
            </div>
            <div className={styles.managementSection__inner__text__list}>
                <ul>
                  <li className='bd-l'><Tick /> Interdum volutpat turpis malesuada ac turpis.</li>
                  <li className='bd-l'><Tick /> Tortor ipsum pretium quis nunc.</li>
                  <li className='bd-l'><Tick /> Vitae odio a id purus in.</li>
                </ul>
            </div>
            <div className={styles.managementSection__inner__text__}>
              <PrimaryButton dominant text='Start for free'/>
            </div>
          </div>
          <div className={styles.managementSection__inner__images}>
            <Image src={"/management.jpg"} alt='Management IMG' fill style={{objectFit:'cover'}}/>
          </div>
          
        </div>

    </section >
  )
}

export default ManagementSection;