import React from 'react'
import styles from '../styles/OrangeCard.module.css'
export default function OrangeCard() {
    return (
        <div className ={styles.container}>
            <div className ={styles['container__text']}>
            <h2>Let’s talk about <br/>your project</h2>
            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>

            <div>
                <button>GET IN TOUCH</button>
            </div>
        </div>
    )
}
