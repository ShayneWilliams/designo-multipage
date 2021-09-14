import React from 'react'
import styles from '../styles/GrayCardCollection.module.css'
export default function GrayCardCollection(props) {
    console.log(props)
    return (
        <div className={styles['container']}> 
            {props.children}
        </div>
    )
}
