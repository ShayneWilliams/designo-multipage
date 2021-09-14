import React from 'react'
import styles from '../styles/GrayCard.module.css'
export default function GrayCard(props) {

    const {title, description, pic} = props;

    console.log(typeof pic)
    return (
        <div className={styles['container']} style={{background: `url(${pic})`}}>
            <div className={styles['content']}>

            <h2>{title}</h2>

            <p>{description}   <svg
                        width="5"
                        height="10"
                        viewBox="0 0 5 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L1 9"
                          stroke="#E7816B"
                          stroke-width="2"
                        />
                      </svg></p>
            {/* <img src={pic} /> */}
            </div>
        </div>
    )
}
