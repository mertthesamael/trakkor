import { Tick } from '@/components/Icons/Tick';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from 'next/image';

interface ToolsSectionProps {
  
}

const ToolsSection: FC<ToolsSectionProps> = ({  }) => {
  return (
    <section className={styles.toolsSection + ' dt-pd'}>
        <div className={styles.toolsSection__inner}>
        <div className={styles.toolsSection__inner__images}>
            <div>
              <Image src={"/tools_img/tool1.jpg"} fill alt='Tool Img' style={{objectFit:'cover'}}/>
            </div>
            <div>
              <Image src={"/tools_img/tool2.png"} fill alt='Tool Img' style={{objectFit:'cover'}}/>
            </div>
            <div>
              <Image src={"/tools_img/tool3.png"} fill alt='Tool Img' style={{objectFit:'cover'}}/>
            </div>
          </div>
          <div className={styles.toolsSection__inner__text + ' dt-pd'}>
            <div className={styles.toolsSection__inner__text__title}>
                <h1 className='h3'>Powerful tools.</h1><br/>
                <span className='h3'>More control.</span>
            </div>
            <div className={styles.toolsSection__inner__text__desc}>
                <p className='bd-l'>Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
            </div>
            <div className={styles.toolsSection__inner__text__list}>
                <ul>
                  <li className='bd-l'><Tick /> Interdum volutpat turpis malesuada ac turpis.</li>
                  <li className='bd-l'><Tick /> Tortor ipsum pretium quis nunc.</li>
                  <li className='bd-l'><Tick /> Vitae odio a id purus in.</li>
                </ul>
            </div>
            <div className={styles.toolsSection__inner__text__}>
              <PrimaryButton dominant text='Start for free'/>
            </div>
          </div>
          
        </div>

    </section >
  )
}

export default ToolsSection;