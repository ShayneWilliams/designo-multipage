import React from 'react'
import styles from '../styles/CardCollection.module.css'
export default function CardCollection(props) {
    return (
        <div className ={styles['card-collection']}>
            {props.children}
        </div>
    )
}
