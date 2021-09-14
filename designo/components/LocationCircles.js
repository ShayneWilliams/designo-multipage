import React from 'react'
import styles from '../styles/LocationCircles.module.css'
export default function LocationCircles() {
    return (
        <div className={styles['locations']}>
        <div className={styles['locations__item']}>
          <div>
            <img src="/assets/shared/desktop/illustration-canada.svg" />
          </div>
          <div>CANADA</div>
          <button>SEE LOCATION</button>
        </div>
        <div className={styles['locations__item']}>
          <div>
            <img src="/assets/shared/desktop/illustration-australia.svg" />
          </div>
          <div>AUSTRALIA</div>
          <button>SEE LOCATION</button>
        </div>
        <div className={styles['locations__item']}>
          <div>
            <img src="/assets/shared/desktop/illustration-united-kingdom.svg" />
          </div>
          <div>UNITED KINGDOM</div>
          <button>SEE LOCATION</button>
        </div>
      </div>
    )
}
