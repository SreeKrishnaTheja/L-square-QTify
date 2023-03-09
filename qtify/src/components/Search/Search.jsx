import React from 'react'
import styles from './Search.module.css'
function Search({placeholder}) {
  return (
    <div className={styles.searchWrapper}>
    <input className={styles.search} placeholder = {placeholder}></input>
    <button className={styles.searchButton}>
    <img src={ require ("../../assets/Search_icon.png") } height="28px" />
    </button>

    </div>
  )
}

export default Search