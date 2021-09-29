import React from 'react'
import styles from '../styles/GrayCard.module.css'
export default function GrayCardCollection(props) {
    console.log(props)
    return (
        <div className={styles['gray-card__container']}> 
            {props.children}
        </div>
    )
}
