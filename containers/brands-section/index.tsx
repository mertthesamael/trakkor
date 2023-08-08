import BrandCard from '@/components/Cards/Brand';
import { Brands } from './constants';
import styles from './style.module.scss'
import React, { FC } from 'react'

interface BrandsSectionProps {
  
}

const BrandsSection: FC<BrandsSectionProps> = ({  }) => {
  return (
    <section className={styles.brandsSection + ' dt-pd'}>
      <div className={styles.brandsSection__inner}>
        <div className={styles.brandsSection__inner__title}>
          <h2 className='h6'>Trusted by teams from leading companies</h2>
        </div>
        <div className={styles.brandsSection__inner__brands}>
          {Brands.map((el, _i) => <BrandCard key={_i} id={el.id} name={el.name} logo={el.icon} />)}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection;