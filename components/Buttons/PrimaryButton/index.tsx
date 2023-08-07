import styles from './style.module.scss'
import React, { FC } from 'react'

interface PrimaryButtonProps {
  text:string
  dominant?:boolean
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, dominant }) => {
  return (
    <button className={styles.primaryButton + ' ' + 'btn-m'} style={dominant?{background:'#4F46E5',borderColor:'#6366F1'}:{}}>{text}</button>
  )
}

export default PrimaryButton;