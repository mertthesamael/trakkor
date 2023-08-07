import styles from './style.module.scss'
import React, { FC } from 'react'

interface HamburgerProps {
  
}

const Hamburger: FC<HamburgerProps> = ({  }) => {
  return (
    <button className={styles.hamburger}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 5H21H3Z" fill="white"/>
            <path d="M3 5H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 19H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
  )
}

export default Hamburger;