import Image from 'next/image';
import styles from './style.module.scss'
import React, { FC } from 'react'

interface DiagramSectionProps {
  
}

const DiagramSection: FC<DiagramSectionProps> = ({  }) => {
  return (
    <section className={styles.diagramSection + ' dt-pd'}>
        <div className={styles.diagramSection__inner}>

        <div className={styles.diagramSection__inner__upper}>
            <div className={styles.diagramSection__inner__upper__title}>
               <h1 className='h3'>Diam quam tortor eget id.<br/>
Aliquet lacus volutpat tristique sed diam.</h1>
            </div>
        </div>
        <div className={styles.diagramSection__inner__bottom}>
          <div className={styles.diagramSection__inner__bottom__img}> 
             <Image src={'/diagram.png'} fill alt='Diagram' style={{objectFit:'contain'}}/>
          </div>
        </div>
        </div>
     
    </section>
  )
}

export default DiagramSection;