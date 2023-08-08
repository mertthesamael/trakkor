import Link from 'next/link';
import { Navs } from './constants';
import styles from './style.module.scss'
import React, { FC } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton';
import Hamburger from '../Hamburger';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className={styles.header}>
        <div className={styles.header__inner}>
            <div className={styles.header__inner__logo}>
                <h1 className='h5'>trakor</h1>
            </div>
            <nav className={styles.header__inner__nav}>
                {Navs.map((el, _i) => <Link key={_i} href={el.href}  className='btn-m'>{el.value}</Link>)}
            </nav>
            <div className={styles.header__inner__buttons}>
                <PrimaryButton text='Request more info'/>
            </div>
            <div className={styles.header__inner__menu}>
             <Hamburger/>
            </div>
        </div>
    </header>
  )
}

export default Header;