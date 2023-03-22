import React from 'react'
import styles from './Hero.module.css'
function Hero() {
  return (
    <div className={styles.hero_section}>
        <img src={ require ("../../assets/hero_image.png") } alt="Girl in a jacket" width="799px" height="212px"></img>
    </div>
  )
}

export default Hero