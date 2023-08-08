import Link from 'next/link';
import { FooterNavs } from './constants';
import styles from './style.module.scss'
import React, { FC } from 'react'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({  }) => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__inner}>
            <div className={styles.footer__inner__navs}>
                {FooterNavs.map((el, _i)=> (
                    <div key={_i} className={styles.footer__inner__navs__category}>
                        <ul>
                            <h2 className='sub-m'>{el.title}</h2>
                            {el.navs.map((nav, _i) => (
                                <li key={_i} className='bd-m'><Link href={nav.href}>{nav.value}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={styles.footer__inner__banner}>

            </div>
        </div>
    </footer>
  )
}

export default Footer;