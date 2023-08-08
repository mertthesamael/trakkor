import styles from './style.module.scss'
import React, { FC } from 'react'

interface BrandCardProps {
  id:number;
  name:string;
  logo:JSX.Element
}

const BrandCard: FC<BrandCardProps> = ({ name, logo }) => {
  return (
    <div className={styles.brandCard}>
     <div className={styles.brandCard__icon}>
        {logo}
     </div>
     <div className={styles.brandCard__name}>
        <h2 className='h6'>{name}</h2>
     </div>
    </div>
  )
}

export default BrandCard;