import React from 'react'
import styles from '../styles/TopOrangeCard.module.css'

export default function TopOrangeCard(props) {
    const {title, description} = props;
    return (
        <div className={styles.container}>
            <div className={styles.content}>

            <h1>{title}</h1>
            <p>{description}</p>
            </div>
        </div>
    )
}
